# Note Taking app using react

1. Fetches input form user's Local Stroage

   ```
   useState(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);
    console.log(savedNotes);
		if (savedNotes != null) {
			setNotes(savedNotes);
		} 
	});
  ```
-Display all notes iterating throughout the array
-Store that input in localStorage in an array
-User can also search notes

Run the code
>npm install
>npm start
