import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function Folder(props) {
  console.log(props)
    return (
        <div className="folder" key={props.key}>
          <Link to={`/folder/${props.folder.id}`}>
            <h2>{props.folder['name']}</h2>           
          </Link>
        </div>
    )
}


Folder.propTypes = {
  folder: PropTypes.object.isRequired,
  key: PropTypes.number
}