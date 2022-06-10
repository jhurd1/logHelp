import React, {useState, useEffect} from 'react';

function testData(){
    //const [data, setData] = useState([{}]);
    const [content, setContent] = useState([{}]);

    return (
               <form>
                    <input type="text" value={content} onChange={e =>
                    setContent(e.target.value)}/>
                        <button type="submit" value = "Add Data" onClick = {
                            async() => {
                            const data = {content};
                            const response = await fetch("/data", {
                                method = "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body:JSON.stringify(data)
                            })
                        if(response.ok)
                        {
                            console.log("success")
                        }>
                </button>
               </form>
    )
}