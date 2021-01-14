import React from 'react';
import NoteContext from '../context/NoteContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

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
        console.log(chosenNote)
        
        if (chosenNote.length > 0) {
            return (
                <div>
                    <button onClick={() => this.props.history.goBack()}>Go Back!</button>
            <h2>{chosenNote[0].name}</h2>
            <p>{chosenNote[0].modified}</p>
            <p>{chosenNote[0].content}</p>
                </div>
                
            )
        } else {
            throw new Error;
        }

       
    }
}

export default NoteComponent;