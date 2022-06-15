import React from 'react';
import Note from './note';
import AddNote from './AddNote';
const Notes = ({notes, handelAddnote, handelDeleteNote}) => {
  return (
    <div className='notes-list container'>
      {notes.map((note) => 
            <Note 
              id={note.id}
              text={note.text}
              date={note.date}
              handelDeleteNote={handelDeleteNote}/>
            )}
      <AddNote handelAddnote={handelAddnote}/>      
    </div>
  )
}

export default Notes
