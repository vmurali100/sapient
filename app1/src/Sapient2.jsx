import React, { Component } from "react";

export default class Sapient2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  showUsers = () => {
    this.setState({ users });
  };
  render() {
    return (
      <div>
        <button onClick={this.showUsers}>Show Users</button>
        {this.state.users.map(obj => {
          return (
            <ul>
              {Object.values(obj).map(val => {
                return <li>{val}</li>;
              })}
            </ul>
          );
        })}
      </div>
    );
  }
}

const users = [
  {
    fname: "Dorota",
    lname: "Massey"
  },
  {
    fname: "Alex",
    lname: "Brill"
  },
  {
    fname: "Terrence",
    lname: "Flanagan"
  },
  {
    fname: "Lilia",
    lname: "Nordby"
  },
  {
    fname: "Kamaniee",
    lname: "Belkin"
  }
];
