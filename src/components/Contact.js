import React, { Component } from "react";
import PropTypes from "prop-types";
import './contact.css'

class Contact extends Component {
 
 //const {name, email, phone} = this.props;
    render() {
    return (
      <div className="card card-body mb3">
        <h3>{this.props.name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {this.props.email}</li>
          <li className="list-group-item">Phone: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
   name: PropTypes.string.isRequired,
   email: PropTypes.string.isRequired,
   phone: PropTypes.string.isRequired
}

export default Contact;
