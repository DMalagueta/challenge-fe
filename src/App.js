import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <div className="header">
        <i class="fa-solid fa-list-check d-inline taskicon"></i>
        <h1 className="d-inline">Task App</h1>
      </div>
      <nav>
        <Link
          to="/"
          id="1"
          className={1 === selected ? "active" : null}
          onClick={() => setSelected(1)}
        >
          <p>Home</p>
        </Link>

        <Link
          to="/tasks"
          id="1"
          className={2 === selected ? "active" : null}
          onClick={() => setSelected(2)}
        >
          <p>Tasks</p>
        </Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;
