import React from 'react';
import NoteContext from '../context/NoteContext';
import ValidationError from '../ValidationError/ValidationError'
import PropTypes from 'prop-types'

class AddFolderForm extends React.Component {
    static contextType = NoteContext;

    constructor(props) {
        super(props)
        this.state = {
            formTouched: false
        }
        this.folderNameInput = React.createRef();
    }


    validateFolder = () => {
        const folderName = this.folderNameInput.current.value
        if (folderName.length === 0) {
            return 'Folder name is required'
        }
    }

    updateTouched = () => {
        this.setState({
            formTouched: true
        })
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
            const contextFolders = this.context.folders
            const folders = [...contextFolders, responseJson]
            this.context.setFolders(folders)
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
            throw new Error
        })
    }

    render() {
        console.log(this.props)
        return (
            <NoteContext.Consumer>
                {context => 
                <form className="add_folder" onSubmit={(e) => this.handleFolderSubmit(e)}>
                <h2>Add Folder</h2>
                <div className='input_container'>
                    <label htmlFor="folder_name">Folder Name</label>
                    <input type="text" 
                           className="folder_input" 
                           name="folder_name" 
                           id="folder_name" 
                           ref={this.folderNameInput}
                           onChange={() => this.updateTouched()}
                           required />
                    {this.state.formTouched && (
                    <ValidationError message={this.validateFolder()} />
                    )}
                </div>
                <button type='submit'>Submit</button>
                </form>
                }
            </NoteContext.Consumer>
            
        )
    }
}

AddFolderForm.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
}

export default AddFolderForm