import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AddFolder extends Component {


    render() {
        console.log(this.props)
        return (
            // Onclick link to add folder form
            <Link to="/addFolderForm">
              <button>Add Folder</button>          
            </Link>
        )
    }
}

export default AddFolder;