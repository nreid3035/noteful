import React from 'react';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import Note from '../Note/Note';
import Folder from '../Folder/Folder'
import NoteContext from '../context/NoteContext';

class FolderComponent extends React.Component {
    static contextType = NoteContext;

    static defaultProps = {
        folders: [],
        notes: []
    }



    render() {
        const { folders, notes } = this.context

        console.log(this.props)
        const foldersArr = folders.map((folder, i) => {
            return <Folder folder={folder} key={i} />
        })

        const matchingNotes = notes.filter(note => note.folderId === this.props.match.params.folderId)
        const notesArr = matchingNotes.map((note, i) => {
            return <Note note={note} key={i} />
        })

        return (
            <div className='folderpage__container'>
                <div className='folders'>
                {foldersArr}
                <AddFolder />
                </div>
                <div className='notes'>
                {notesArr}
                <AddNote />
                </div>
            </div>
        )
    }
}


export default FolderComponent;