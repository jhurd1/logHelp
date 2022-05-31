import React from 'react';
import ServiceUser from './ServiceUser';

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

export {handleSubmit};