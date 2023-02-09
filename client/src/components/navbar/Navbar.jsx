import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./navbar.css"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  
  const handleClickLoginBtn = () => {
    navigate("/login");
  };

  const handleClickLogOutBtn = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Kyunbooking</span>
        </Link>
        {user ? (
          <div style={{ display: "flex" }}>
            <span>{user.username}</span>
            <div className="logOutItem" onClick={handleClickLogOutBtn}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </div>
          </div>
        ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton" onClick={handleClickLoginBtn}>Login</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar