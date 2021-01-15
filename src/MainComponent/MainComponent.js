import { Component, Fragment } from 'react';
import NoteContext from '../context/NoteContext';
import NoteContainer from '../NoteContainer/NoteContainer';
import Sidebar from '../Sidebar/Sidebar';
import PropTypes from 'prop-types'



class MainComponent extends Component {
    static contextType = NoteContext;



    render() {
        return (
            <Fragment>
                <Sidebar />
                <NoteContainer />                  
            </Fragment>    
        )
    }
}

MainComponent.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
}

export default MainComponent;