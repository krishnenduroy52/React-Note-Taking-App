import React, { useEffect } from 'react';
import './App.css'
import { useState } from 'react';
import { nanoid } from 'nanoid'


import Nav from './Nav';
import Notes from './notes';

function App() {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Wellcome to Take Note website",
      date: "14/06/2022"
    }
  ]);

  const [serachItem, setSearchItem] = useState('');

  const deleteNote = (id) => {
    const newNotes = notes.filter((note)=> note.id !== id)
    setNotes(newNotes);
  }

  useState(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
    console.log(savedNotes);
		if (savedNotes != null) {
			setNotes(savedNotes);
		} 
	});

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  return (
    <div className="App">
      <Nav handelSeachNote={setSearchItem}/>
      <Notes notes={notes.filter((note) => note.text.toLowerCase().includes(serachItem))} handelAddnote={addNote} handelDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
