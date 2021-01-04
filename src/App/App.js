
import React, { Component } from "react";
import Header from '../Header/Header';
import { Route } from 'react-router-dom'
import NoteContext from '../context/NoteContext'
import MainComponent from '../MainComponent/MainComponent'
import NoteComponent from '../NoteComponent/NoteComponent'
import FolderComponent from '../FolderComponent/FolderComponent'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        folders: [],
        notes: []
    }
  }
  
  setFolders = (folders) => {
    this.setState({
      folders
    })
  }

  setNotes = (notes) => {
    this.setState({
      notes
    })
  }

  handleDelete = (noteId) => {
   const filteredNotes = this.state.notes.filter(note => note.id !== noteId )
   this.setState({
     notes: filteredNotes
   })  
  }

  componentDidMount() {

    fetch(`http://localhost:9090/folders`)
      .then(response =>{
        if (!response.ok) {
          throw new Error(response.status)
        }
          return response.json()
        })
      .then(responseJson => {
          this.setFolders(responseJson)
      })
      .catch(err => console.log(err))

      fetch(`http://localhost:9090/notes`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status)
          }
            return response.json()
          })
        .then(responseJson => {
          this.setNotes(responseJson)
          console.log(responseJson)
        })
        .catch(err => console.log(err))
      }
  
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      handleDelete: this.handleDelete
    }

  return (
    <div className="App">
        <Header />
      <NoteContext.Provider value={contextValue}>
        <main>
        <Route 
          exact
          path='/'
          component={MainComponent}
        />

        <Route 
          path='/folder/:folderId'
          component={FolderComponent}
        />


        <Route 
          path='/note/:noteId'
          component={NoteComponent}
        />
      </main>
      </NoteContext.Provider>
    </div>
  );
  }
}

export default App;
