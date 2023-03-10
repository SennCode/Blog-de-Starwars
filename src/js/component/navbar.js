import { Link } from "react-router-dom";
import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import logo from "/workspace/react-hello-webapp/src/img/star-wars-logo-974.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar background mb-3">
      <Link to="/">
        <img src={logo} className="img-fluid ms-5" width="100px" alt="..." />
      </Link>
      <div className="d-flex ">
        <li className="favoritos dropdown me-5">
          <button
            className="dropdown-toggle btn btn-warning button-card me-5"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>

          <ul
            className="dropdown-menu dropdown-menu-dark"
            aria-labelledby="navbarDropdown"
          >
            {store.favoritos.map((favorito, id) => {
              return (
                <li>
                  <a className="dropdown-item text-warning">
                    {favorito.nombre}{" "}
                    <button
                      onClick={() => actions.deleteFavoritos(favorito.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      {
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                          <path
                            fillRule="evenodd"
                            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                          />
                        </svg>
                      }
                    </button>
                  </a>
                </li>
              );
            })}
          </ul>
        </li>
      </div>
    </nav>
  );
};
