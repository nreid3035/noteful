import React from 'react';

class DeleteNote extends React.Component {
    constructor(props) {
        super(props)
    } 

    
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

export default DeleteNote