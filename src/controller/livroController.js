const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const createBook = async (req, res) => {
    const { titulo, autor, anoDePublicacao, genero } = req.body;
    const novoLivro = await prisma.livro.create({ data: { titulo, autor, anoDePublicacao, genero } });
    res.status(201).json(novoLivro);
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { titulo, autor, anoDePublicacao, genero } = req.body;
    try {
        const livroAtualizado = await prisma.livro.update({
            where: { id: parseInt(id) },
            data: { titulo, autor, anoDePublicacao, genero }
        });
        res.json(livroAtualizado);
    } catch (error) {
        res.status(404).json({ error: 'Livro não encontrado' });
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.livro.delete({ where: { id: parseInt(id) } });
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: 'Livro não encontrado' });
    }
};

const getAllBooks = async (req, res) => {
    const livros = await prisma.livro.findMany();
    res.json(livros);
};

module.exports = {createBook, updateBook, deleteBook, getAllBooks}