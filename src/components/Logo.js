import logoImage from "../images/logo.png";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <NavLink exact to="/" className="siteLogo">
      <img src={logoImage} alt="Website Logo" />
    </NavLink>
  );
}
