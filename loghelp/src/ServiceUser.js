import React from 'react';

export default class APIService{
    // Insert an article
    static async InsertData(searchStrings){
        try {
            const response = await fetch(`http://localhost:5000/data`, {
                'method': 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(searchStrings)
            });
            return await response.json();
        } catch (error) {
            return console.log(error);
        }
    }

}