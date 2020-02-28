import React, { Component } from "react";
import axios from "axios";

export default class Createuser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: "",
        email: "",
        password: ""
      }
    };
  }
  handleChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });
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

  getAllUsers = () => {
    axios.get("http://localhost:3000/users").then(res => {
      console.log(res.data);
      this.props.getUsers(res.data);
    });
  };
  componentDidMount() {
    this.getAllUsers();
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              value={this.state.user.userName}
              name="userName"
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={this.state.user.email}
              name="email"
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={this.state.user.password}
              name="password"
              onChange={e => {
                this.handleChange(e);
              }}
            />
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
