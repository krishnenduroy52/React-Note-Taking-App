# Note Taking app using react
<hr>
<br>

## Website Link

[Take-Note Website](takenotebro.netlify.app)

<hr>

## Working

1. Fetches Data form user's Local Stroage

   ```javascript
   useState(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem(KEY_NAME)
		);
    console.log(savedNotes);
		if (savedNotes != null) {
			setNotes(savedNotes);
		} 
	});
  
2. Display all notes iterating throughout the array
3. Store that input in localStorage in an array
	```javascript
	useEffect(() => {
		localStorage.setItem(
			KEY_NAME,
			JSON.stringify(notes)
		);
	}, [notes]);
	```
4. search notes
	- Simple, by filtering the Notes array.
	```javascript
	<Notes notes={notes.filter((note) => note.text.toLowerCase().includes(serachItem))} handelAddnote={addNote} handelDeleteNote={deleteNote}/>
	```


## Run the code
```
npm install
npm start
```
