const Note = require('../models/note.model');

// Create a new note
exports.createNote = async (req, res) => {
    try {
      const { title, content, status } = req.body;
      const userId = req.user._id; // Obtener el ID del usuario desde la solicitud
  
      const newNote = new Note({
        userId,
        title,
        content,
        status
      });
  
      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
// Get all notes for a user
exports.getNotes = async (req, res) => {
  try {
    const userId = req.user._id;
    const notes = await Note.find({ userId });
    res.json(notes);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get a note by Id
exports.getNoteById = async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
  
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Filter notes by status
exports.getNotesByStatus = async (req, res) => {
    try {
      const userId = req.user._id;
      const status = req.params.status; 
  
      const notes = await Note.find({ userId, status });
  
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedData = req.body;

    const updatedNote = await Note.findByIdAndUpdate(noteId, updatedData, { new: true });

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    const note = await Note.findByIdAndDelete(id);

    if (!note) {
      return res.status(404).send('Note not found');
    }

    res.status(200).json({message:'Note successfully deleated'});
  } catch (error) {
    res.status(500).send(error.message);
  }
};
