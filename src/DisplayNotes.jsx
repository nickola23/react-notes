import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Note from './Note';
import './notes.css';

export function DisplayNotes(){
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('/api/quotes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.error('Došlo je do greške prilikom primanja podataka:', error);
      });
  }, []);


  const addQuote = () => {
    const newQuote = { id: quotes.length + 1, title: 'Type here', text: 'and here', date: new Date()};
    setQuotes([...quotes, newQuote]);
  }

  const removeNote = (id) => {
    const updatedQuotes = quotes.filter((quote) => quote.id !== id);
    setQuotes(updatedQuotes);
  };
  
    return (
      <>
        <div className="notesMain">
          {quotes.map((quote) => <Note key={quote.id} title={quote.title} text={quote.text} date={quote.date.toLocaleDateString('en-GB')} time={String(quote.date.getHours()) + ":" + String(quote.date.getMinutes()) + ":" + String(quote.date.getSeconds())}/>)}
        </div>
        <div className='addNote' onClick={ addQuote }>
          +
        </div>
      </>
      );
      
}

