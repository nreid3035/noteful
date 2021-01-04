import React, { Component } from 'react';
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
                {notes}
            </section>
        )
    }
}


export default NoteContainer