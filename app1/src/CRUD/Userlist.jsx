import React, { Component } from "react";

export default class Userlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, index) => {
              return (
                <tr key={index}>
                  {Object.values(user).map(val => {
                    return <td key={val}>{val}</td>;
                  })}
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        this.props.editUser(user);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.deleteUser(user);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
