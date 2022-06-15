import React from 'react'
import searchIcon from './img/serach-icon.png'
const Nav = ({handelSeachNote}) => {
    return (
        <>
            <nav class="flex align-center">
                <p><span>Take</span>Note</p>
                <div className='search'>
                    <input type="text" class="searchTerm" 
                        onChange={(event) => handelSeachNote(event.target.value)}
                        placeholder="What are you looking for?" />
                    <button type="submit" className="searchButton">
                        <img className='deleteImg' alt='delete-icon' src={searchIcon}/>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Nav;