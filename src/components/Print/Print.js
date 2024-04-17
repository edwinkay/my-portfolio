import React from "react";
import "./Print.scss"
import { AiFillPrinter } from "react-icons/ai";

function Print() {
  return (
    <div className="Print-button">
      <button
        onClick={() => {
          window.print();
        }}
      >
        Print CV <AiFillPrinter />
      </button>
    </div>
  );
}

export default Print;
