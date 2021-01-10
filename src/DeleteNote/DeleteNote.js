import React from 'react';
import NoteContext from '../context/NoteContext';
import PropTypes from 'prop-types'

class DeleteNote extends React.Component {
    static contextType = NoteContext

    
deleteNote = (noteId) => {
    fetch(`http://localhost:9090/notes/${noteId}`, {
        method: 'DELETE', 
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
      .then(responseJson => this.context.handleDelete(noteId))
      .catch(err => console.log(err))
}

    
    render() {
        return (<div>
            {<button onClick={() => this.deleteNote(this.props.noteId)}>Delete Note</button>}

        </div>
        )
    }
}

DeleteNote.propTypes = {
    noteId: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default DeleteNote