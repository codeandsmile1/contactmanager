import React, { Component } from "react";
import PropTypes from "prop-types";
import "./contact.css";
import { IoIosArrowDown } from "react-icons/io";

class Contact extends Component {
  constructor() {
    super();
    this.onShowClick = this.onShowClick.bind(this);
    this.state = {
      showContactInfo: false
    };
  }

  onShowClick() {
    console.log(this);
    this.setState({ showContactInfo: !this.state.showContactInfo });
  }

  //const {name, email, phone} = this.props;
  render() {
    return (
      <div className="card card-body mb-3">
        <h3>
          {this.props.name}
          <IoIosArrowDown onClick={this.onShowClick} />
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
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
};

export default Contact;
