import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

class AddNote extends Component {
    render() {
        console.log(this.props)
        return (
            <Link to='/addNoteForm'>
              <button>Add Note</button>
            </Link>
        )
    }
}

export default AddNote