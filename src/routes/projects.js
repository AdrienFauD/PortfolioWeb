import React from "react"
import { Outlet, Link} from "react-router-dom"
 
export default function Project() {
    return (
        <>
            <div className="container text-center project-container" >
                <div className="row  gap-3" style={{margin : '5vw'}}>
                    <div className="project col-4 shadow rounded shadow-primary">
                        projet
                    </div>
                    <p className="col fs-2 fw-bolder shadow-sm">
                        Here is a vending machine I made to train javascript skills and how to to interact with a user input
                    </p>
                </div>
                <div className="row  gap-3" style={{margin : '5vw'}}>
                    <div className="project col shadow rounded">
                        That's some cool stuff right here
                    </div>
                    <p className="col fs-2 fw-bolder shadow-sm">
                        Cool todolist used to add task, read, update and remove them when completed (or if lazyness won) 
                    </p>
                </div>
                <Link to={'/shop'}>YOOOOOOOOOOOOOOOlo </Link>
            </div>
            <Outlet />
        </>
    )
}

