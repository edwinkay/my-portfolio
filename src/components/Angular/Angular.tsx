import React from "react";
import "./Angular.scss"

function Angular(){
    return (
      <div className="box animate__animated animate__fadeIn">
        <div className="container">
          <div className="izquierda">
            <iframe title="licor App" src="https://edwinkay.github.io/licorApp/login"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/licorApp">
                View source code
              </a>
              <a href="https://edwinkay.github.io/licorApp/login">Full page</a>
            </div>
          </div>
          <div className="derecha">
            <iframe title="ice cream shop" src="https://edwinkay.github.io/iceCreamShop/list-products"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/iceCreamShop">
                View source code
              </a>
              <a href="https://edwinkay.github.io/iceCreamShop/list-products">
                Full page
              </a>
            </div>
          </div>
        </div>
        <div className="container2">
          <div className="izquierda">
            <iframe title="asi somo asi bailamos" src="https://edwinkay.github.io/salsaMi/main"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/salsaMi">View source code</a>
              <a href="https://edwinkay.github.io/salsaMi/main">Full page</a>
            </div>
          </div>
          <div className="derecha">
            <iframe title="cartomancia" src="https://edwinkay.github.io/cartomancia/"></iframe>
            <div className="con-a">
              <a href="https://github.com/edwinkay/cartomancia">
                View source code
              </a>
              <a href="https://edwinkay.github.io/cartomancia/">Full page</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Angular;