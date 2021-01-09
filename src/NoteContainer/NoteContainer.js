import React, { Component } from 'react';
import AddNote from '../AddNote/AddNote';
import NoteContext from '../context/NoteContext';
import Note from '../Note/Note'

class NoteContainer extends Component {
    static contextType = NoteContext

    static defaultProps = {
        notes: []
    }




    render() {

        const { notes } = this.context

        const notesArr = notes.map((note, i) => {
            return <Note note={note} key={i} />
        })


        return (
            <section className="note__section">
                {notesArr}
                <AddNote />
            </section>
        )
    }
}


export default NoteContainer