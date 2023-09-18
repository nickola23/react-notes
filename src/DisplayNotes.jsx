import React, { useState } from 'react';
import logo from './logo.svg';
import Note from './Note';
import './notes.css';


export function DisplayNotes(){
  const [notes, setNotes] = useState([
    {id: 0, title: "Title here", text: "Description goes here", date: new Date()}, 
    {id: 1, title: "Title maybe", text: "Type whatever you want", date: new Date()}
  ]);
  const addNote = () => {
    const newNote = { id: notes.length + 1, title: 'Type here', text: 'and here', date: new Date()};
    setNotes([...notes, newNote]);
  }

  const removeNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };
  
    return (
      <>
        <div className="notesMain">
          {notes.map((note) => <Note key={note.id} title={note.title} text={note.text} date={note.date.toLocaleDateString('en-GB')} time={String(note.date.getHours()) + ":" + String(note.date.getMinutes()) + ":" + String(note.date.getSeconds())}/>)}
        </div>
        <div className='addNote' onClick={ addNote }>
          +
        </div>
      </>
      );
      
}

