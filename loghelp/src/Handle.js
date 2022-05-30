import React from 'react';
import ServiceUser from './ServiceUser';

function handleChange(e){

    //current value of the user
    const user = this.state.user;

    //extract value of input embodied in 'target'
    const modifiedPath = e.target.fpath;
    const modifiedStrings = e.target.searchStrings;
    const modifiedAnonymize = e.target.anonymize;

    //update user
    user.fpath = modifiedPath;
    user.searchStrings = modifiedStrings;
    user.anonymize = modifiedAnonymize;

    // test console.log for debugging
    console.log(e);
    this.setState({
        fpath: e.target.fpath,
        searchStrings: e.target.searchStrings,
        anonymize: e.target.anonymize
    })
};

function handleSubmit(event) {
    event.preventDefault();

    const response = ServiceUser.createUsers().then(response =>
    {
        console.log(response)
    }).catch(error=> {
        console.log(error)
    })

    function setUser(data) {

    }

    setUser(response.data)
    localStorage.setItem('user', response.data)
    console.log(response.data)


};

export default Handle;