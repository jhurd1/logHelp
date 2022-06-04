
//test react-flask again
function handlePostQuery(query){

    var myParams = {
        data: query
    }

    if (query != "") {
        axios.post('http://localhost:5000/api/query', myParams)
            .then(function(response){
                console.log(response);
                //Perform action based on response
            })
            .catch(function(error){
                console.log(error);
                //Perform action based on error
            });
    } else {
        alert("The search query cannot be empty")
    }
}