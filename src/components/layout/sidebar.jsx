import { NavLink } from "react-router-dom";

function Sidebar() {

  const activeStyle = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal"
  });

  return (
    <aside className="bg-light vh-100 p-3">

      <h5>Menú</h5>

      <nav className="nav flex-column">

        <NavLink
          to="/"
          style={activeStyle}
          className="nav-link"
        >
          Inicio
        </NavLink>

        <NavLink
          to="/jugadores"
          style={activeStyle}
          className="nav-link"
        >
          Jugadores
        </NavLink>

        <NavLink
          to="/trabajadores"
          style={activeStyle}
          className="nav-link"
        >
          Trabajadores
        </NavLink>

        <NavLink
          to="/financiera"
          style={activeStyle}
          className="nav-link"
        >
          Financiera
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;