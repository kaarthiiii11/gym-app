import { Link } from 'react-router-dom'

function WorkoutCard({ workout }) {

    return (

        <div className="card border-0 shadow h-100 rounded-4 overflow-hidden">

            {/* VIDEO */}

            <div className="ratio ratio-16x9">

                {workout.video ? (

                    <iframe src={workout.video} title={workout.name} allowFullScreen></iframe>

                ) : (

                    <div className="bg-dark text-white d-flex align-items-center justify-content-center">

                        <h4>
                            Rest Day
                        </h4>

                    </div>

                )}

            </div>


            {/* CARD BODY */}

            <div className="card-body p-4">

                {/* CATEGORY AND LEVEL */}

                <div className="d-flex justify-content-between mb-3">

                    <span className="badge bg-success">
                        {workout.category}
                    </span>

                    <span className="badge bg-dark">
                        {workout.level}
                    </span>

                </div>


                {/* DAY */}

                <p className="text-success fw-bold mb-1">
                    {workout.day}
                </p>


                {/* NAME */}

                <h4 className="fw-bold">
                    {workout.name}
                </h4>


                {/* INSTRUCTIONS */}

                <p className="text-secondary">
                    {workout.instructions}
                </p>


                {/* SETS REPS REST */}

                <div className="row g-2 mt-3">


                    {/* SETS */}

                    <div className="col-4">

                        <div className="bg-light rounded-3 text-center p-2">

                            <small className="text-secondary d-block">
                                Sets
                            </small>

                            <strong>
                                {workout.sets}
                            </strong>

                        </div>

                    </div>


                    {/* REPS */}

                    <div className="col-4">

                        <div className="bg-light rounded-3 text-center p-2">

                            <small className="text-secondary d-block">
                                Reps
                            </small>

                            <strong>
                                {workout.reps}
                            </strong>

                        </div>

                    </div>


                    {/* REST */}

                    <div className="col-4">

                        <div className="bg-light rounded-3 text-center p-2">

                            <small className="text-secondary d-block">
                                Rest
                            </small>

                            <strong className="small">
                                {workout.rest || workout.restTime || "Not specified"}
                            </strong>

                        </div>

                    </div>

                </div>


                {/* DURATION */}

                <div className="alert alert-success mt-3">

                    <strong>
                        Duration:
                    </strong>

                    {' '}

                    {workout.duration}

                </div>


                {/* DETAILS BUTTON */}

                <Link to={`/workout/${workout.id}`} className="btn btn-dark w-100 rounded-pill">

                    View Workout Details →

                </Link>

            </div>

        </div>

    )

}

export default WorkoutCard