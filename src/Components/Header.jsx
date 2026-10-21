import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate()



    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">

            <div className="container">

                <Link
                    to="/"
                    className="navbar-brand d-flex align-items-center"
                >

                    <span className="fs-2 me-2">
                        <img src="https://images.emojiterra.com/google/android-11/512px/1f3cb-2642.png" style={{ width: '30px',height:'35px' }} alt="boy" className='me-3'  />
                    </span>

                    <div>

                        <h4 className="mb-0 fw-bold">
                            Fit<span className="text-success">Zone</span>
                        </h4>

                        <small className="text-secondary">
                            STRONGER EVERY DAY
                        </small>

                    </div>

                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMenu"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>


                <div
                    className="collapse navbar-collapse"
                    id="navbarMenu"
                >

                    <ul className="navbar-nav mx-auto gap-lg-4">

                        <li className="nav-item">

                            <Link to="/" className="nav-link active text-success"
                            >
                                Home
                            </Link>

                        </li>


                        <li className="nav-item">

                            <a href="#about" className="nav-link">
                                About
                            </a>

                        </li>

                    </ul>

                        <Link to="/login" className="btn btn-success rounded-pill px-4" >
                           Login
                        </Link>
                        <Link to="/admin-login" className="btn btn-success rounded-pill px-4 ms-3" >
                            Admin Login
                        </Link>

                    

                </div>

            </div>

        </nav>

    )
}

export default Header