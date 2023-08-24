import { NavLink } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { user } = useUser();
  const navStyle = {
    listStyle: "none",
    backgroundColor: "darkred",
    padding: "0px 30px",
    display: "flex",
    justifyContent: "space-between",
    color: "white"
  };
  const listStyle = { listStyle: "none", display: "flex", gap: "20px", padding: "0px" };
  const linkStyle = { color: "white", textDecoration: "none"};

  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li>
          <h3>Lost in Translation</h3>
        </li>
      </ul>
      {user !== null && (
        <ul style={listStyle}>
          <li>
            <NavLink to="/translation" style={linkStyle}>
              <h3>Translations</h3>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" style={linkStyle}>
              <h3>Profile</h3>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
