import React from "react";
import "../Main/Main.scss";

import perfil from "../../assets/image/perfil.jpg";
import wsp from "../../assets/icons/icon phone.png";
import email from "../../assets/icons/icon email.png";
import git from "../../assets/icons/icon-git.png";
import location from "../../assets/icons/icon ubicacion.png";

function Main() {
  return (
    <div className="midc box animate__animated animate__fadeIn">
      <div className="display">
        <div className="ajustarTitulo animate__animated animate__fadeInUp">
          <h1 className="name">EDWIN CUETIA</h1>
          <h3 className="post">WEB DEVELOPER</h3>
        </div>
        <div className="positionImage animate__animated animate__bounceIn">
          <img className="myImage" src={perfil} alt="" />
        </div>
        <div className="adjust animate__animated animate__fadeInUp">
          <div className="numero">
            <ul>
              <li className="numberStyle">
                <img className="iconos" src={wsp} alt="" />
              </li>
              <li className="number">+57 301 7757343</li>
            </ul>
          </div>

          <div className="numero">
            <ul>
              <li>
                <img className="iconos" src={email} alt="" />
              </li>
              <li className="number">edwinkaycut@gmail.com</li>
            </ul>
          </div>
          <div className="numero">
            <ul>
              <img className="iconos" src={git} alt="" />
              <li className="number">
                <a className="icon-git" href="https://github.com/edwinkay">
                  https://github.com/edwinkay
                </a>
              </li>
            </ul>
          </div>

          <div className="numero">
            <ul>
              <img className="iconos" src={location} alt="" />
              <li className="number">Colombia, Corinto - Cauca</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="box3">
        <div className="left animate__animated animate__fadeInLeftBig">
          <div className="content">
            <h3>ABOUT ME</h3>
            <p>
              As a passionate web developer specialized in technologies such as
              Angular, React, WordPress. My organized and results-oriented
              approach has allowed me to successfully complete the various
              projects and challenges that have been presented to me. My
              commitment and work ethic, where responsibility and collaboration
              are fundamental. My previous experience includes developing
              effective and engaging web solutions, making the most of my
              technical skills and ability to work as a team.
            </p>
            <h3>WORK EXPERIENCE</h3>
            <ul>
              <li>2024</li>
              <p>
                <b>Factor Clave:</b> e-learning, Articulate 360
              </p>
            </ul>
            <ul>
              <li>2020 - 2023</li>
              <p>
                <b>Hexa Solutions:</b> Ujusa web, Wordpress.
                <b>Ujusa</b> Development web, angular
              </p>
            </ul>
            <ul>
              <li>2017</li>
              <p>
                Graphics designer in Adobe management (Acrobat, Photoshop, after
                effects, premiere and illustrator) & 3d modeling in Sketchup,
                And machine operator in a company called Gilpa Impresores
              </p>
            </ul>
            <h3>PROJECTS</h3>
            <p>
              <span>
                Login & Products: created with angular and using JWT from
                Firebase:{" "}
              </span>
              <a href="https://edwinkay.github.io/licorApp/login">
                https://edwinkay.github.io/licorApp/login
              </a>
            </p>
            <p>
              <span>
                Cartografia: aplication made in WordPress using Laravel, Valet
                and MySQL:{" "}
              </span>
              <a href="https://ujusawesx.com.co/"> https://ujusawesx.com.co/</a>
            </p>
          </div>
        </div>
        <div className="right animate__animated animate__fadeInRightBig">
          <div className="content">
            <h3>SKILL</h3>
            <p>Software Development:</p>
            <ul>
              <li>
                <b>Javascript:</b> React, Angular, Node, jQuery
              </li>
              <li>
                <b>Programming languages:</b> C#, .NET, Django(Python),
                WordPress(PHP)
              </li>
              <li>
                <b>Libraries & Frameworks:</b> Bootstrap, Tailwind, VideoJs
              </li>
              <li>
                <b>DataBase:</b> Firebase, MySQL, MongoDB, Swagger
              </li>
              <li>
                <b>Libraries:</b> Bootstrap, Tailwind, videoJs
              </li>
              <li>
                <b>Web Development:</b> Html, Css, Sass, Stylus, Less
              </li>
              <li>
                <b>Project management and collaboration tools</b> Git, Jira,
                Jenkins, Alfreco
              </li>
              <li>
                <b>Containers</b> Docker
              </li>
            </ul>
            <h3>EDUCATION</h3>
            <ul>
              <li>2020</li>
              <p>
                Fullstack Javascript developer <b>PLATZI MASTERS</b> high
                performance program focused on enhancing skills for the
                technology sector
              </p>
            </ul>
            <ul>
              <li>2018</li>
              <p>
                <b>SENA:</b> Technician in systems & system architectures, with
                complementary Java and C++.
              </p>
            </ul>
            <ul>
              <li>2016</li>
              <p>
                <b>SENA:</b> Technician in construction and assembly in
                electrical networks with management of control drive and PLC.,
              </p>
            </ul>
            <h3>LANGUAGE</h3>

            <div className="box2">
              <div className="centered">
                <div className="left2">
                  <p>Spanish(native)</p>
                  <div className="content2">
                    <div>
                      <div className="circular">
                        <div className="inner"></div>
                        <div className="outer"></div>
                        <div className="numb">100%</div>
                        <div className="circle">
                          <div className="dot">
                            <span></span>
                          </div>
                          <div className="bar left">
                            <div className="progress"></div>
                          </div>
                          <div className="bar right">
                            <div className="progress"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="centered">
                <p>English</p>
                <div className="right2">
                  <div className="content2">
                    <div>
                      <div className="circular2">
                        <div className="inner2"></div>
                        <div className="outer2"></div>
                        <div className="numb2">50%</div>
                        <div className="circle2">
                          <div className="dot2">
                            <span></span>
                          </div>
                          <div className="bar2 left2">
                            <div className="progress2"></div>
                          </div>
                          <div className="bar2 right2">
                            <div className="progress2"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
