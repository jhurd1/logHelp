import React, {useEffect, useState} from 'react';
import TakeInput from './TakeInput';

// Reflects App.js in example code; see line 130 in Notes.txt.

function App() {
    // Where is setData defined? It's not in TakeInput.js right now
    const [data, setData] = useState([]);

    //Self: I know you want to push stuff to backend
    // but let's keep testing this first, then try that later.
    useEffect(()=>{
        fetch('http://localhost:5000/data', {
            'methods':'GET',
            headers:{
                'Content-Type':'application/json'
            }
    })
    .then(response => response.json())
    .then(response => setData(response))
    .catch(error => console.log(error))
},[])

    return (
        <div className="TakeInput">
            <TakeInput insertData={insertData}/>
        </div>
    );
}

export default App;