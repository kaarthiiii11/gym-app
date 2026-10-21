import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { LuTimerReset } from "react-icons/lu"
import { viewWorkoutAPI } from '../Services/allAPI'
import { GiDuration } from "react-icons/gi"
import { HiQuestionMarkCircle } from "react-icons/hi"
import { FaStar } from "react-icons/fa"

function WorkoutDetails() {

    const { id } = useParams()
    const [workout, setWorkout] = useState(null)

    useEffect(() => {
        getWorkout()
    }, [id])

    const getWorkout = async () => {
        try {
            const result = await viewWorkoutAPI(id)
            setWorkout(result.data)
        } catch (error) {
            console.log(error)
            toast.error('Unable to load workout')
        }
    }

    if (!workout) {
        return (
            <div className="min-vh-100 bg-dark text-white d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <div className="spinner-border text-success"></div>
                    <p className="mt-3">Loading workout...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-dark min-vh-100">

            <section className="bg-black text-white py-5">
                <div className="container py-4">

                    <Link to="/workouts" className="btn btn-outline-light rounded-pill mb-4">
                        ← Back to Workouts
                    </Link>

                    <div className="row g-5 align-items-center">

                        <div className="col-lg-5">

                            <span className="badge bg-success rounded-pill px-3 py-2">
                                {workout.day}
                            </span>

                            <h1 className="display-4 fw-bold mt-3">
                                {workout.name}
                            </h1>

                            <p className="lead text-secondary">
                                {workout.instructions}
                            </p>

                            <span className="badge bg-secondary">
                                {workout.category}
                            </span>

                            <span className="badge bg-success ms-2">
                                {workout.level}
                            </span>

                        </div>

                        <div className="col-lg-7">
                            {workout.video ? (
                                <div className="ratio ratio-16x9 rounded-4 overflow-hidden">
                                    <iframe
                                        src={workout.video}
                                        title={workout.name}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div className="bg-secondary rounded-4 p-5 text-center text-white">
                                    <h2> Rest Day</h2>
                                    <p>Take time to rest and recover.</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>

            <section className="bg-light py-5">
                <div className="container">

                    <h2 className="text-center fw-bold mb-5">
                        Workout Information
                    </h2>

                    <div className="row g-4">

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">
                                <h6 className="text-secondary">SETS</h6>
                                <h2 className="fw-bold">{workout.sets}</h2>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">
                                <h6 className="text-secondary">REPETITIONS</h6>
                                <h2 className="fw-bold">{workout.reps}</h2>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">
                                <div className="fs-1">
                                    <LuTimerReset />
                                </div>
                                <h6 className="text-secondary">REST</h6>
                                <h5 className="fw-bold">
                                    {workout.rest || workout.restTime || "Not specified"}
                                </h5>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">
                                <div className="fs-1">
                                    <GiDuration />
                                </div>
                                <h6 className="text-secondary">DURATION</h6>
                                <h5 className="fw-bold">{workout.duration}</h5>
                            </div>
                        </div>

                    </div>

                    <div className="row g-4 mt-4">

                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-body p-4">

                                    <h4 className="fw-bold">
                                        <HiQuestionMarkCircle />
                                        <span className="ms-2">How To Do It</span>
                                    </h4>

                                    <hr />

                                    <p className="text-secondary">
                                        {workout.instructions}
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="card border-0 shadow-sm rounded-4 h-100">
                                <div className="card-body p-4">

                                    <h4 className="fw-bold">
                                        <FaStar color="yellow" />
                                        <span className="ms-2">Benefits</span>
                                    </h4>

                                    <hr />

                                    <p className="text-secondary">
                                        {workout.benefits || 'No benefits added yet.'}
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center mt-5">
                        <Link
                            to="/workouts"
                            className="btn btn-success rounded-pill px-5"
                        >
                            ← Back to Workout Plan
                        </Link>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default WorkoutDetails