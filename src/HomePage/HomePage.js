import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./HomePage.css";
import NavBar from "../Navbar/Navbar";
import logo5 from "../twitter.png";
import Sidebar from "../Sidebar/Sidebar";
import MenubarContent from "../Menubar/MenubarContent";

function HomePage() {
  return (
    <div className="main2 fluid-container">
      <div className="firstdiv">
        <Sidebar />
      </div>
      <div className="content">
        <div className="row barnav">
          <NavBar />
        </div>
        <div className="cards">
          <div className="card">
            <div className="innerdiv">
              <div className="color-card1">
                <span className="icons">&#128209;</span>
              </div>
              <div className="textdivv">
                <p className="cards-header">Paid Courses</p>
                <p>1</p>
                <hr />
                <p> Get More Details</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="innerdiv">
              <div className="color-card2">
                <span className="icons"> &#128240;</span>
              </div>
              <div className="textdivv">
                <p className="cards-header">UnPaid Courses</p>
                <p>1</p>
                <hr />
                <p> Get More Details</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="innerdiv">
              <div className="color-card3">
                <span className="icons">&#128712;</span>
              </div>
              <div className="textdivv">
                <p className="cards-header">Fixed issues</p>
                <p>75</p>
                <hr />
                <p> Get More Details</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="innerdiv">
              <div className="color-card4">
                <img className="card-img" src={logo5} />
              </div>
              <div className="textdivv">
                <p className="cards-header">Help</p>
                <p>1</p>
                <hr />
                <p> Get More Details</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tabs">
          <MenubarContent />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
