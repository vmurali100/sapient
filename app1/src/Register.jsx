import React, { Component } from "react";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: "",
        email: "",
        password: ""
      },
      users: []
    };
  }

  handleChange = e => {
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = () => {
    console.log(this.state.user);
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
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>User Register</h2>

              <form>
                <div className="form-group">
                  <label for="username">Username</label>
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
                  <label for="exampleInputEmail1">Email address</label>
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
                  <label for="exampleInputPassword1">Password</label>
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
          </div>
        </div>
      </div>
    );
  }
}
