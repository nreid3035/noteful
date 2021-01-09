import React from 'react';


class AddFolderForm extends React.Component {
    constructor(props) {
        super(props)
        this.folderNameInput = React.createRef();
    }


    handleFolderSubmit = (e) => {
        e.preventDefault()
        const folderName = this.folderNameInput.current.value
        console.log(folderName)
    }

    render() {
        return (
            <form className="add_folder" onSubmit={(e) => this.handleFolderSubmit(e)}>
                <h2>Add Folder</h2>
                <div className='input_container'>
                    <label htmlFor="folder_name">Folder Name</label>
                    <input type="text" className="folder_input" name="folder_name" id="folder_name" ref={this.folderNameInput} />
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default AddFolderForm