import React from 'react';
import Note from '../Note/Note'

class NoteComponent extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {
        console.log(this.props)
        const noteId = this.props.noteInfo.params.noteId
        const chosenNote = this.props.notes.filter(note => note.id === noteId);
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