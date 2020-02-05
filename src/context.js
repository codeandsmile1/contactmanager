import React, {Component} from 'react';

const Context = React.createContext();
 
const reducer = (state, action) => {
    switch(action.type) {
       case 'DELETE_CONTACT':
        return {
            ...state,
           contacts: state.contacts.filter(
               contact => contact.id !== action.payload
               )     
        };
        default: 
            return state;
    }
};

export class Provider extends Component {
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
        ],
        dispatch: action => this.setState(state =>
        reducer(state,action)) 
}

render() {
    return (
        <Context.Provider value={this.state}>
        {this.props.children}
        </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;