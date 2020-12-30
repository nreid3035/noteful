import React from 'react';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';
import Folder from '../Folder/Folder'

class FolderComponent extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        console.log(this.props)
        const folders = this.props.folders.map((folder, i) => {
            return <Folder folder={folder} key={i} />
        })

        const matchingNotes = this.props.notes.filter(note => note.folderId === this.props.folderInfo.params.folderId)
        const notes = matchingNotes.map((note, i) => {
            return <Note note={note} key={i} />
        })

        return (
            <div className='folderpage__container'>
                <div className='folders'>
                {folders}
                <AddFolder />
                </div>
                <div className='notes'>
                {notes}
                <AddNote />
                </div>
            </div>
        )
    }
}


export default FolderComponent;