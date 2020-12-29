import React from 'react'
import { Link } from 'react-router-dom'


export default function Note(props) {
    return (
        <div className="note__container" key={props.key}>
            <Link to={`/note/${props.note.id}`}>
              <h3>{props.note.name}</h3>
            </Link>
            <p>{props.note.modified}</p>
            <button>Delete</button>
        </div>
    )
}