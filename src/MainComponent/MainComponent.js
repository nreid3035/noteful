import { Component, Fragment } from 'react';
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
            <Fragment>
                <Sidebar />
                <NoteContainer />                  
            </Fragment>    
        )
    }
}

export default MainComponent;