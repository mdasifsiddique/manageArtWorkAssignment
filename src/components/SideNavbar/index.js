import "./style.css";
import { useState } from "react";
import logo from "./../../images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import {GiHamburgerMenu} from "react-icons/gi"

const SideNavbar = () => {
  const [showSideBar, setshowSideBar] = useState(false);

  return (
    <div className="sidenavbar">
      {showSideBar && (
        <div className="contents">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="navSection">
            <div>
              <AiOutlineHome /> Dashboard
            </div>
            <div>
              <BsCheckCircle /> Start a new Project
            </div>
          </div>

          <div className="navSection">
            <div className="navCategory">Workflows</div>
            <div>Inbox(3)</div>
            <div>My Projects(75)</div>
            <div className="selected">All Projects(85)</div>
          </div>
          <div className="navSection">
            <div className="navCategory">Asset Library</div>
            <div>Search</div>
            <div>Browse</div>
          </div>
          <div className="navSection">
            <div className="navCategory">Reports</div>
          </div>
        </div>
      )}
      <button className="btn-nav" onClick={() => setshowSideBar((prevState) => !prevState)}>
      <GiHamburgerMenu className="btn-nav-toggle" />
      </button>
    </div>
  );
};

export default SideNavbar;
