
import React, { Component } from "react";
import Header from '../Header/Header';
import { Route } from 'react-router-dom'
import STORE from '../dummy-data'
import MainComponent from '../MainComponent/MainComponent'
import NoteComponent from '../NoteComponent/NoteComponent'
import FolderComponent from '../FolderComponent/FolderComponent'

const fetchedFolders = fetch(`http://localhost:9090/folders`)
                       .then(response => response.json())
                       .then(responseJson => console.log(responseJson))

const fetchedNotes = fetch(`http://localhost:9090/notes`)
                     .then(response => response.json())
                     .then(responseJson => console.log(responseJson))

const deleteNoteRequest = fetch(`http://localhost:9090/note/${noteId}`, {
                              method: 'DELETE',
                              headers: {
                                'content-type': 'application/json'
                              }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        folders: STORE.folders,
        notes: STORE.notes
    }
  }
  
  
  
  render() {
    console.log(this.state.folders)
    console.log(this.state.notes)

  return (
    <div className="App">
        <Header />
      <main>
        <Route 
          exact
          path='/'
          render={() => 
          <MainComponent 
              folders={this.state.folders}
              notes={this.state.notes}
          />
        }
        />

        <Route 
          path='/folder/:folderId'
          render={(props) => 
          <FolderComponent 
              folderInfo={props.match}
              folders={this.state.folders}
              notes={this.state.notes} />}
        />


        <Route 
          path='/note/:noteId'
          render={(props) => 
          <NoteComponent 
              noteInfo={props.match}
              folders={this.state.folders}
              notes={this.state.notes}
           />}
        />
      </main>
      
    </div>
  );
  }
}

export default App;
