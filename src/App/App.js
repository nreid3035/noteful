
import React, { Component } from "react";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar'
import NoteContainer from '../NoteContainer/NoteContainer'
import STORE from '../dummy-data'


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
        <Sidebar folders={this.state.folders} />
        <NoteContainer notes={this.state.notes} />
      </main>
      
    </div>
  );
  }
}

export default App;
