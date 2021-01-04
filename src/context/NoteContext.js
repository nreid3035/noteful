import React from 'react';

const NoteContext = React.createContext({
    folders: [],
    notes: [],
    handleDelete: () => {}
})

export default NoteContext