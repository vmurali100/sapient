import React, { Component } from "react";
import Createuser from "./Createuser";
import Userlist from "./Userlist";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  getUsers = users => {
    this.setState({ users });
  };
  render() {
    return (
      <div>
        <div className="container">
          <h2>CRUD APP</h2>

          <div className="row">
            <div className="col-md-4">
              <Createuser getUsers={this.getUsers} />
            </div>
            <div className="col-md-8">
              <Userlist users={this.state.users} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
