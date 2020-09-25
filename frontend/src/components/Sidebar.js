import React, { useState } from "react";
import udemyLogo from "../assets/images/udemy-logo.svg";
import andresThumb from "../assets/images/andres-thumb.jpg";
import "./css/Sidebar.css";

const Sidebar = (props) => {
  const [nav, setNav] = useState([
    { label: "Home", icon: "icon-home3", slug: "/" },
    { label: "Discover", icon: "icon-search", slug: "discover" },
    { label: "Categories", icon: "icon-price-tag", slug: "categories" },
    { label: "My Courses", icon: "icon-books", slug: "my-courses" },
    { label: "Settings", icon: "icon-cog", slug: "settings" },
  ]);

  const [currentPage, setCurrentPage] = useState("/");

  var navigation = nav.map((item) => {
    return (
      <li
        key={`navItem-${item.slug}`}
        className={`Sidebar__nav-item ${currentPage === item.slug ? "on" : ""}`}
      >
        <a href={item.slug} className="Sidebar__nav-link">
          <i className={item.icon}></i>
          <h4>{item.label}</h4>
        </a>
      </li>
    );
  });

  return (
    <div className="Sidebar">
      <a href="/" className="Sidebar__logo">
        <img src={udemyLogo} alt="Udemy Logo" />
      </a>
      <ul className="Sidebar__nav">{navigation}</ul>

      <div className="Sidebar__course">
        <div className="Sidebar__course-image">
          <i className="icon-lightbulb"></i>
        </div>
        <div className="Sidebar__course-info">
          <div className="Sidebar__course-name">Introduction to Javascript</div>
          <div className="Sidebar__course-author">by Andrés Betancourt</div>
        </div>
      </div>

      <div className="Sidebar__user">
        <div className="Sidebar__user-image">
          <img src={andresThumb} alt="User" />
        </div>
        <div className="Sidebar__user-name">Andrés Betancourt</div>
      </div>
    </div>
  );
};

export default Sidebar;
