import React, { Component } from 'react';
import Note from '../Note/Note'

class NoteContainer extends Component {
    constructor(props) {
        super(props)
    }



    render() {

        const notes = this.props.notes.map((note, i) => {
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