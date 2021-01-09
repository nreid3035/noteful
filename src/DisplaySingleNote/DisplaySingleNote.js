import React from 'react'

export default function DisplaySingleNote(props) {
    return (
        <div className="single_note">
            <h2>{props.name}</h2>
        </div>
    )
}