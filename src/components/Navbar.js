import React from "react";
import { Outlet, Link } from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={'./routes/home'}>Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to={'./routes/projects'}>Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to={"./routes/contact"}>Contact</Link>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
            </>
        )
    }
}

export default Navbar