import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUserAPI } from '../Services/allAPI'


function Login({ setCurrentUser }) {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async (e) => {

        e.preventDefault()


        if (!email || !password) {
            toast.warning('Please fill all fields')
            return
        }


        try {

            const result =
                await loginUserAPI(email,password)
                console.log("Login API result:", result.data);


            if (result.data.length > 0) {
                // Get logged-in user from server
                const loggedInUser =result.data[0]


                // Store user in React state

                setCurrentUser(loggedInUser)
                toast.success('Login successful')
                navigate('/dashboard')

            } else {
                toast.error('Invalid email or password')
            }


        } catch (error) {
            console.log('Login error:',error)
            toast.error('Login failed')
        }

    }


    return (

        <div className="bg-dark min-vh-100 d-flex align-items-center py-4 py-md-5">

            <div className="container">

                <div className="row justify-content-center">

                    <div className="col-12 col-md-10 col-lg-9 col-xl-8">


                        <div className="row bg-white rounded-4 overflow-hidden shadow-lg">


                            {/* LEFT IMAGE */}

                            <div className="col-lg-6 d-none d-lg-block p-0">

                                <div
                                    className="position-relative h-100"
                                    style={{
                                        minHeight: "550px"
                                    }}
                                >

                                    <img
                                        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
                                        alt="Gym"
                                        className="w-100 h-100"
                                        style={{
                                            objectFit: "cover"
                                        }}
                                    />


                                    {/* IMAGE OVERLAY */}

                                    <div
                                        className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 p-xl-5 text-white"
                                        style={{
                                            background:
                                                "linear-gradient(transparent, rgba(0,0,0,0.9))"
                                        }}
                                    >

                                        <p className="text-success fw-bold mb-2">

                                            SMART GYM

                                        </p>


                                        <h2 className="fw-bold">

                                            Stronger
                                            <br />
                                            Every Day.

                                        </h2>


                                        <p className="text-light mb-0">

                                            Train smart. Stay active.
                                            Build healthy habits.

                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* LOGIN FORM*/}

                            <div className="col-lg-6 p-4 p-md-5">


                                {/* LOGO */}

                                <div className="text-center mb-4">

                                    <div className="fs-1">

                                        <img src="https://images.emojiterra.com/google/android-11/512px/1f3cb-2642.png" style={{ width: '30px',height:'35px' }} alt="boy" className='me-3'  />

                                    </div>


                                    <h2 className="fw-bold mb-1">

                                        Welcome Back

                                    </h2>


                                    <p className="text-secondary">

                                        Login to your Smart Gym account

                                    </p>

                                </div>


                                {/* FORM */}

                                <form onSubmit={handleLogin}>


                                    {/* EMAIL */}

                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">

                                            Email Address

                                        </label>


                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(
                                                    e.target.value
                                                )
                                            }
                                        />

                                    </div>


                                    {/* PASSWORD */}

                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">

                                            Password

                                        </label>


                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(
                                                    e.target.value
                                                )
                                            }
                                        />

                                    </div>


                                    {/* LOGIN BUTTON */}

                                    <button
                                        type="submit"
                                        className="btn btn-success btn-lg w-100 rounded-pill fw-bold py-3"
                                    >

                                        Login →

                                    </button>

                                </form>


                                {/* REGISTER */}

                                <div className="text-center mt-4">

                                    <p className="text-secondary mb-0">

                                        Don't have an account?

                                        <Link
                                            to="/register"
                                            className="text-success fw-bold text-decoration-none ms-2"
                                        >

                                            Create Account

                                        </Link>

                                    </p>

                                </div>


                                {/* DIVIDER */}

                                <div className="d-flex align-items-center my-4">

                                    <hr className="flex-grow-1" />

                                    <span className="px-3 text-secondary">

                                        OR

                                    </span>

                                    <hr className="flex-grow-1" />

                                </div>


                                <div className="text-center">

                                    <Link
                                        to="/"
                                        className="text-decoration-none text-secondary"
                                    >

                                        ← Back to Home

                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}


export default Login