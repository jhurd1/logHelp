import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './SCSS/index.css';
//import TakeInput from './TakeInput';

function App() {
    const [fpath, setPath] = useState([]);
    const [searchStrings, setStrings] = useState([]);
    const sendData = (props) => {
        return (
        props.fpath,
        props.searchStrings
    );};

    sendData = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000", {
            fpath: document.getElementById("fpath").value,
            searchStrings: document.getElementById("searchStrings").value
        }).then((res)=>{
            console.log(res.data);
        });
    }

    return (
        <div>
                <form className={"grid_layout"} onSubmit={this.sendData}>
                    <p className={"heading"}>Welcome to your web-app log helper tool!</p>
                    <p className={"appDescription"}>LogHelper is designed to assist in the sharing and anonymization of log data using
                        an automated process for replacing names, IP addresses, Mac addresses, and other
                        sensitive data for the exchange of said data during troubleshooting and case
                        management.</p>
                    <div className={"center"}>
                        <label>Enter your path and search strings here:<br/><br/>
                            <input type="text" value={fpath}  placeholder="file path"/>
                            <input type="text" value={searchStrings} placeholder="search strings" />
                            <button type="submit">Submit</button>
                        </label>
                        <br/>
                    </div>
                </form>

            </div>
    );
}

export default App;