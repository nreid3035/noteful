import React from 'react'
import { Link } from 'react-router-dom'
import DeleteNote from '../DeleteNote/DeleteNote'
import PropTypes from 'prop-types'


export default function Note(props) {
    console.log(props)
    return (
        <div className="note__container" key={props.key}>
            <Link to={`/note/${props.note.id}`}>
              <h3>{props.note.name}</h3>
            </Link>
            <p>{props.note.modified}</p>
            <DeleteNote noteId={props.note.id} />
        </div>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    key: PropTypes.number
}