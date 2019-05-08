import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

// Add new Note
router.route('/notes').post(NoteController.addNote);

// Delete note by id
router.route('/notes/:noteId').delete(NoteController.deleteNote);

// Edit Note by id
router.route('/notes/:noteId').put(NoteController.editNote);

export default router;
