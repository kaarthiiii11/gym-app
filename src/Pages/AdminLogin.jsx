import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        setError('');

        if (
            email.trim().toLowerCase() === 'admin@gmail.com' &&
            password === 'admin123'
        ) {
            sessionStorage.setItem('adminLogin', 'true');
            navigate('/admin-dashboard');
        } else {
            setError('Invalid email or password.');
        }
    }

    return (
        <main className="admin-login-page min-vh-100 d-flex align-items-center py-5">
            <div className="container">
                <div className="row admin-login-wrap g-0">

                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="admin-login-visual h-100 p-5 text-white">
                            <Link
                                to="/"
                                className="text-white text-decoration-none fw-bold fs-4"
                            >
                                <i className="fa-solid fa-dumbbell text-success me-2"></i>
                                SMART GYM
                            </Link>

                            <div className="admin-login-message">
                                <span className="badge bg-success mb-3">
                                    ADMIN ACCESS
                                </span>

                                <h1 className="display-5 fw-bold">
                                    Manage your gym.
                                    <br />
                                    Inspire progress.
                                </h1>

                                <p className="text-white-50 mt-3">
                                    Manage registered users, workout plans
                                    and diet plans from one dashboard.
                                </p>

                                
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6">
                        <div className="admin-login-form p-4 p-md-5">
                            <div className="text-center mb-4">
                                

                                <p className="text-success fw-bold mt-3 mb-1">
                                    WELCOME BACK
                                </p>

                                <h2 className="fw-bold">Admin Login</h2>

                                <p className="text-secondary">
                                    Sign in to manage Smart Gym.
                                </p>
                            </div>

                            <form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control form-control-lg"
                                        placeholder="email@gmail.com"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        autoComplete="username"
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control form-control-lg"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>
                                {error && (
                                    <div className="alert alert-danger">
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    className="btn btn-success btn-lg w-100 mt-3"
                                >
                                    Sign In
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </button>
                            </form>

                            <p className="text-center text-secondary small mt-4">
                                <i className="fa-solid fa-lock me-2"></i>
                                Administrator access only
                            </p>

                            <div className="text-center">
                                <Link
                                    to="/"
                                    className="text-secondary text-decoration-none"
                                >
                                    <i className="fa-solid fa-arrow-left me-2"></i>
                                    Back to website
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default AdminLogin;