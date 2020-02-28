import React, { Component } from "react";

class Sapient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello React JS",
      person: {
        fname: "Ram",
        lname: "Krishna",
        city: "Bangalorea",
        state: "Karanataka",
        area: "Marathahalli"
      }
    };
  }

  render() {
    return (
      <div>
        <h2>I am from Sapient component</h2>
        <h2>{this.state.message}</h2>
        {/* <ul>
          <li>{this.state.person.fname}</li>
          <li>{this.state.person.lname}</li>
        </ul> */}
        <ul>
          {Object.values(this.state.person).map(val => {
            return <li key={val}>{val}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Sapient;
