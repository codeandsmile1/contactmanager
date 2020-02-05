import React, { Component } from "react";
import PropTypes from "prop-types";
import "./../contact.css";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { Consumer } from '../../context'

class Contact extends Component {
  constructor() {
    super();
    this.onShowClick = this.onShowClick.bind(this);
    this.state = {
      showContactInfo: false
    };
  }

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id}) 
    console.log(dispatch)
  }

  onShowClick() {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  render() {

    return (
   <Consumer>
     {value => {
       const { dispatch } = value;
  
       return ( 
       <div className="card card-body mb-3">
       <h3>
         {this.props.name}
         <IoIosArrowDown onClick={this.onShowClick} />
         <IoIosClose onClick={this.onDeleteClick.bind(this, this.props.id, dispatch)}/>
       </h3>
       {this.state.showContactInfo == true ? (
         <ul className="list-group">
           <li className="list-group-item">Email: {this.props.email}</li>
           <li className="list-group-item">Phone: {this.props.phone}</li>
         </ul>
       ) : (
         ""
       )}
     </div>
     )
     }}
   </Consumer>
    )
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
