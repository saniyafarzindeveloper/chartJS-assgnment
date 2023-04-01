import React from "react";
import "../index.css";
import LivesSaved from "./LivesSaved";
import AvgTime from "./AvgTime";
import Characteristics from "./Characteristics";

export default function Graphs() {
  return (
    <div className="graph-wrapper">
      <LivesSaved />

      <AvgTime />

      <Characteristics />
    </div>
  );
}
