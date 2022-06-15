import {useState} from 'react';
const Addnote =({handelAddnote})=>{
    const [noteText, setNoteText] = useState('');

    const handelChange = (event) => {
        if(event.target.value.length<=200){
            setNoteText(event.target.value);
        }
    }

    const handelSaveClick = () => {
        if (noteText.trim().length > 0) {
            handelAddnote(noteText);
            setNoteText('');
        }
    }
    return(
        <div className="note new">
            <textarea 
                rows='8'
                cols='10'
                placeholder="Type to add a note..."
                value={noteText}
                onChange={handelChange}
            ></textarea>
            <div className="note__footer">
                <small>{200-noteText.length} Remaining</small>
                <button className="save" onClick={handelSaveClick}>Save</button>
            </div>
        </div>
    )
}

export default Addnote;