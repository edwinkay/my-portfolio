import React from "react";
import "./React.scss"

function ReactApp(){
    return (
      <div className="box">
        <div className="container">
          <div className="izquierda">
            <iframe
              title="Notas"
              src="https://edwinkay.github.io/things-to-do/"
            ></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/things-to-do">
                View source code
              </a>
              <a href="https://edwinkay.github.io/things-to-do/">Full page</a>
            </div>
          </div>
          <div className="derecha">
            <iframe
              title="calculadora"
              src="https://edwinkay.github.io/calculadora/"
            ></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/calculadora">
                View source code
              </a>
              <a href="https://edwinkay.github.io/calculadora/">Full page</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ReactApp;