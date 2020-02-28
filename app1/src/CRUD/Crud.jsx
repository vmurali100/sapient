import React, { Component } from "react";
import Createuser from "./Createuser";
import Userlist from "./Userlist";

export default class Crud extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>CRUD APP</h2>

          <div className="row">
            <div className="col-md-4">
              <Createuser />
            </div>
            <div className="col-md-8">
              <Userlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
