import { Component } from 'react';
import NoteContext from '../context/NoteContext';
import NoteContainer from '../NoteContainer/NoteContainer';
import Sidebar from '../Sidebar/Sidebar';



class MainComponent extends Component {
    static contextType = NoteContext;

    static defaultProps = {
        folders: [],
        notes: []
    }



    render() {
        return (
            <div>
                <Sidebar />
                <NoteContainer />
            </div>
        )
    }
}

export default MainComponent;