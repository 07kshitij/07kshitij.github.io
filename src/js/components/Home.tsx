import * as React from "react";
import ReactDOM from "react-dom";

export const Home : React.FC = () => {
    return (
      <div>
          <h1>
            Kshitij Agrawal
          </h1>
          <h3>
            Work under progress. Please check out later
          </h3>
      </div>
    )
}

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;
