import React, { Component } from 'react';
import Folder from '../Folder/Folder'
import AddFolder from '../AddFolder/AddFolder'
import NoteContext from '../context/NoteContext';
import PropTypes from 'prop-types'

class Sidebar extends Component {
    static contextType = NoteContext


    render() {
        const { folders } = this.context

        const foldersArr = folders.map((folder, i) => {
            return (
                <Folder folder={folder} key={i} />
            )
        })
        

        return (
            <section className="sidebar__section">
                {foldersArr}
                <AddFolder />
            </section>
        )
    }
}

export default Sidebar;