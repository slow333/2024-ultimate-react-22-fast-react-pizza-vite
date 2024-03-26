/* eslint-disable react/no-unescaped-entities */
import "./logo-ani.css";
import { Link } from "react-router-dom";
function LogoAni() {
  return (
    <Link to="/">
      <div className="container">
        <div className="center-text"></div>
        <div className="inside-circle-container">
          <div className="inside-circle"></div>
        </div>
        <div className="outside-circle-container">
          <div className="outside-circle"></div>
        </div>
      </div>
    </Link>
  );
}

export default LogoAni;
