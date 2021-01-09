import React from 'react';
import NoteContext from '../context/NoteContext';
import Note from '../Note/Note'
import DisplaySingleNote from '../DisplaySingleNote/DisplaySingleNote'

class NoteComponent extends React.Component {
    constructor(props) {
        super(props)
    }
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
        console.log(chosenNote)
        const note = chosenNote.map((note, i) => {
           return <DisplaySingleNote
                name={note.name}
                modified={note.modified}
                content={note.content} />
        })
        console.log(chosenNote)


        return (
            <div>
                {note}
            </div>
            
        )
    }
}

export default NoteComponent;