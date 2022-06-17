import axios from 'axios';
import React, {useState} from 'react';
import './SCSS/index.css';
//import TakeInput from './TakeInput';

function App() {
    const {fpath, searchStrings} = this.props;
    constructor(props)
     super(props);
    
     this.state = {fpath:"", searchStrings:""};
     this.handleSubmit = this.handleSubmit.bind(this);
    
    

    componentDidUpdate(prevProps, prevState)

    componentDidUpdate(prevProps)
    {
        if(this.props.fpath !== prevPropsw.fpath, this.props.searchStrings !== prevProps.searchStrings)
        {
            this.fetchData(this.props.fpath, this.props.searchStrings);
        }
    }

    //const [search, setSearch] = useState(addSearch)

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
        setSearch(prev => ({
            ...prev,
            [e.target.fpath]: e.target.value,
            [e.target.searchStrings]: e.target.value
        }))
        e.preventDefault()
        // test console.log for debugging
        console.log(e);
        }

    return (
        <div>
                <form className={"grid_layout"}>
                    <p className={"heading"}>Welcome to your web-app log helper tool!</p>
                    <p className={"appDescription"}>LogHelper is designed to assist in the sharing and anonymization of log data using
                        an automated process for replacing names, IP addresses, Mac addresses, and other
                        sensitive data for the exchange of said data during troubleshooting and case
                        management.</p>
                    <div className={"center"}>
                        <label>Enter your path and search strings here:<br/><br/>
                            <input type="text" placeholder="file path" value={setSearch.fpath} onChange={handleChange}/>
                            <input type="text" placeholder="search strings" value={setSearch.searchStrings} onChange={handleChange}/>
                            <button type="submit" onChange={handleChange} onClick={setSearch} onSubmit={sendData}>Submit</button>
                        </label>
                        <br/>
                    </div>
                </form>
                </div>

    );
}


export default App;