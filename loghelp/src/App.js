import React, {useEffect, useState} from 'react';
import TakeInput from './TakeInput';

const insertData = (data) => {
    const new_data = [...OtherData, data]
    setData(new_data)
}


function App() {
    return (
        <div className="TakeInput">
            <TakeInput insertData={insertData}/>
        </div>
    );
}

export default App;