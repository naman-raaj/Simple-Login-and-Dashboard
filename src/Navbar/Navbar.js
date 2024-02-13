import React from "react";
import "./Navbar.css";
import "bootstrap/dist/css/bootstrap.css";
 

const NavBar = () => {
  return (
    <div class=" row col md-12">
      <nav class="navbar">
        <p>Welcome</p>
        <div className="row">
          <label>School Year</label>
          <div className="dropdown">
            <li>
              <a
                href="#"
                class="dropdown-toggle dropdown2"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                23-24 -FLEX <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">
                    <span
                      class="glyphicon glyphicon-th-list"
                      aria-hidden="true"
                    ></span>{" "}
                    24-25 -FLEX{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      class="glyphicon glyphicon-plus-sign"
                      aria-hidden="true"
                    ></span>{" "}
                    25-26 -FLEX{" "}
                  </a>
                </li>
              </ul>
            </li>
            <li class="dropdown22 ">
              <a
                href="#"
                class="dropdown-toggle dropdown3"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
              >
                {" "}
                &#128365; <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">
                    <span
                      class="glyphicon glyphicon-th-list"
                      aria-hidden="true"
                    ></span>{" "}
                    Notification1
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      class="glyphicon glyphicon-plus-sign"
                      aria-hidden="true"
                    ></span>{" "}
                    Notification2{" "}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span
                      class="glyphicon glyphicon-plus-sign"
                      aria-hidden="true"
                    ></span>{" "}
                    Notification3{" "}
                  </a>
                </li>
              </ul>
            </li>
            <span>
              <i class="fa fa-fw fa-user"></i>{" "}
            </span>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
