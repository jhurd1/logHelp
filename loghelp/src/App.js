import axios from 'axios';
import React, {useState} from 'react';
import './SCSS/index.css';
//import TakeInput from './TakeInput';

function App() {
    const [fpath, setPath] = useState("");
    const [searchStrings, setStrings] = useState("");

    let sendData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000", {
            fpath: document.getElementById("fpath").value,
            searchStrings: document.getElementById("searchStrings").value
        }).then((res)=>{
            console.log(res.data);
        });
    }

    // original is commented out in takeinput for second version control option
    const handleChange = (e) => {
        setPath(e.target.value)
        setStrings(e.target.value)
        const modPath = e.target.fpath;
        const modStrings = e.target.searchStrings;
        // test console.log for debugging
        console.log(e);
        }
    

    return (
                <form className={"grid_layout"}>
                    <p className={"heading"}>Welcome to your web-app log helper tool!</p>
                    <p className={"appDescription"}>LogHelper is designed to assist in the sharing and anonymization of log data using
                        an automated process for replacing names, IP addresses, Mac addresses, and other
                        sensitive data for the exchange of said data during troubleshooting and case
                        management.</p>
                    <div className={"center"}>
                        <label>Enter your path and search strings here:<br/><br/>
                            <input type="text" placeholder="file path" onChange={handleChange}/>
                            <input type="text" placeholder="search strings" onChange={handleChange}/>
                            <button type="submit" onChange={e => {setPath(e.target.value); setStrings(e.target.value);}} onClick={()=>{setPath(""); setStrings("");}} onSubmit={sendData}>Submit</button>
                        </label>
                        <br/>
                    </div>
                </form>

    );
}

export default App;