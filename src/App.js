
import './App.css';
import Card from './components/Card'
import {useEffect, useState} from 'react'

function App() {

  const [idValue, setIdValue] = useState(null)
  useEffect( () => {
    randomValue()
  }, [])
  const randomValue = () => {
    setIdValue(Math.floor(Math.random() * 200) + 1)
  }
  return (
    <div className = "container-app">
      <button className = "change-button" onClick = {randomValue}>
        <i className = "fa fa-sync-alt"></i>
      </button>
      <Card idValue = {idValue}></Card>
    </div>
  );
}

export default App;
