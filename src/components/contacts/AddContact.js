import React, { Component } from "react";
import { Consumer } from "../../context";
import uuid from 'uuid'

class AddContact extends Component {
  state = {
    name: "",
    email: "",
    phone: ""
  };

  onNameChange = event => this.setState({ name: event.target.value });

  onEmailChange = event => this.setState({ email: event.target.value });

  onPhoneChange = event => this.setState({ phone: event.target.value });

  onSubmit = (event, dispatch) => {
    event.preventDefault();
    const newContact = {
        id: uuid(),
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email
    }

    dispatch({type: "ADD_CONTACT", payload: newContact});

    this.setState({
        name: '',
        phone: '',
        email: ''
    });
    
    //NB
    this.props.history.push('/');
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          const {name, email, phone} = this.state;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="name"
                      placeholder="Enter Name..."
                      value={name}
                      onChange={this.onNameChange}
                      required
                    />
                    <label htmlFor="name">Email</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="email"
                      placeholder="Enter Email..."
                      value={email}
                      onChange={this.onEmailChange}
                      required
                    />
                    <label htmlFor="name">Phone</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      name="phone"
                      placeholder="Enter Phone..."
                      value={phone}
                      onChange={this.onPhoneChange}
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
