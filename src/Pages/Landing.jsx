import { Link } from 'react-router-dom'
import { CgGym } from "react-icons/cg";
import { FaBowlFood } from "react-icons/fa6";
import { GiProgression } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import Header from '../Components/Header';





function Landing() {

    return (
        

       <div>

        <Header/>


         <div className="bg-dark text-white min-vh-100">




            {/* HERO SECTION */}

            <section className="container py-5">

                <div className="row align-items-center min-vh-75">


                    {/* LEFT CONTENT */}

                    <div className="col-lg-6 py-5">

                        <p className="text-success fw-bold">
                            YOUR FITNESS JOURNEY STARTS HERE
                        </p>


                        <h1 className="display-3 fw-bold">

                            Build a Healthier,
                            <br />

                            Stronger
                            <span className="text-success">
                                {' '}You
                            </span>

                        </h1>


                        <p className="text-secondary fs-5 mt-4">

                            At FitZone, we believe fitness is not just
                            about looks, it's about a better life.
                            Join our community and achieve your goals
                            with expert guidance, modern facilities
                            and a supportive environment.

                        </p>


                        {/* BUTTONS */}

                        <div className="d-flex gap-3 mt-4 flex-wrap">

                            <Link
                                to="/login"
                                className="btn btn-success btn-lg rounded-pill px-4"
                            >
                                Get Started →
                            </Link>




                        </div>

                    </div>



                    {/* RIGHT IMAGE */}

                    <div className="col-lg-6 p-0">

                        <div className="position-relative">

                            <img
                                src="https://t3.ftcdn.net/jpg/17/33/86/88/360_F_1733868837_4yMOTVviVeJ3GKO67U9GQycaQsC9RW6k.jpg"
                                alt="Gym workout"
                                className="img-fluid w-100 rounded-4 shadow-lg"
                                style={{
                                    height: "500px",
                                    objectFit: "cover"
                                }}
                            />

                            {/* FLOATING TEXT */}

                            <div className="position-absolute bottom-0 end-0 p-4">

                                <h2 className="fw-bold fst-italic text-white">
                                    Stronger
                                    <br />
                                    Than
                                    <br />
                                    Yesterday
                                </h2>

                                <div
                                    className="bg-success rounded"
                                    style={{
                                        height: "4px",
                                        width: "120px"
                                    }}
                                >
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-light">
                <div className="container py-5">

                    <div className="row align-items-center g-5">

                        {/* Left Side */}
                        <div className="col-lg-6">
                            <span className="badge bg-success rounded-pill px-3 py-2">
                                ABOUT SMART GYM
                            </span>

                            <h2 className="display-5 fw-bold mt-3">
                                <span className="text-secondary" > Your Smart Partner for a</span>
                                <span className="text-success"> Healthier Lifestyle</span>
                            </h2>

                            <p className="text-secondary mt-4">
                                Smart Gym is a fitness and wellness platform designed to
                                help you stay active, organized and consistent with your
                                fitness journey.
                            </p>

                            <p className="text-secondary">
                                Explore workout routines, learn about healthy nutrition,
                                calculate your BMI and manage your personal fitness
                                information in one simple platform.
                            </p>

                            <div className="d-flex gap-4 mt-4">
                                <div>
                                    <h3 className="fw-bold text-success mb-1">50+</h3>
                                    <small className="text-secondary">
                                        Workout Plans
                                    </small>
                                </div>

                                <div>
                                    <h3 className="fw-bold text-success mb-1">20+</h3>
                                    <small className="text-secondary">
                                        Nutrition Plans
                                    </small>
                                </div>

                                <div>
                                    <h3 className="fw-bold text-success mb-1">24/7</h3>
                                    <small className="text-secondary">
                                        Access
                                    </small>
                                </div>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="col-lg-6">
                            <div className="row g-3">

                                <div className="col-6">
                                    <div className="bg-dark text-white rounded-4 p-4 h-100">
                                        <div className="fs-1 mb-3 "><CgGym />
                                        </div>
                                        <h5 className="fw-bold">
                                            Workout Plans
                                        </h5>
                                        <p className="text-secondary mb-0">
                                            Follow structured workouts based on your
                                            fitness level.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="bg-white shadow-sm rounded-4 p-4 h-100">
                                        <div className="fs-1 mb-3"><FaBowlFood color='black' />
                                        </div>
                                        <h5 className="fw-bold">
                                            Nutrition
                                        </h5>
                                        <p className="text-secondary mb-0">
                                            Learn simple and balanced nutrition habits.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="bg-white shadow-sm rounded-4 p-4 h-100">
                                        <div className="fs-1 mb-3"><GiProgression color='black' />
                                        </div>
                                        <h5 className="fw-bold">
                                            Track Progress
                                        </h5>
                                        <p className="text-secondary mb-0">
                                            Keep track of your fitness information and
                                            progress.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="bg-success text-white rounded-4 p-4 h-100">
                                        <div className="fs-1 mb-3"><FaHeartbeat color="#14532D" />
                                        </div>
                                        <h5 className="fw-bold">
                                            Healthy Habits
                                        </h5>
                                        <p className="text-white-50 mb-0">
                                            Build consistent habits for everyday wellness.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* FEATURES */}

            {/* SMART FITNESS SECTION */}

            <section className="bg-light text-dark py-5">

                <div className="container py-5">

                    {/* HEADING */}

                    <div className="text-center mb-5">

                        <span className="badge bg-success rounded-pill px-3 py-2 mb-3">
                            SMART FITNESS
                        </span>

                        <h2 className="display-5 fw-bold mb-3">
                            Everything You Need
                            <br />
                            <span className="text-success">
                                To Stay Strong
                            </span>
                        </h2>

                        <p className="text-secondary mx-auto" style={{ maxWidth: "600px" }}>
                            Simple and smart fitness tools to help you
                            stay active, track your progress and build
                            healthy habits.
                        </p>

                    </div>


                    {/* CARDS */}

                    <div className="row g-4">


                        {/* WORKOUT */}

                        <div className="col-lg-4 col-md-6">

                            <div className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">

                                <div className="bg-dark text-white p-4">



                                    <h3 className="fw-bold mt-4 mb-0">
                                        Workout Classes
                                    </h3>

                                </div>


                                <div className="card-body p-4">

                                    <p className="text-secondary">
                                        Explore different workout routines
                                        designed for different fitness levels
                                        and goals.
                                    </p>

                                    <div className="d-flex align-items-center mt-4">

                                        <Link
                                            to="/login"
                                            className="btn btn-success rounded-pill px-4"
                                        >
                                            Explore Workouts →
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* NUTRITION */}

                        <div className="col-lg-4 col-md-6">

                            <div className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">

                                <div className="bg-success text-dark p-4">



                                    <h3 className="fw-bold mt-4 mb-0">
                                        Smart Nutrition
                                    </h3>

                                </div>


                                <div className="card-body p-4">

                                    <p className="text-secondary">
                                        Discover balanced nutrition information
                                        that can support an active and healthy
                                        lifestyle.
                                    </p>

                                    <div className="d-flex align-items-center mt-4">

                                        <Link
                                            to="/login"
                                            className="btn btn-dark rounded-pill px-4"
                                        >
                                            Explore Nutrition →
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>


                        {/* BMI */}

                        <div className="col-lg-4 col-md-6 mx-md-auto">

                            <div className="card border-0 shadow-lg rounded-4 h-100 overflow-hidden">

                                <div className="bg-dark text-white p-4">



                                    <h3 className="fw-bold mt-4 mb-0">
                                        BMI Calculator
                                    </h3>

                                </div>


                                <div className="card-body p-4">

                                    <p className="text-secondary">
                                        Calculate your BMI using your height
                                        and weight as a general fitness
                                        screening tool.
                                    </p>

                                    <div className="d-flex align-items-center mt-4">

                                        <Link
                                            to="/login"
                                            className="btn btn-success rounded-pill px-4"
                                        >
                                            Calculate BMI →
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* BOTTOM MESSAGE */}

                    <div className="bg-dark text-white rounded-4 p-4 p-md-5 mt-5 shadow-lg">

                        <div className="row align-items-center">

                            <div className="col-md-8">

                                <span className="text-success fw-bold">
                                    YOUR JOURNEY STARTS HERE
                                </span>

                                <h3 className="fw-bold mt-2 mb-2">
                                    Train smarter. Stay consistent.
                                </h3>

                                <p className="text-secondary mb-0">
                                    Explore Smart Gym and make fitness
                                    part of your everyday routine.
                                </p>

                            </div>


                            <div className="col-md-4 text-md-end mt-4 mt-md-0">

                                <Link
                                    to="/login"
                                    className="btn btn-success btn-lg rounded-pill px-4"
                                >
                                    Join Smart Gym →
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FOOTER */}

            <footer className="bg-dark py-4">

                <div className="container text-center">

                    <h4 className="fw-bold">
                        Fit<span className="text-success">Zone</span>
                    </h4>

                    <p className="text-secondary mb-0">
                        Stronger Every Day
                    </p>

                    <small className="text-secondary">
                        © 2026 FitZone
                    </small>

                </div>

            </footer>

        </div>
       </div>
    )
}

export default Landing