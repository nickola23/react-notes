import logo from './logo.svg';
import './notes.css';

function Notes() {
  return (
    <>
    <div className="notesMain">
        <div className="note">
            <div className="noteHeader">
                <img className='noteLogo' src={logo} alt="React logo" />
                <h2 className="noteTitle">Title here</h2>
                <div className="noteClose">X</div>
            </div>
            <div className="noteBody">
                <p className='noteText' contenteditable="true">lkjghlkfv</p>
            </div>
        </div>
    </div>
    <div className='addNote'>
        +
    </div>
    </>
    
  );
}

export default Notes;