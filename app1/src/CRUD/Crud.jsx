import React, { Component } from "react";
import Createuser from "./Createuser";
import Userlist from "./Userlist";
import axios from "axios";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: "",
        email: "",
        password: ""
      },
      users: [],
      isEdit: false
    };
  }
  handleChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };
  updateUser = () => {
    axios
      .put("http://localhost:3000/users/" + this.state.user.id, this.state.user)
      .then(res => {
        this.getAllUsers();
        this.setState({ isEdit: !this.state.isEdit });
      });
  };
  handleSubmit = () => {
    let user = Object.assign({}, this.state.user);
    axios.post("http://localhost:3000/users", user).then(res => {
      this.getAllUsers();
    });
    this.clearForm();
  };
  clearForm = () => {
    let user = {
      userName: "",
      email: "",
      password: ""
    };
    this.setState({ user });
  };
  getUsers = users => {
    this.setState({ users });
  };

  deleteUser = user => {
    console.log(user);
    axios.delete("http://localhost:3000/users/" + user.id).then(res => {
      this.getAllUsers();
    });
  };

  editUser = user => {
    this.setState({ user, isEdit: !this.state.isEdit });
  };
  getAllUsers() {
    axios.get("http://localhost:3000/users").then(res => {
      this.setState({ users: res.data });
    });
  }
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    return (
      <div>
        <div className="container">
          <h2>CRUD APP</h2>

          <div className="row">
            <div className="col-md-4">
              <Createuser
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                getUsers={this.getUsers}
                user={this.state.user}
                updateUser={this.updateUser}
                isEdit={this.state.isEdit}
              />
            </div>
            <div className="col-md-8">
              <Userlist
                users={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
