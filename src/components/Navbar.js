import React from "react";
import { Outlet, Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-dark navbar-expand-lg px-4 " >
                    <div className="container-fluid m-3 fs-2 d-flex " style={{borderBottom : "1px solid white"}}>
                        <Link className="navbar-brand fs-1 m-4 text-white " to={'/home'}>Home</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse menu flex-row-reverse" id="navbarSupportedContent">
                            <ul className="navbar-nav ">
                                <li className="nav-item ">
                                    <Link className="nav-link text-white " to={'/projects'}>Projects</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-white " to={"/contact"}>Contact</Link>
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