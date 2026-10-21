
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { checkUserAPI, registerUserAPI } from '../Services/allAPI'

function Register() {

    const navigate = useNavigate()

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        activityLevel: ''
    })

    const handleRegister = async (e) => {
        e.preventDefault()

        const {
            name,
            email,
            password,
            age,
            gender,
            height,
            weight,
            activityLevel
        } = userDetails

        if (
            !name ||
            !email ||
            !password ||
            !age ||
            !gender ||
            !height ||
            !weight ||
            !activityLevel
        ) {
            toast.warning('Please fill all fields')
            return
        }

        try {
            const existingUser = await checkUserAPI(email)

            if (existingUser.data.length > 0) {
                toast.error('Email already registered')
                return
            }

            const result = await registerUserAPI(userDetails)

            if (result.status === 201) {
                toast.success('Registration successful')

                setUserDetails({
                    name: '',
                    email: '',
                    password: '',
                    age: '',
                    gender: '',
                    height: '',
                    weight: '',
                    activityLevel: ''
                })

                navigate('/login')
            }

        } catch (error) {
            toast.error('Registration failed')
        }
    }

    return (
        <div className="bg-dark min-vh-100 py-4 py-md-5">
            <div className="container">
                <div className="bg-white rounded-4 overflow-hidden shadow-lg">

                    <div
                        className="position-relative"
                        style={{ height: "250px" }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
                            alt="Gym"
                            className="w-100 h-100"
                            style={{ objectFit: "cover" }}
                        />

                        <div
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center text-center"
                            style={{ background: "rgba(0,0,0,0.55)" }}
                        >
                            <div className="text-white">
                                <p className="text-success fw-bold mb-2">
                                    SMART GYM
                                </p>

                                <h1 className="display-5 fw-bold">
                                    Create Your Fitness Profile
                                </h1>

                                <p className="mb-0 text-light">
                                    Your journey to a healthier lifestyle
                                    starts here.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 p-md-5">

                        <div className="mb-4">
                            <h3 className="fw-bold">
                                Personal Information
                            </h3>

                            <p className="text-secondary">
                                Tell us a little about yourself
                            </p>
                        </div>

                        <form onSubmit={handleRegister}>

                            <div className="mb-4">
                                <label className="form-label fw-semibold">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter your full name"
                                    value={userDetails.name}
                                    onChange={(e) =>
                                        setUserDetails({
                                            ...userDetails,
                                            name: e.target.value
                                        })
                                    }
                                />
                            </div>

                            <div className="row">

                                <div className="col-md-6 mb-4">
                                    <label className="form-label fw-semibold">
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="example@gmail.com"
                                        value={userDetails.email}
                                        onChange={(e) =>
                                            setUserDetails({
                                                ...userDetails,
                                                email: e.target.value
                                            })
                                        }
                                    />
                                </div>

                                <div className="col-md-6 mb-4">
                                    <label className="form-label fw-semibold">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        className="form-control"
                                        placeholder="Create a password"
                                        value={userDetails.password}
                                        onChange={(e) =>
                                            setUserDetails({
                                                ...userDetails,
                                                password: e.target.value
                                            })
                                        }
                                    />
                                </div>

                            </div>

                            <div className="bg-light rounded-4 p-4 mb-4">

                                <h5 className="fw-bold mb-4">
                                    Basic Details
                                </h5>

                                <div className="row">

                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">
                                            Age
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Age"
                                            value={userDetails.age}
                                            onChange={(e) =>
                                                setUserDetails({
                                                    ...userDetails,
                                                    age: e.target.value
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">
                                            Gender
                                        </label>

                                        <select
                                            className="form-select"
                                            value={userDetails.gender}
                                            onChange={(e) =>
                                                setUserDetails({
                                                    ...userDetails,
                                                    gender: e.target.value
                                                })
                                            }
                                        >
                                            <option value="">Select</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                        <label className="form-label">
                                            Activity Level
                                        </label>

                                        <select
                                            className="form-select"
                                            value={userDetails.activityLevel}
                                            onChange={(e) =>
                                                setUserDetails({
                                                    ...userDetails,
                                                    activityLevel: e.target.value
                                                })
                                            }
                                        >
                                            <option value="">
                                                Select Activity Level
                                            </option>

                                            <option value="Beginner">
                                                Beginner
                                            </option>

                                            <option value="Intermediate">
                                                Intermediate
                                            </option>

                                            <option value="Advanced">
                                                Advanced
                                            </option>
                                        </select>
                                    </div>

                                </div>
                            </div>

                            <div className="bg-light rounded-4 p-4 mb-4">

                                <h5 className="fw-bold mb-4">
                                    Body Details
                                </h5>

                                <div className="row">

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Height (cm)
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Height"
                                            value={userDetails.height}
                                            onChange={(e) =>
                                                setUserDetails({
                                                    ...userDetails,
                                                    height: e.target.value
                                                })
                                            }
                                        />
                                    </div>

                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">
                                            Weight (kg)
                                        </label>

                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Weight"
                                            value={userDetails.weight}
                                            onChange={(e) =>
                                                setUserDetails({
                                                    ...userDetails,
                                                    weight: e.target.value
                                                })
                                            }
                                        />
                                    </div>

                                </div>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-success btn-lg w-100 rounded-pill py-3 fw-bold"
                            >
                                Create My Account →
                            </button>

                        </form>

                        <p className="text-center mt-4 mb-0 text-secondary">
                            Already have an account?

                            <Link
                                to="/login"
                                className="text-success fw-bold text-decoration-none ms-2"
                            >
                                Login
                            </Link>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register