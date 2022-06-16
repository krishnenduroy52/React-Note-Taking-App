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
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    let date = dd + '/' + mm + '/' + yyyy;
    const newNote = {
      id: nanoid(),
      text: text,
      date: date
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }
  return (
    <div className="App">
      <Nav handelSeachNote={setSearchItem}/>
      <Notes notes={notes.filter((note) => note.text.toLowerCase().includes(serachItem.toLowerCase()))} handelAddnote={addNote} handelDeleteNote={deleteNote}/>
    </div>
  );
}

export default App;
