import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Editor from './components/editor'
import Viewer from './components/viewer'
import Header from './components/header'
function App() {

  return (
    <div className="AppContainer">
      <Header />
      <div  className="App" >
      
        <Editor />
        <Viewer />
      </div>
    </div>
  )
}

export default App
