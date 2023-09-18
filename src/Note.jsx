import logo from './logo.svg';
import { FaX } from "react-icons/fa6";
import { addNote } from './DisplayNotes';
import './notes.css';

function Note(props) {
    return (
      <>
        <div className="note">
            <div className="noteHeader">
                <img className='noteLogo' src={logo} alt="React logo" />
                <h2 className="noteTitle">{ props.title }</h2>
                <div className="noteClose">
                  <FaX />
                </div>
            </div>
            <div className="noteBody">
                <p className='noteText' contentEditable="true" >{ props.text }</p>
            </div>
            <div className="noteFooter">
            <div className="noteDate">
                  { props.date }
              </div>
              <div className="noteTime">
                  { props.time }
              </div>
              
            </div>
        </div>
      </>
      
    );
  }
  
  export default Note;