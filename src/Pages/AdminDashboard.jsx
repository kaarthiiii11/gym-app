import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Components/AdminNavbar';
import UsersList from '../Components/UsersList';
import WorkoutManagement from '../Components/WorkoutManagement';
import DietPlanManagement from '../Components/DietPlanManagement';
import { allUsersAPI,allWorkoutAPI,allDietPlansAPI } from '../Services/allAPI';


function AdminDashboard() {
    const [section, setSection] = useState('dashboard');
    const [users, setUsers] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [dietPlans, setDietPlans] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const navigate = useNavigate();

  async function loadData() {
    setLoading(true);
    setError('');

    try {
        const userResult = await allUsersAPI();
        const workoutResult = await allWorkoutAPI();
        const dietResult = await allDietPlansAPI();

        setUsers(userResult.data);
        setWorkouts(workoutResult.data);
        setDietPlans(dietResult.data);

    } catch (error) {
        console.error(error);
        setError(
            'Unable to connect to JSON Server. Please start the server on port 5000.'
        );
    } finally {
        setLoading(false);
    }
}

    useEffect(() => {
        if (sessionStorage.getItem('adminLogin') !== 'true') {
            navigate('/admin-login');
            return;
        }

        loadData();
    }, []);

    function logout() {
        sessionStorage.removeItem('adminLogin');
        navigate('/admin-login');
    }

    return (
        <div className="admin-shell min-vh-100">
            <AdminNavbar
                section={section}
                setSection={setSection}
                logout={logout}
            />

            <main className="container py-5">
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                    <div>
                        <p className="text-success fw-bold mb-1">
                            SMART GYM ADMIN
                        </p>

                        <h2 className="fw-bold">
                            {section === 'dashboard' && 'Admin Dashboard'}
                            {section === 'users' && 'User Management'}
                            {section === 'workouts' && 'Workout Management'}
                            {section === 'diets' && 'Diet Plan Management'}
                        </h2>

                        <p className="text-secondary">
                            Manage users, workouts and diet plans.
                        </p>
                    </div>

                    
                </div>

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-success"></div>
                        <p className="mt-3">Loading data...</p>
                    </div>
                ) : (
                    <>
                        {section === 'dashboard' && (
                            <>
                                <div className="row g-4 mb-4">
                                    <div className="col-md-4">
                                        <div className="admin-stat-card">
                                            <h6>Registered Users</h6>
                                            <h2>{users.length}</h2>
                                            <button
                                                className="btn btn-outline-success"
                                                onClick={() => setSection('users')}
                                            >
                                                View Users
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="admin-stat-card">
                                            <h6>Total Workouts</h6>
                                            <h2>{workouts.length}</h2>
                                            <button
                                                className="btn btn-outline-success"
                                                onClick={() => setSection('workouts')}
                                            >
                                                Manage Workouts
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="admin-stat-card">
                                            <h6>Total Diet Plans</h6>
                                            <h2>{dietPlans.length}</h2>
                                            <button
                                                className="btn btn-outline-success"
                                                onClick={() => setSection('diets')}
                                            >
                                                Manage Diet Plans
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="admin-welcome p-4 p-md-5">
                                    <span className="badge bg-success mb-3">
                                        ADMIN CONTROL CENTRE
                                    </span>

                                    <h3 className="fw-bold">
                                        Welcome to Smart Gym
                                    </h3>

                                    <p className="text-secondary">
                                        Manage registered members and create
                                        fitness plans from one place.
                                    </p>

                                    <div className="d-flex flex-wrap gap-2">
                                        <button
                                            className="btn btn-dark"
                                            onClick={() => setSection('users')}
                                        >
                                            Manage Users
                                        </button>

                                        <button
                                            className="btn btn-success"
                                            onClick={() => setSection('workouts')}
                                        >
                                            Add Workout
                                        </button>

                                        <button
                                            className="btn btn-warning"
                                            onClick={() => setSection('diets')}
                                        >
                                            Add Diet Plan
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {section === 'users' && (
                            <UsersList
                                users={users}
                                setUsers={setUsers}
                            />
                        )}

                        {section === 'workouts' && (
                            <WorkoutManagement
                                workouts={workouts}
                                setWorkouts={setWorkouts}
                            />
                        )}

                        {section === 'diets' && (
                            <DietPlanManagement
                                users={users}
                                dietPlans={dietPlans}
                                setDietPlans={setDietPlans}
                            />
                            
                        )}
                    </>
                )}
            </main>
        </div>
    );
}

export default AdminDashboard;