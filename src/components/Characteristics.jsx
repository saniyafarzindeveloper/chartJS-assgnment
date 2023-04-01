import React from "react";
import "../index.css";

export default function Characteristics() {
  return (
    <div className="div-chars">
      <h2 className="char-heading">Characteristics</h2>
      <h3 className="dog-portion">Portion of dogs that...</h3>

      <div className="char-wrapper">
        Gets along with dogs
        <div className="container">
          <div className="child-1">87%</div>
          <div className="child-2"></div>
        </div>
      </div>

      <div className="char-wrapper">
        Gets along with cats
        <div className="container">
          <div className="child-3">29%</div>
          <div className="child-4"></div>
        </div>
      </div>

      <div className="char-wrapper">
        Gets along with Kids
        <div className="container">
          <div className="child-5">58%</div>
          <div className="child-6"></div>
        </div>
      </div>

      <div className="labels" >
      <div className="are"></div> Does/Are
      <div className="labels" >
      <div className="not"></div> Does not/Are not
      </div>
      <div className="labels" >
      <div className="not-sure"></div> Not sure
      </div>
      </div>
      
    </div>
  );
}
