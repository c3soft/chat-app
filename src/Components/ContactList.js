import React from 'react';
import Contact from './Contact'

const tabListUser=[
    {name:"Heather Lucas",avatar:"https://randomuser.me/api/portraits/women/4.jpg"},
    {name:"Anita Nelson",avatar:"https://randomuser.me/api/portraits/women/62.jpg"},
    {name:"Johanna Willis",avatar:"https://randomuser.me/api/portraits/women/43.jpg"},
    {name:"Flennas Lucas",avatar:"https://randomuser.me/api/portraits/men/26.jpg"},
    {name:"Bryan Hansen",avatar:"https://randomuser.me/api/portraits/men/17.jpg"}
]


// const ContactList=()=>{
//     return (    
//         tabListUser.map(tabListUser =>
//         <Contact {...tabListUser}/>)  
            
//     )
// };


function ContactList() {
    return (
        tabListUser.map(tabListUser =>
            < Contact {...tabListUser}/>
        )
    )
 }

export default ContactList
