import React from "react";
import "../index.css";
import "../images/fourdogs.png";

export default function Home() {
  return (
    <div className="home-container">
      <div className="wrapper">
        <div className="hope">
          <h1 className="hope-heading">Last Hope K9</h1>
          <h2 className="lines">Where a last hope</h2>
          <h2 className="lines">
            becomes a <span className="underline">new beginning.</span>{" "}
          </h2>
        </div>

        <div className="dogs">
          <img
            src={require("../images/fourdogs.png")}
            alt="logo"
            width="750px"
            height="150px"
            className="img-dogs"
          />
        </div>
      </div>
    </div>
  );
}
