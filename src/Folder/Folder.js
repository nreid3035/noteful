import React from 'react';
import { Link } from 'react-router-dom'

export default function Folder(props) {
    return (
        <div className="folder">
          <Link to={`/folder/${props.folder.id}`}>
            <h2>{props.folder['name']}</h2>           
          </Link>
        </div>
    )
}
