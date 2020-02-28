import React, { Component } from "react";

export default class Createuser extends Component {
  constructor(props) {
    super(props);
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
              value={this.props.user.userName}
              name="userName"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              value={this.props.user.email}
              name="email"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              value={this.props.user.password}
              name="password"
              onChange={e => {
                this.props.handleChange(e);
              }}
            />
          </div>

          {!this.props.isEdit && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.props.handleSubmit}
            >
              Submit
            </button>
          )}
          {this.props.isEdit && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.props.updateUser();
              }}
            >
              Update
            </button>
          )}
        </form>
      </div>
    );
  }
}
