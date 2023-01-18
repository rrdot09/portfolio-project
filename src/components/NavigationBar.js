import { React, useState, useEffect } from "react";
import Home from "../images/nav-icons/home.png";
import About from "../images/nav-icons/about.png";
import Projects from "../images/nav-icons/projects.png";
import { NavLink } from "react-router-dom";

export default function NavigationBar() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    }
  }, []);

  return (
    <>
      <nav className="nav" onClick={openMenu}>
        <button className="nav_button"></button>
        <span className="nav_header">menu</span>
      </nav>
      {showMenu && (
        <div className="menu">
          <div className="menu_item home">
            <NavLink exact to="/" activeClassName="active">
              <img src={Home} alt="" />
            </NavLink>
          </div>

          <div className="menu_item about">
            <NavLink exact to="/about" activeClassName="active">
              <img src={About} alt="" />
            </NavLink>
          </div>

          <div className="menu_item projects">
            <NavLink exact to="/projects" activeClassName="active">
              <img src={Projects} alt="" />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
}
