import React from 'react';
import NoteContext from '../context/NoteContext';

class AddNoteForm extends React.Component {
    static contextType = NoteContext

    constructor(props) {
        super(props)
        this.noteNameInput = React.createRef();
        this.noteContentInput = React.createRef();
    }

    handleNoteSubmit = (e) => {
        e.preventDefault()
        const noteName = this.noteNameInput.current.value;
        const noteContent = this.noteContentInput.current.value
        console.log(noteName, noteContent)
        const jsonBody = {
            "id": "",
            "name": noteName,
            "modified": "",
            "folderId": "",
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
    }

    render() {
        return (
            <form className='add_note' onSubmit={(e) => this.handleNoteSubmit(e)}>
                <h2>Add Note Form</h2>
                <div className='input_container'>
                    <label htmlFor='note_name'>Note Name</label>
                    <input type="text" ref={this.noteNameInput} className='name_input' name='note_name' id='note_name' />
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

export default AddNoteForm