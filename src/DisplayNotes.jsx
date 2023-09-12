import logo from './logo.svg';
import Note from './Note';
import './notes.css';
var notes =[
  {id: 0, title: "Title here", text: "Description goes here"}
]

function Notes() {
    
  }

export function DisplayNotes(){
    return (
        <>
            {notes.map((note) => <Note key={note.id} title={note.title} text={note.text}/>)}
        </>
      );
}

export function addNote(){
  var i = 0;
  notes.forEach(element => {
    i++;
  });
  notes.push(...notes, { id: i, title: "Type here", text: "and here"});
  DisplayNotes()
}