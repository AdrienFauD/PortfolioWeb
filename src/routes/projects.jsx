import React from "react"
import { Outlet, Link } from "react-router-dom"

export default function Project() {
    return (
        <>
        {process.env.TEST_ENV}
            <div className="container text-center project-container" >
                <div className="row  gap-3" style={{ margin: '5vw' }}>
                    <Link className="project col-4 shadow rounded shadow-primary" to={'/dispenser'}>
                        go to dispenser project
                    </Link>
                    <div className="col shadow-sm"  >

                        <p className="fs-2 fw-bolder">
                            Here is a vending machine I made to train javascript skills and how to to interact with a user input
                        </p>
                    </div>
                </div>
                <div className="row  gap-3" style={{ margin: '5vw' }}>
                    <Link className="project col shadow rounded" to={'/shop'}>
                        Go to shop project
                    </Link>
                    <div className="col shadow-sm"  >
                        <p className="fs-2 fw-bolder">
                            Shopping project, where a user can fetch product from a database and add it to a cart 
                        </p>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

