import React from 'react';
//import logo from './logo.svg';
import './Contact.css';
//import ContactList from './ContactList'

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      online: this.props.online
      }
  }
  render(){
    return(
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="avatar"/>
        <h3 className="name" >{this.props.name}</h3>
        <div className="status" 
                   onClick={event =>{
                  this.setState({online: !this.state.online});
                  }}>

              <div className={this.state.online ? "status-online":"status-offline"} ></div>                
              <p className="status-text">{this.state.online ? "Online":"Offline"} </p>                             
        </div>
      </div>

    );
  }
}

// function Contact(props) {
//   return (
//     <div className="Contact">
//         <img className="avatar" src={props.avatar} alt="avatar"/>
//         <h3 className="name" >{props.name}</h3>

//         <div className="status">
//               <div className={props.online ? "status-online":"status-offline"}></div>  
//               <p className="status-text">{props.online ? "Online":"Offline"} </p>                             
//         </div>
//     </div>
//   );
//  }

export default Contact;
