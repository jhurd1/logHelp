import React, {useEffect, useState} from 'react';
import {UserDataTest} from './UserDataTest';

function App() {
    return (
        <div className="App">
            <UserDataTest/>
        </div>
    );
}

/*function App()
{
  const [data, setData] = useState([{}])

  useEffect(() => {
    fetch("/members").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        data.members.map((member, i) => (
          <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}*/



export default App;