import React from 'react';
import NoteContext from '../context/NoteContext';
import Note from '../Note/Note'

class NoteComponent extends React.Component {
    static contextType = NoteContext;

    static defaultProps = {
        folders: [],
        notes: []
    }




    render() {
        const { notes } = this.context

        console.log(this.props)
        const noteId = this.props.match.params.noteId
        const chosenNote = notes.filter(note => note.id === noteId);
        const note = chosenNote[0]

        return (
            <div>
                <button>Go Back!</button>
                <div className='noteComponent__note'>
                    <h2>{note.name}</h2>
                    <button>Delete</button>
                    <p>{note.modified}</p>
                </div>
                    <p>{note.content}</p>
            </div>
        )
    }
}

export default NoteComponent;