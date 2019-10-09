import React from 'react';
//import logo from './logo.svg';
import './Contact.css';

function Contact(props) {
  return (
    <div className="Contact">
        <img className="avatar" src={props.avatar} alt="avatar"/>
        <h3 className="name" >{props.name}</h3>

        <div className="status">
              <div className={props.online ? "status-online":"status-offline"}></div>  
              <p className="status-text">{props.online ? "Online":"Offline"} </p>                             
        </div>
    </div>
  );
 }

export default Contact;
