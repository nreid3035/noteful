import React from 'react';

const NoteContext = React.createContext({
    folders: [],
    notes: [],
    handleDelete: () => {},
    setFolders: () => {},
    setNotes: () => {}
})

export default NoteContext