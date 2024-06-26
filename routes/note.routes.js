// note.routes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/note.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Aplicar middleware de autenticación para todas las rutas de notas
router.use(authMiddleware);

// Rutas de notas protegidas por autenticación
router.get('/', noteController.getNotes);
router.post('/', noteController.createNote);
router.get('/:id', noteController.getNoteById);
router.get('/status/:status', noteController.getNotesByStatus);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
