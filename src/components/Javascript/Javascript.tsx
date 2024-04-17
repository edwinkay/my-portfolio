import React from "react";
import "./Javascript.scss"

function Javascript() {
    return (
      <div className="box animate__animated animate__fadeIn">
        <div className="container">
          <div className="izquierda">
            <iframe title="buscador" src="https://edwinkay.github.io/buscador/"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/buscador">
                View source code
              </a>
              <a href="https://edwinkay.github.io/buscador/">Full page</a>
            </div>
          </div>
          <div className="derecha">
            <iframe title="cotizador" src="https://edwinkay.github.io/cotizaSeguro/"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/cotizaSeguro">
                View source code
              </a>
              <a href="https://edwinkay.github.io/cotizaSeguro/">Full page</a>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="izquierda">
            <iframe title="inventory" src="https://edwinkay.github.io/myInventory/"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/myInventory">
                View source code
              </a>
              <a href="https://edwinkay.github.io/myInventory/">Full page</a>
            </div>
          </div>
          <div className="derecha">
            <iframe title="heladeria" src="https://edwinkay.github.io/miRep/"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/miRep">View source code</a>
              <a href="https://edwinkay.github.io/miRep/">Full page</a>
            </div>
          </div>
        </div>
        <div className="container3">
          <div className="izquierda">
            <iframe title="tweet" src="https://edwinkay.github.io/tweet/"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/tweet">View source code</a>
              <a href="https://edwinkay.github.io/tweet/">Full page</a>
            </div>
          </div>
          <div className="derecha">
            <iframe title="enviar email" src="https://edwinkay.github.io/sendEmail/"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/sendEmail">
                View source code
              </a>
              <a href="https://edwinkay.github.io/sendEmail/">Full page</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Javascript;