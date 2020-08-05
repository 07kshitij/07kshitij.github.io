import React, { Component } from "react";
import ReactDOM from "react-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <center>
          <h1>
            Kshitij Agrawal
          </h1>
          <h3>
            Work under progress. Please check out later
          </h3>
        </center>  
      </div>
    );
  }
}

export default Home;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
