import React, { useState } from 'react';
import logo from './logo.svg';
import Note from './Note';
import './notes.css';


const [notes, setNotes] = useState([
  {id: 0, title: "Title here", text: "Description goes here"}, 
  {id: 1, title: "Title maybe", text: "Type whatever you want"}
]);

function Notes() {
    
  }

export function DisplayNotes(){
    return (
      <>
        <div className="notesMain">
          {notes.map((note) => <Note key={note.id} title={note.title} text={note.text}/>)}
        </div>
        <div className='addNote' onClick={ addNote }>
          +
        </div>
      </>
      );
}

const addNote = () => {
  const newNote = { id: notes.length + 1, title: 'Type here', text: 'and here' };
  setNotes([...notes, newNote]);
}