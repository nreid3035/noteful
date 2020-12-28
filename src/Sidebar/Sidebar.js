import React, { Component } from 'react';
import Folder from '../Folder/Folder'
import AddFolder from '../AddFolder/AddFolder'


class Sidebar extends Component {
    constructor(props) {
        super(props)
        
    }



    render() {
        const folders = this.props.folders.map((folder, i) => {
            return (
                <Folder folder={folder} key={i} />
            )
        })
        
        console.log(folders)

        return (
            <section className="sidebar__section">
                {folders}
                <AddFolder />
            </section>
        )
    }
}

export default Sidebar;