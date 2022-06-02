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

export {handleChange};