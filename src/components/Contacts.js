import React, {Component} from 'react';
import Contact from './Contact'

class Contacts extends Component {
   state = {
           contacts: [
               {  
                   id: 1,
                 name: "Lyubima",
                email: "lyubima@abv.bg",
                phone: "4442253544"
               },
               {   id: 2,
                 name: "Petar",
                email: "petar@abv.bg",
                phone: "4444543544"
               },
               {   id: 3,
                 name: "Raina",
                email: "raina@abv.bg",
                phone: "44442342344"
               }
           ]     
   }
   
    render() {
        const { contacts } = this.state;
        return (
            <div>
              {
               contacts.map(contact => (
                <Contact  key={contact.id}name={contact.name} email={contact.email} phone={contact.phone}/>
               ))
              }
            </div>
        )
    }
}

export default Contacts;