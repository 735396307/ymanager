import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import WebSite from './WebSite';
import Comment from './Comment';
import  "react-router-dom";
import Demo from './Redirect';
import registerServiceWorker from './registerServiceWorker';
const element = <h1>Hello, world!</h1>;

ReactDOM.render(
    <div>
       
    <App/>
    
    <Clock />
    <WebSite/>
    <hr/>
    <Comment/>

     
    </div>, 
    
    document.getElementById('root')
);
registerServiceWorker();
