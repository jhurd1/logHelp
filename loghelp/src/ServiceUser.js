import axios from "axios";
import React from 'react';
import TakeInput from "./TakeInput";

// Because Flask should use port 3000, React 5000
// and we are 'posting' to Flask.
const serviceUserURL = "http://localhost:3000";

export default function ServiceUser()
{
    // See notes.txt, point '4'
    const[post,setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get('${serviceURL}/1').then((response) => {
            setPost(response.data);
        });
    }, []);   
    
    // Theoretically, TakeInput pulls in the content from Handle
    // so there should be no need to instance a new Handle object, right?
    function createPost()
    {
        axios.post(serviceUserURL, {
            fpath:this.state.user.fpath,
            searchStrings:this.state.user.searchStrings,
            anonymize:this.state.user.anonymize
        })
    }
}