import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

function NavBar() {
  return (
    <>
      <div className={classes.Container}>
        <div fluid className={classes.navbarcontainer}>
          <div className={classes.logocol}>
            <Link to="">
              {/* <img src={logo} alt="companay-logo" width="30" height="30" />{" "} */}
              <span>Temelio</span>
            </Link>
          </div>
          <div className={classes.navlist}>
            <ul>
              <li>
                <Link to="/">Forms</Link>
              </li>
              <li>
                <Link to="/email">Email</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
