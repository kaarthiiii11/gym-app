import React from 'react'
import { Link } from 'react-router-dom'
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaAppleAlt } from "react-icons/fa";
import { GiFruitBowl } from "react-icons/gi";
import { FaDroplet } from "react-icons/fa6";
import { GiBroccoli } from "react-icons/gi";
import { RiZzzFill } from "react-icons/ri";
import DashboardNavbar from '../Components/DashboardNav';



function Nutrition({ setCurrentUser }) {

    return (

      <div>
        <DashboardNavbar setCurrentUser={setCurrentUser}/>
        
          <div className="bg-dark min-vh-100">

            {/*  HERO */}

            <section
                className="text-white py-5"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >

                <div className="container py-5">

                    <div className="row align-items-center">

                        <div className="col-lg-8">

                            <span className="badge bg-success rounded-pill px-3 py-2 mb-3">
                                SMART GYM
                            </span>

                            <h1 className="display-4 fw-bold">
                                Nutrition &
                                <span className="text-success">
                                    {' '}Wellness
                                </span>
                            </h1>

                            <p className="lead text-light mt-3">
                                Understand your body and build healthy
                                nutrition habits with our simple fitness
                                tools and resources.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/*  MAIN CONTENT */}

            <section className="bg-light py-5">

                <div className="container">

                    {/* TITLE */}

                    <div className="text-center mb-5">

                        <span className="badge bg-success rounded-pill px-3 py-2">
                            HEALTH & WELLNESS
                        </span>

                        <h2 className="fw-bold mt-3">
                            Take Care of Your Health
                        </h2>

                        <p className="text-secondary mx-auto"
                            style={{ maxWidth: "650px" }}
                        >
                            Use our wellness tools to learn more about
                            your body and explore general nutrition
                            information.
                        </p>

                    </div>


                    {/*  CARDS */}

                    <div className="row g-4 justify-content-center">


                        {/* BMI CARD */}

                        <div className="col-lg-5 col-md-6">

                            <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">

                                <div className="bg-dark text-white text-center py-4">

                                    <div className="display-4">
                                        <GiWeightLiftingUp />

                                    </div>

                                    <h3 className="fw-bold mt-2">
                                        BMI Calculator
                                    </h3>

                                </div>


                                <div className="card-body p-4 p-lg-5">

                                    <h4 className="fw-bold">
                                        Check Your BMI
                                    </h4>

                                    <p className="text-secondary">
                                        Calculate your Body Mass Index
                                        using your height and weight.
                                        BMI is only a general screening
                                        measure and does not describe
                                        overall health by itself.
                                    </p>


                                    <div className="row text-center my-4">

                                        <div className="col-4">

                                            <div className="bg-light rounded-3 p-3">

                                                <div className="fw-bold text-success">
                                                    Height
                                                </div>

                                                <small className="text-secondary">
                                                    Enter your height
                                                </small>

                                            </div>

                                        </div>


                                        <div className="col-4">

                                            <div className="bg-light rounded-3 p-3">

                                                <div className="fw-bold text-success">
                                                    Weight
                                                </div>

                                                <small className="text-secondary">
                                                    Enter your weight
                                                </small>

                                            </div>

                                        </div>


                                        <div className="col-4">

                                            <div className="bg-light rounded-3 p-3">

                                                <div className="fw-bold text-success">
                                                    BMI
                                                </div>

                                                <small className="text-secondary">
                                                    View result
                                                </small>

                                            </div>

                                        </div>

                                    </div>


                                    <Link
                                        to="/bmi"
                                        className="btn btn-dark w-100 rounded-pill py-2"
                                    >
                                        Calculate BMI →
                                    </Link>

                                </div>

                            </div>

                        </div>


                        {/* DIET PLAN CARD */}

                        <div className="col-lg-5 col-md-6">

                            <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">

                                <div className="bg-success text-white text-center py-4">

                                    <div className="display-4">
                                        <FaAppleAlt />

                                    </div>

                                    <h3 className="fw-bold mt-2">
                                        Diet Plan
                                    </h3>

                                </div>


                                <div className="card-body p-4 p-lg-5">

                                    <h4 className="fw-bold">
                                        Nutrition Guidance
                                    </h4>

                                    <p className="text-secondary">
                                        Explore general nutrition
                                        information and healthy meal
                                        ideas to support an active
                                        lifestyle.
                                    </p>


                                    <div className="row text-center my-4">

                                        <div className="col-4">

                                            <div className="bg-light rounded-3 p-3">

                                                <div className="fs-3">
                                                    <GiFruitBowl />

                                                </div>

                                                <small className="text-secondary">
                                                    Balanced
                                                </small>

                                            </div>

                                        </div>


                                        <div className="col-4">

                                            <div className="bg-light rounded-3 p-3">

                                                <div className="fs-3">
                                                    <FaDroplet />

                                                </div>

                                                <small className="text-secondary">
                                                    Hydration
                                                </small>

                                            </div>

                                        </div>


                                        <div className="col-4">

                                            <div className="bg-light rounded-3 p-3">

                                                <div className="fs-3">
                                                    <GiBroccoli />

                                                </div>

                                                <small className="text-secondary">
                                                    Nutrients
                                                </small>

                                            </div>

                                        </div>

                                    </div>


                                    <Link
                                        to="/diet-plan"
                                        className="btn btn-success w-100 rounded-pill py-2"
                                    >
                                        View Diet Plan →
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/*  WELLNESS FEATURES  */}

            <section className="bg-dark text-white py-5">

                <div className="container">

                    <div className="text-center mb-5">

                        <span className="badge bg-success rounded-pill px-3 py-2">
                            WELLNESS
                        </span>

                        <h2 className="fw-bold mt-3">
                            Build Healthy Habits
                        </h2>

                    </div>


                    <div className="row g-4">


                        <div className="col-md-4">

                            <div className="border border-secondary rounded-4 p-4 h-100 text-center">

                                <div className="display-5 mb-3">
                                    <FaDroplet />
                                </div>

                                <h5 className="fw-bold">
                                    Stay Hydrated
                                </h5>

                                <p className="text-secondary mb-0">
                                    Drink water regularly throughout
                                    the day and pay attention to your
                                    body's thirst signals.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="border border-secondary rounded-4 p-4 h-100 text-center">

                                <div className="display-5 mb-3">
                                    <GiBroccoli />
                                </div>

                                <h5 className="fw-bold">
                                    Balanced Nutrition
                                </h5>

                                <p className="text-secondary mb-0">
                                    Include a variety of foods to get
                                    different nutrients your body needs.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="border border-secondary rounded-4 p-4 h-100 text-center">

                                <div className="display-5 mb-3">
                                    <RiZzzFill />

                                </div>

                                <h5 className="fw-bold">
                                    Rest & Recovery
                                </h5>

                                <p className="text-secondary mb-0">
                                    Give your body enough time for rest
                                    and recovery alongside physical
                                    activity.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* BOTTOM CTA */}

            <section className="bg-success text-white py-5">

                <div className="container text-center py-3">

                    <h2 className="fw-bold">
                        Your Health, Your Journey
                    </h2>

                    <p className="mb-4">
                        Combine regular movement, balanced nutrition
                        and adequate rest.
                    </p>

                    <Link
                        to="/workouts"
                        className="btn btn-light rounded-pill px-5"
                    >
                        Explore Workouts
                    </Link>

                </div>

            </section>

        </div>
      </div>

    )
}

export default Nutrition