import React from 'react';
import deleteimg from './img/Delete.png'

const note = ({ id, text, date, handelDeleteNote }) => {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note__footer'>
        <small>{date}</small>
        <img className='deleteImg' alt='delete-icon' src={deleteimg} onClick={() => handelDeleteNote(id)} />
      </div>
    </div>
  )
}
export default note;
