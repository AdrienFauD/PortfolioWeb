import React from "react";
import { Outlet, Link } from "react-router-dom";
import './css/navbar.css'


class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg px-4" >
                    <div className="container-fluid m-3 fs-2" style={{borderBottom : "1px solid white"}}>
                        <Link className="navbar-brand fs-1 m-4" to={'/home'}>Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse offset-md-8 menu" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item px-3">
                                    <Link className="nav-link" to={'/projects'}>Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/contact"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
            </>
        )
    }
}

export default Navbar