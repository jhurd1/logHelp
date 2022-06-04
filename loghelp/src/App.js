import React, {useEffect, useState} from 'react';
//import './SCSS/index.css';
//import logo from './logo.svg'
//import './App.css'
import axios from 'axios'
import setupProxy from './setupProxy';
//import TakeInput from "./TakeInput";

/*function App() {
    return (
        <div className="TakeInput">
            <!--<TakeInput/>-->
        </div>
    );
}*/

function App() {
    const [getMessage, setGetMessage] = useState({})
  
    useEffect(()=>{
      axios.get('http://localhost:5000').then(response => {
        console.log("SUCCESS", response)
        setGetMessage(response)
      }).catch(error => {
        console.log(error)
      })
  
    }, [])
    return (
      <div className="App">
        <header className="App-header">
          
          <p>React + Flask Tutorial</p>
          <div>{getMessage.status === 200 ? 
            <h3>{getMessage.data.message}</h3>
            :
            <h3>LOADING</h3>}</div>
        </header>
      </div>
    );
  }

export default App;