import React, { Component } from "react";

class Contact extends Component {
 
 //const {name, email, phone} = this.props;
    render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <ul>
          <li>Email: {this.props.email}</li>
          <li>Phone: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
