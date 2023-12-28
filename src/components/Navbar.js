import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar border-bottom border-body">
        <div class="container-fluid">
        <Link className="nav-link" to="/">Home</Link>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-dark" type="button">Search</button>
          </form>
          <div><Link className="nav-link" to="/login"><button class="btn btn-outline-dark" type="button">Login/SignUp</button></Link></div>
        </div>
      </nav>
    </div>
  );
}
