
import React, { Component } from "react";
import Header from '../Header/Header';
import { Link, Route } from 'react-router-dom'
import NoteContext from '../context/NoteContext'
import MainComponent from '../MainComponent/MainComponent'
import NoteComponent from '../NoteComponent/NoteComponent'
import FolderComponent from '../FolderComponent/FolderComponent'
import AddFolderForm from "../AddFolderForm/AddFolderForm";
import AddNoteForm from '../AddNoteForm/AddNoteForm'


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
      notes: notes
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
        })
        .catch(err => console.log(err))
      }
  
  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      handleDelete: this.handleDelete,
      setFolders: this.setFolders,
      setNotes: this.setNotes
    }

  return (
    <div className="App">
        
        <Link to="/">
          <Header />        
        </Link>
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

        <Route
          path='/addFolderForm'
          component={AddFolderForm}  
        />
  
        <Route 
          path='/addNoteForm'
          component={AddNoteForm}
        />
        </main>
      </NoteContext.Provider>
    </div>
  );
  }
}

export default App;
