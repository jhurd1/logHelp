import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import ServiceUser from "./ServiceUser";

//const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
