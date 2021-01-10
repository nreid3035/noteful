import React from 'react';
import NoteContext from '../context/NoteContext';


class AddFolderForm extends React.Component {
    static contextType = NoteContext;

    constructor(props) {
        super(props)
        this.folderNameInput = React.createRef();
    }


    handleFolderSubmit = (e) => {
        e.preventDefault()
        console.log(this.props)
        const folderName = this.folderNameInput.current.value
        const id = Math.floor(Math.random() * 10000)
        const data = {
            "id": id,
            "name": folderName
        }
        console.log(folderName)
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseJson => {
            console.log('Success:', responseJson)
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log('Error:', error)
        })
    }

    render() {
        return (
            <NoteContext.Consumer>
                {context => 
                <form className="add_folder" onSubmit={(e) => this.handleFolderSubmit(e)}>
                <h2>Add Folder</h2>
                <div className='input_container'>
                    <label htmlFor="folder_name">Folder Name</label>
                    <input type="text" className="folder_input" name="folder_name" id="folder_name" ref={this.folderNameInput} />
                </div>
                <button type='submit'>Submit</button>
                </form>
                }
            </NoteContext.Consumer>
            
        )
    }
}

export default AddFolderForm