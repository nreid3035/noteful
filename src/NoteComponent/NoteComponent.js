import React from 'react';
import NoteContext from '../context/NoteContext';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import PropTypes from 'prop-types';

class NoteComponent extends React.Component {
    static contextType = NoteContext;


    render() {
        console.log(this.props)

        const { notes } = this.context

        const noteId = this.props.match.params.noteId
        const chosenNote = notes.filter(note => note.id === noteId);
        
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

NoteComponent.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
}

export default NoteComponent;