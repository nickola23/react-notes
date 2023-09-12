import logo from './logo.svg';
import { addNote } from './DisplayNotes';
import './notes.css';

function Note(props) {
    return (
      <>
      <div className="notesMain">
          <div className="note">
              <div className="noteHeader">
                  <img className='noteLogo' src={logo} alt="React logo" />
                  <h2 className="noteTitle">{ props.title }</h2>
                  <div className="noteClose">X</div>
              </div>
              <div className="noteBody">
                  <p className='noteText' contentEditable="true" >{ props.text }</p>
              </div>
          </div>
      </div>
      <div className='addNote' onClick={ addNote() }>
          +
      </div>
      </>
      
    );
  }
  
  export default Note;