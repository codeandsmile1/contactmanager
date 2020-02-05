import React, {Component} from 'react';

class AddContact extends Component {
   state = {
       name: '',
       email: '',
       phone: ''
   }
  
    render() {
        return (
            <div className="card mb-3">
                <div className="card-header">
                  Add Contact
                </div>
                <div className="card-body">
                 <form>
                     <div className="form-group">
                     <label htmlFor="name">Name</label> 
                     <input type="text" 
                            className="form-control form-control-lg"
                            name="name"
                            placeholder="Enter Name..."
                            value={this.state.name}
                            required
                            />
                     <label htmlFor="name">Email</label> 
                     <input type="text" 
                            className="form-control form-control-lg"
                            name="email"
                            placeholder="Enter Email..."
                            value={this.state.email}
                            required
                            />                
                     <label htmlFor="name">Phone</label> 
                     <input type="text" 
                            className="form-control form-control-lg"
                            name="phone"
                            placeholder="Enter Phone..."
                            value={this.state.phone}
                            required
                            />
                     </div>
                     <input type="submit" value="Add Contact" className="btn btn-block btn-light"/>
                 </form>
                </div>
            </div>
        );
    }
}

export default AddContact;