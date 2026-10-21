import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function DashboardNavbar({ setCurrentUser }) {

    const navigate = useNavigate()

  const logout = () => {
    if (setCurrentUser) {
        setCurrentUser(null)
    }

    navigate('/login')
}
    

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">

            <div className="container">

                {/* Logo */}
                <Link to="/dashboard" className="navbar-brand d-flex align-items-center" >

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


                {/* Mobile Menu Button */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dashboardNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>


                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="dashboardNavbar"
                >

                    <ul className="navbar-nav mx-auto gap-lg-3">

                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link active text-success fw-semibold" >
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/workouts" className="nav-link">
                                Workouts
                            </Link>
                        </li>

                        <li className="nav-item">
                             <Link to="/nutrition" className="nav-link">
                                Nutrition
                            </Link>
                        </li>

                    </ul>


                    {/* Logout */}
                    <button type="button" onClick={logout} className="btn btn-outline-success rounded-pill px-4">
                        Logout
                    </button>

                </div>

            </div>

        </nav>
    )
}

export default DashboardNavbar