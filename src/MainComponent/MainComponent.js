import { Component } from 'react';
import NoteContainer from '../NoteContainer/NoteContainer';
import Sidebar from '../Sidebar/Sidebar';



class MainComponent extends Component {
    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div>
                <Sidebar folders={this.props.folders} />
                <NoteContainer notes={this.props.notes} />
            </div>
        )
    }
}

export default MainComponent;