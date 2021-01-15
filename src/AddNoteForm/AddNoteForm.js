import React from 'react';
import NoteContext from '../context/NoteContext';
import ValidationError from '../ValidationError/ValidationError';
import PropTypes from 'prop-types'

class AddNoteForm extends React.Component {
    static contextType = NoteContext

    constructor(props) {
        super(props)
        this.state = {
            formTouched: false
        }
        this.noteNameInput = React.createRef();
        this.noteContentInput = React.createRef();
    }

    validateNoteName = () => {
        const noteName = this.noteNameInput.current.value;
        if (noteName.length === 0) {
            return 'Note name is required'
        }
    }

    updateTouched = () => {
        this.setState({
            formTouched: true
        })
    }

    handleNoteSubmit = (e) => {
        e.preventDefault()
        const noteName = this.noteNameInput.current.value;
        const noteContent = this.noteContentInput.current.value
        const folderId = e.target.folder_selection.value
        console.log(noteName, noteContent)
        console.log(e.target.folder_selection.value)
        const jsonBody = {
            "id": "",
            "name": noteName,
            "modified": "",
            "folderId":  folderId,
            "content": noteContent
        }
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(jsonBody)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const contextNotes = this.context.notes
            const notes = [...contextNotes, data]
            this.context.setNotes(notes)
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error);
            throw new Error
        })
    }

    render() {
        console.log(this.props)
        const options = this.context.folders.map((folder, idx) => {
            return <option value={folder.id} key={idx}>{folder.name}</option>
        })

        return (
            <form className='add_note' 
            onSubmit={(e) => this.handleNoteSubmit(e)}
            onChange={() => this.updateTouched()}>
                <h2>Add Note Form</h2>
                <div className='input_container'>
                    <label htmlFor='note_name'>Note Name</label>
                    <input type="text" 
                           ref={this.noteNameInput}
                           className='name_input' 
                           name='note_name' 
                           id='note_name' 
                        
                           required />
                    {this.state.formTouched && (
                    <ValidationError message={this.validateNoteName()} />
                    )}
                </div>
                <div className='input_container'>
                    <label htmlFor="folder_selection">Select a folder:</label>
                    <select id="folder_selection" name="folder_selection">
                        {options}
                    </select>
                </div>
                <div className='input_container'>
                    <label htmlFor='note_content'>Note Content</label>
                    <textarea className='note_textarea' ref={this.noteContentInput} name='note_content' id='note_content'>Type your thoughts here...</textarea>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

AddNoteForm.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
}

export default AddNoteForm