import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Dashboard from './Pages/Dashboard'
import Workouts from './Pages/Workouts'
import WorkoutDetails from './Pages/WorkoutDetails'
import Nutrition from './Pages/Nutrition'
import BMICalculatorPage from './Pages/BMICalculatorPage'
import DietPlan from './Pages/DietPlan'
import Pnf from './Pages/Pnf'
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLogin from './Pages/AdminLogin';
import { ToastContainer } from 'react-toastify'


function App() {

    // CURRENT LOGGED-IN USER

    const [currentUser, setCurrentUser] = useState(null)


    return (

        <>


            <Routes>


                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login setCurrentUser={setCurrentUser} />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard user={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/workouts" element={ <Workouts user={currentUser} setCurrentUser={setCurrentUser}/>}/>
                <Route path="/workout/:id" element={<WorkoutDetails />} />
                <Route path="/nutrition" element={<Nutrition setCurrentUser={setCurrentUser} />} />
                <Route path="/bmi" element={<BMICalculatorPage user={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/diet-plan" element={<DietPlan user={currentUser} setCurrentUser={setCurrentUser} />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="*" element={<Pnf />} />

            </Routes>


            <ToastContainer position="top-center" autoClose={3000} />

        </>
    )
}


export default App