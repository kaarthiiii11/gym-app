import { Link } from 'react-router-dom'
import { CgGym } from "react-icons/cg"
import { FaBowlFood } from "react-icons/fa6"
import { GiProgression } from "react-icons/gi"
import { FaHeartbeat } from "react-icons/fa"
import DashboardNavbar from '../Components/DashboardNav'

function Dashboard({ user, setCurrentUser }) {

    const currentUser = user

    return (

        <div>
            <DashboardNavbar setCurrentUser={setCurrentUser} />
            <div className="bg-dark text-white">

                {/*  WELCOME SECTION  */}

                <section
                    className="position-relative d-flex align-items-center"
                    style={{
                        minHeight: "500px",
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed"
                    }}
                >

                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
                    ></div>

                    <div className="container position-relative py-5">

                        <div className="row align-items-center">

                            <div className="col-lg-8">

                                <span className="badge bg-success rounded-pill px-3 py-2 mb-3">
                                    SMART GYM
                                </span>

                                <h1 className="display-3 fw-bold">

                                    Welcome back,
                                    <br />

                                    <span className="text-success">
                                        {user?.name || "Fitness Enthusiast"}!
                                    </span>

                                </h1>

                                <p className="lead text-light mt-3">
                                    Your fitness journey continues here.
                                    Train smarter, stay active and build
                                    healthy habits with Smart Gym.
                                </p>

                                <div className="mt-4">

                                    <Link
                                        to="/workouts"
                                        className="btn btn-success btn-lg rounded-pill px-4 me-2"
                                    >
                                        Start Workout →
                                    </Link>

                                    <Link
                                        to="/nutrition"
                                        className="btn btn-outline-light btn-lg rounded-pill px-4"
                                    >
                                        Explore Nutrition
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ADVERTISEMENT CAROUSEL */}

                <section className="bg-light py-5">

                    <div className="container">

                        <div className="text-center mb-4">

                            <span className="badge bg-success rounded-pill px-3 py-2">
                                FEATURED
                            </span>

                            <h2 className="text-dark fw-bold mt-3">
                                Smart Gym Highlights
                            </h2>

                        </div>


                        <div id="gymCarousel" className="carousel slide shadow-lg rounded-4 overflow-hidden" data-bs-ride="carousel" >

                            <div className="carousel-indicators">

                                <button type="button" data-bs-target="#gymCarousel" data-bs-slide-to="0" className="active" ></button>

                                <button type="button" data-bs-target="#gymCarousel" data-bs-slide-to="1"></button>

                                <button type="button" data-bs-target="#gymCarousel" data-bs-slide-to="2" ></button>

                            </div>


                            <div className="carousel-inner">

                                {/* Slide 1 */}

                                <div className="carousel-item active">

                                    <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=80" className="d-block w-100" style={{ height: "420px", objectFit: "cover" }} alt="Gym workout" />

                                    <div className="carousel-caption text-start">

                                        <div className="p-4 rounded-4"
                                            style={{
                                                backgroundColor:
                                                    "rgba(0,0,0,0.65)"
                                            }}
                                        >

                                            <h2 className="fw-bold">
                                                Train Stronger
                                            </h2>

                                            <p>
                                                Discover workouts designed
                                                for different fitness levels.
                                            </p>

                                            <Link
                                                to="/workouts"
                                                className="btn btn-success rounded-pill"
                                            >
                                                Explore Workouts
                                            </Link>

                                        </div>

                                    </div>

                                </div>


                                {/* Slide 2 */}

                                <div className="carousel-item">

                                    <img
                                        src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80"
                                        className="d-block w-100"
                                        style={{
                                            height: "420px",
                                            objectFit: "cover"
                                        }}
                                        alt="Healthy nutrition"
                                    />

                                    <div className="carousel-caption text-start">

                                        <div
                                            className="p-4 rounded-4"
                                            style={{
                                                backgroundColor:
                                                    "rgba(0,0,0,0.65)"
                                            }}
                                        >

                                            <h2 className="fw-bold">
                                                Eat Smart
                                            </h2>

                                            <p>
                                                Learn about balanced nutrition
                                                for an active lifestyle.
                                            </p>

                                            <Link
                                                to="/nutrition"
                                                className="btn btn-success rounded-pill"
                                            >
                                                Explore Nutrition
                                            </Link>

                                        </div>

                                    </div>

                                </div>


                                {/* Slide 3 */}

                                <div className="carousel-item">

                                    <img
                                        src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=1600&q=80"
                                        className="d-block w-100"
                                        style={{
                                            height: "420px",
                                            objectFit: "cover"
                                        }}
                                        alt="Fitness training"
                                    />

                                    <div className="carousel-caption text-start">

                                        <div
                                            className="p-4 rounded-4"
                                            style={{
                                                backgroundColor:
                                                    "rgba(0,0,0,0.65)"
                                            }}
                                        >

                                            <h2 className="fw-bold">
                                                Know Your Numbers
                                            </h2>

                                            <p>
                                                Use our BMI calculator as a
                                                general fitness screening tool.
                                            </p>

                                            <Link
                                                to="/bmi"
                                                className="btn btn-success rounded-pill"
                                            >
                                                Calculate BMI
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#gymCarousel"
                                data-bs-slide="prev"
                            >

                                <span className="carousel-control-prev-icon"></span>

                            </button>


                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#gymCarousel"
                                data-bs-slide="next"
                            >

                                <span className="carousel-control-next-icon"></span>

                            </button>

                        </div>

                    </div>

                </section>


                {/* QUICK INFORMATION  */}

                <section className="bg-dark py-5">

                    <div className="container">

                        <div className="text-center mb-5">

                            <span className="text-success fw-bold">
                                YOUR FITNESS HUB
                            </span>

                            <h2 className="display-6 fw-bold mt-2">
                                Everything In One Place
                            </h2>

                            <p className="text-secondary">
                                Smart tools and resources to support your
                                everyday fitness journey.
                            </p>

                        </div>


                        <div className="row g-4">

                            {/* Workout */}

                            <div className="col-lg-3 col-md-6">

                                <div className="card bg-black text-white border-0 rounded-4 h-100 shadow">

                                    <div className="card-body p-4">

                                        <div className="fs-1 mb-3">
                                            <CgGym color="white" />
                                        </div>

                                        <h4 className="fw-bold">
                                            Workouts
                                        </h4>

                                        <p className="text-secondary">
                                            Explore different workout
                                            routines and training levels.
                                        </p>

                                        <Link
                                            to="/workouts"
                                            className="btn btn-outline-success rounded-pill"
                                        >
                                            View Workouts
                                        </Link>

                                    </div>

                                </div>

                            </div>


                            {/* Nutrition */}

                            <div className="col-lg-3 col-md-6">

                                <div className="card bg-black text-white border-0 rounded-4 h-100 shadow">

                                    <div className="card-body p-4">

                                        <div className="fs-1 mb-3">
                                            <FaBowlFood color="white" />
                                        </div>

                                        <h4 className="fw-bold">
                                            Nutrition
                                        </h4>

                                        <p className="text-secondary">
                                            Learn about balanced food choices
                                            and healthy habits.
                                        </p>

                                        <Link
                                            to="/nutrition"
                                            className="btn btn-outline-success rounded-pill"
                                        >
                                            View Nutrition
                                        </Link>

                                    </div>

                                </div>

                            </div>


                            {/* BMI */}

                            <div className="col-lg-3 col-md-6">

                                <div className="card bg-black text-white border-0 rounded-4 h-100 shadow">

                                    <div className="card-body p-4">

                                        <div className="fs-1 mb-3">
                                            <GiProgression color="white" />
                                        </div>

                                        <h4 className="fw-bold">
                                            BMI Calculator
                                        </h4>

                                        <p className="text-secondary">
                                            Calculate your BMI using height
                                            and weight.
                                        </p>

                                        <Link
                                            to="/bmi"
                                            className="btn btn-outline-success rounded-pill"
                                        >
                                            Calculate BMI
                                        </Link>

                                    </div>

                                </div>

                            </div>


                            {/* Diet */}

                            <div className="col-lg-3 col-md-6">

                                <div className="card bg-black text-white border-0 rounded-4 h-100 shadow">

                                    <div className="card-body p-4">

                                        <div className="fs-1 mb-3">
                                            <FaHeartbeat color="white" />
                                        </div>

                                        <h4 className="fw-bold">
                                            Diet Plans
                                        </h4>

                                        <p className="text-secondary">
                                            Explore general balanced diet
                                            information.
                                        </p>

                                        <Link
                                            to="/diet-plan"
                                            className="btn btn-outline-success rounded-pill"
                                        >
                                            View Plans
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* PARALLAX SECTION */}

                <section
                    className="position-relative d-flex align-items-center"
                    style={{
                        minHeight: "500px",
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1800&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed"
                    }}
                >

                    <div
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                            backgroundColor: "rgba(0,0,0,0.7)"
                        }}
                    ></div>


                    <div className="container position-relative">

                        <div className="row">

                            <div className="col-lg-7">

                                <span className="badge bg-success rounded-pill px-3 py-2">
                                    SMART FITNESS
                                </span>

                                <h2 className="display-4 fw-bold mt-3">

                                    Your Goals.
                                    <br />

                                    Your Journey.
                                    <br />

                                    <span className="text-success">
                                        Your Strength.
                                    </span>

                                </h2>

                                <p className="lead text-light">
                                    Smart Gym brings workouts, nutrition,
                                    BMI tools and fitness information together
                                    in one simple platform.
                                </p>

                                <Link
                                    to="/workouts"
                                    className="btn btn-success btn-lg rounded-pill px-4"
                                >
                                    Begin Your Journey →
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


                {/*  WHY SMART GYM */}

                <section className="bg-light text-dark py-5">

                    <div className="container py-4">

                        <div className="row align-items-center">

                            <div className="col-lg-6">

                                <span className="badge bg-dark rounded-pill px-3 py-2">
                                    WHY SMART GYM?
                                </span>

                                <h2 className="display-5 fw-bold mt-3">

                                    Fitness Made

                                    <span className="text-success">
                                        {" "}Simple.
                                    </span>

                                </h2>

                                <p className="text-secondary lead">
                                    Smart Gym is designed to make your fitness
                                    journey easier by bringing useful fitness
                                    resources together.
                                </p>


                                <div className="mt-4">

                                    <div className="d-flex mb-4">

                                        <div className="fs-2 me-3">
                                            ✓
                                        </div>

                                        <div>

                                            <h5 className="fw-bold">
                                                Beginner Friendly
                                            </h5>

                                            <p className="text-secondary mb-0">
                                                Simple information and workouts
                                                suitable for different levels.
                                            </p>

                                        </div>

                                    </div>


                                    <div className="d-flex mb-4">

                                        <div className="fs-2 me-3">
                                            ✓
                                        </div>

                                        <div>

                                            <h5 className="fw-bold">
                                                All In One Platform
                                            </h5>

                                            <p className="text-secondary mb-0">
                                                Workouts, nutrition, BMI and
                                                diet information in one place.
                                            </p>

                                        </div>

                                    </div>


                                    <div className="d-flex">

                                        <div className="fs-2 me-3">
                                            ✓
                                        </div>

                                        <div>

                                            <h5 className="fw-bold">
                                                Easy To Use
                                            </h5>

                                            <p className="text-secondary mb-0">
                                                A clean and simple interface
                                                designed for everyday use.
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>


                            <div className="col-lg-6 mt-5 mt-lg-0">

                                <img
                                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80"
                                    className="img-fluid rounded-4 shadow-lg"
                                    alt="Fitness training"
                                />

                            </div>

                        </div>

                    </div>

                </section>


                {/*  FINAL CTA */}

                <section className="bg-success text-dark py-5">

                    <div className="container py-4">

                        <div className="row align-items-center">

                            <div className="col-md-8">

                                <h2 className="fw-bold">
                                    Ready to get started?
                                </h2>

                                <p className="mb-0">
                                    Explore Smart Gym and make fitness
                                    part of your everyday routine.
                                </p>

                            </div>

                            <div className="col-md-4 text-md-end mt-3 mt-md-0">

                                <Link
                                    to="/workouts"
                                    className="btn btn-dark btn-lg rounded-pill px-4"
                                >
                                    Explore Smart Gym →
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </div>
        </div>
    )
}

export default Dashboard