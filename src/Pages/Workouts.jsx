import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import WorkoutCard from '../Components/WorkoutCard'
import { allWorkoutAPI } from '../Services/allAPI'
import DashboardNavbar from '../Components/DashboardNav'

function Workouts({ user, setCurrentUser }) {

    const [workouts, setWorkouts] = useState([])
    const [search, setSearch] = useState('')
    const [selectedDay, setSelectedDay] = useState('All')

    // GET ALL WORKOUTS FROM SERVER

    useEffect(() => {
        getAllWorkouts()
    }, [])

    const getAllWorkouts = async () => {
        try {
            const result = await allWorkoutAPI();
          //  console.log(result);
            

            console.log("Workout data:", result.data);
            console.log("User data:", user);

            setWorkouts(result.data);
        } catch (error) {
            console.log("Workout error:", error);
            toast.error("Unable to load workouts");
        }
    };
    // DAYS

    const days = [
        'All',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ]

    // FILTER WORKOUTS BASED ON USER LEVEL

    const filteredWorkouts = workouts.filter((item) => {
        const userLevel = user?.activityLevel;

        const levelMatch =item.level === userLevel ||item.level === 'All Levels';

        const searchMatch =(item.name || item.title || '').toLowerCase().includes(search.toLowerCase());

        const dayMatch =selectedDay === 'All' || item.day === selectedDay;

        return levelMatch && searchMatch && dayMatch;
    });



    return (
        <div>

            <DashboardNavbar
                setCurrentUser={setCurrentUser}
            />

            <div className="bg-dark min-vh-100">

                {/* HERO SECTION */}

                <section
                    className="text-white py-5"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1600&q=80')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed'
                    }}
                >
                    <div className="container py-5">

                        <span className="badge bg-success rounded-pill px-3 py-2">
                            SMART GYM
                        </span>

                        <h1 className="display-3 fw-bold mt-3">
                            Weekly
                            <span className="text-success">
                                {' '}Workout Plan
                            </span>
                        </h1>

                        <p className="lead col-lg-7">
                            Follow your workout plan day by day.
                            Watch exercise videos and check your
                            sets, repetitions, rest time and duration.
                        </p>

                        {user && (
                            <p className="mb-0">
                                Your Activity Level:{' '}
                                <span className="badge bg-success">
                                    {user.activityLevel}
                                </span>
                            </p>
                        )}

                    </div>
                </section>

                {/* WORKOUT PLAN */}

                <section className="bg-light py-5">

                    <div className="container">

                        <div className="text-center mb-5">

                            <span className="badge bg-success rounded-pill px-3 py-2">
                                WORKOUT PLAN
                            </span>

                            <h2 className="fw-bold mt-3">
                                Your Weekly Workout
                            </h2>

                            <p className="text-secondary">
                                Select a day to see your planned exercises.
                            </p>

                        </div>

                        {/* SEARCH */}

                        <div className="row mb-4">

                            <div className="col-md-6 mx-auto">

                                <input
                                    type="text"
                                    className="form-control form-control-lg rounded-pill"
                                    placeholder="Search workout..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />

                            </div>

                        </div>

                        {/* DAY BUTTONS */}

                        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">

                            {days.map((day) => (

                                <button
                                    key={day}
                                    type="button"
                                    className={
                                        selectedDay === day
                                            ? 'btn btn-success rounded-pill px-4'
                                            : 'btn btn-outline-dark rounded-pill px-4'
                                    }
                                    onClick={() => setSelectedDay(day)}
                                >
                                    {day}
                                </button>

                            ))}

                        </div>

                        {/* SELECTED DAY */}

                        {selectedDay !== 'All' && (

                            <div className="mb-4">

                                <h2 className="fw-bold">
                                    {selectedDay}
                                </h2>

                                <p className="text-secondary">
                                    Workout Plan
                                </p>

                            </div>

                        )}

                        {/* WORKOUT CARDS */}

                        <div className="row g-4">

                            {filteredWorkouts.length > 0 ? (

                                filteredWorkouts.map((workout) => (

                                    <div
                                        className="col-lg-4 col-md-6"
                                        key={workout.id}
                                    >
                                        <WorkoutCard workout={workout} />
                                    </div>

                                ))

                            ) : (

                                <div className="col-12">

                                    <div className="text-center py-5">

                                        <h4>No matching workouts found</h4>

                                        <p className="text-secondary">
                                            No workouts are available for your activity level
                                            and selected filters. Please check back later.
                                        </p>

                                    </div>

                                </div>

                            )}

                        </div>
                        {/* BACK TO DASHBOARD */}

                        <div className="text-center mt-5">

                            <Link
                                to="/dashboard"
                                className="btn btn-dark btn-lg rounded-pill px-5"
                            >
                                ← Back to Dashboard
                            </Link>

                        </div>

                    </div>

                </section>

                {/* WORKOUT SAFETY */}

                <section className="bg-dark text-white py-5">

                    <div className="container">

                        <div className="alert alert-warning rounded-4 mb-0">

                            <h5 className="fw-bold">
                                 Workout Safety
                            </h5>

                            <p className="mb-0">
                                Perform exercises at a comfortable pace
                                and use proper technique. Stop if you
                                experience pain, dizziness or feel unwell.
                                If you are unsure about an exercise, ask
                                a qualified fitness professional for guidance.
                            </p>

                        </div>

                    </div>

                </section>

            </div>

        </div>
    )
}

export default Workouts