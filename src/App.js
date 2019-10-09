import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact.js'

function App() {
  return (
    <div>
      <Contact avatar="https://randomuser.me/api/portraits/women/0.jpg" name="Anita Suttonnne" online/>
      <Contact avatar="https://randomuser.me/api/portraits/men/99.jpg" name="Jim Georgette" online/>
      <Contact avatar="https://randomuser.me/api/portraits/women/81.jpg" name="Charlotte Ryan" />
    </div>
  );
}

export default App;
