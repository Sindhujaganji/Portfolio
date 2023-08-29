import { Link } from "react-router-dom";
import "../styles.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <h3 className="header"> Portfolio </h3>
      <ul className="navlist">
        <li>
          <Link className="navlink" to="/">
            {" "}
            Home{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navlink" to="/education">
            {" "}
            Education{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navlink" to="/experience">
            {" "}
            Experience{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navlink" to="/projects">
            {" "}
            Projects{" "}
          </Link>
        </li>
        <li>
          {" "}
          <Link className="navlink" to="/contact">
            {" "}
            Contact{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
