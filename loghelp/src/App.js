import React, {useEffect, useState} from 'react';
import TakeInput from './TakeInput';

const insertData = (data) => {
    const new_data = [...preexistingData, data]
    setData(new_data)
}


function App() {
    return (
        <div className="TakeInput">
            <TakeInput/>
        </div>
    );
}

export default App;