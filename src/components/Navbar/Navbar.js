import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" class="left">
            GJ
          </a>
          <ul id="nav-mobile" class="right ">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
        <ul class="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">Javascript</a>
          </li>
          <li>
            <a href="mobile.html">Mobile</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
