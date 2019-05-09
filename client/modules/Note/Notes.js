import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import styles from './Note.css';

const Notes = ({ notes }) => {
  return (
    <ul className={styles.Notes}>
      {notes.map(note => (
        <Note id={note.id} key={note.id}>
          {note.task}
        </Note>
      ))}
    </ul>
  );
};

Notes.propTypes = {
  notes: PropTypes.array,
};

export default Notes;
