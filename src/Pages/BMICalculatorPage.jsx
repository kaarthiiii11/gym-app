import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { viewUserAPI, updateUserAPI } from '../Services/allAPI'
import DashboardNavbar from '../Components/DashboardNav'

function BMICalculatorPage({ user, setCurrentUser }) {

    const [gender, setGender] = useState('')
    const [age, setAge] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')

    const [bmi, setBmi] = useState(null)
    const [bmiStatus, setBmiStatus] = useState('')
    const [bmiMessage, setBmiMessage] = useState('')

    const navigate = useNavigate()

    // GET REGISTERED USER DATA
    
useEffect(() => {

    const getUserData = async () => {

        if (!user || !user.id) {
            return
        }

        try {

            const response = await viewUserAPI(user.id)
            const currentUser = response.data

            setGender(currentUser.gender || '')
            setAge(currentUser.age || '')
            setHeight(currentUser.height || '')
            setWeight(currentUser.weight || '')

        } catch (error) {

            console.log('Error getting user data:', error)

        }

    }

    getUserData()

}, [user])
    // CALCULATE BMI
    const calculateBMI = async () => {

        if (!height || !weight) {
            console.log('Height and weight are required')
            return
        }

        const heightValue = Number(height)
        const weightValue = Number(weight)

        if (heightValue <= 0 || weightValue <= 0) {
            console.log('Please enter valid height and weight')
            return
        }

        // HEIGHT TO METERS
        const heightInMeter = heightValue / 100

        const result = weightValue / (heightInMeter * heightInMeter)

        const finalBMI = Number(result.toFixed(1))

        let status = ''
        let message = ''

        // BMI CATEGORY
        if (finalBMI < 18.5) {

            status = 'Underweight'

            message =
                'Your BMI is below the general adult reference range. Focus on balanced nutrition and healthy habits.'

        } else if (finalBMI >= 18.5 && finalBMI <= 24.9) {

            status = 'Normal Weight'

            message =
                'Your BMI is within the general adult reference range. Maintain balanced nutrition and regular physical activity.'

        } else if (finalBMI >= 25 && finalBMI <= 29.9) {

            status = 'Overweight'

            message =
                'Your BMI is above the general adult reference range. Focus on balanced nutrition and healthy lifestyle habits.'

        } else {

            status = 'Obese'

            message =
                'Your BMI is in the higher adult reference range. Consider focusing on balanced nutrition and regular physical activity.'

        }

        // SHOW RESULT
        setBmi(finalBMI)
        setBmiStatus(status)
        setBmiMessage(message)

        // CHECK LOGGED-IN USER
        if (!user || !user.id) {
            console.log('User not found. Please login first.')
            return
        }

        try {

            // GET CURRENT USER
            const userResponse = await viewUserAPI(user.id)
            const currentUser = userResponse.data

            // UPDATED USER
            const updatedUser = {
                ...currentUser,
                gender: gender,
                age: Number(age),
                height: heightValue,
                weight: weightValue,
                bmi: finalBMI,
                bmiCategory: status
            }

            // SAVE TO SERVER
            const response = await updateUserAPI(user.id, updatedUser)

            if (response.status === 200) {
                console.log('BMI saved successfully')
            }

        } catch (error) {

            console.log('Error saving BMI:', error)

        }

    }

    return (

        <div>

            <DashboardNavbar setCurrentUser={setCurrentUser} />

            <div className="bg-light min-vh-100">

                {/* MAIN BMI SECTION */}
                <section className="py-5">

                    <div className="container py-4">

                        <div className="row align-items-center g-5">

                            {/* LEFT SIDE */}
                            <div className="col-lg-6">

                                <span className="badge bg-success px-3 py-2 rounded-pill">
                                    Healthy Lifestyle
                                </span>

                                <h1 className="display-4 fw-bold mt-4">
                                    BMI
                                    <span className="text-success">
                                        {' '}Calculator
                                    </span>
                                </h1>

                                <p className="lead text-secondary mt-3">
                                    Calculate your Body Mass Index using
                                    your height and weight. Your registered
                                    details are automatically displayed.
                                </p>

                                {/* INFORMATION CARDS */}
                                <div className="row g-3 mt-4">

                                    {/* HEALTHY TIPS */}
                                    <div className="col-12 col-sm-6">

                                        <div className="card border-0 shadow-sm rounded-4 h-100">

                                            <div className="card-body p-4">

                                              

                                                <h5 className="fw-bold">
                                                    Healthy Tips
                                                </h5>

                                                <p className="text-secondary mb-0">
                                                    Focus on balanced nutrition,
                                                    regular movement and adequate
                                                    rest.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                    {/* WELLNESS */}
                                    <div className="col-12 col-sm-6">

                                        <div className="card border-0 shadow-sm rounded-4 h-100">

                                            <div className="card-body p-4">

                                                

                                                <h5 className="fw-bold">
                                                    Fitness
                                                </h5>

                                                <p className="text-secondary mb-0">
                                                    Understand your BMI and
                                                    follow healthy lifestyle
                                                    habits.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* RIGHT SIDE */}
                            <div className="col-lg-6">

                                <div
                                    className="card border-0 shadow-lg rounded-4 overflow-hidden mx-auto"
                                    style={{ maxWidth: '500px' }}
                                >

                                    {/* HEADER */}
                                    <div className="bg-dark text-white p-3">

                                        <h4 className="text-center fw-bold mb-0">
                                            Calculate Your BMI
                                        </h4>

                                    </div>

                                    <div className="card-body p-4">

                                        {/* GENDER */}
                                        <div className="mb-3">

                                            <label className="form-label fw-semibold">
                                                Gender
                                            </label>

                                            <div className="row g-2">

                                                {/* MALE */}
                                                <div className="col-6">

                                                    <button
                                                        type="button"
                                                        className={
                                                            gender === 'Male'
                                                                ? 'btn btn-success w-100 py-2 rounded-3'
                                                                : 'btn btn-outline-secondary w-100 py-2 rounded-3'
                                                        }
                                                        onClick={() => setGender('Male')}
                                                    >
                                                        Male
                                                    </button>

                                                </div>

                                                {/* FEMALE */}
                                                <div className="col-6">

                                                    <button
                                                        type="button"
                                                        className={
                                                            gender === 'Female'
                                                                ? 'btn btn-success w-100 py-2 rounded-3'
                                                                : 'btn btn-outline-secondary w-100 py-2 rounded-3'
                                                        }
                                                        onClick={() => setGender('Female')}
                                                    >
                                                        Female
                                                    </button>

                                                </div>

                                            </div>

                                        </div>

                                        {/* AGE */}
                                        <div className="mb-3">

                                            <label className="form-label fw-semibold">
                                                Age
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control"
                                                value={age}
                                                onChange={(e) => setAge(e.target.value)}
                                                placeholder="Enter age"
                                                min="1"
                                            />

                                        </div>

                                        {/* HEIGHT */}
                                        <div className="mb-3">

                                            <label className="form-label fw-semibold">
                                                Height (cm)
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control"
                                                value={height}
                                                onChange={(e) => setHeight(e.target.value)}
                                                placeholder="Enter height"
                                                min="1"
                                            />

                                            <small className="text-secondary">
                                                Registered height is displayed automatically.
                                            </small>

                                        </div>

                                        {/* WEIGHT */}
                                        <div className="mb-3">

                                            <label className="form-label fw-semibold">
                                                Weight (kg)
                                            </label>

                                            <input
                                                type="number"
                                                className="form-control"
                                                value={weight}
                                                onChange={(e) => setWeight(e.target.value)}
                                                placeholder="Enter weight"
                                                min="1"
                                                step="0.1"
                                            />

                                            <small className="text-secondary">
                                                Registered weight is displayed automatically.
                                            </small>

                                        </div>

                                        {/* CALCULATE BUTTON */}
                                        <div className="d-grid">

                                            <button
                                                type="button"
                                                className="btn btn-success rounded-3"
                                                onClick={calculateBMI}
                                            >
                                                Calculate BMI
                                            </button>

                                        </div>

                                        {/* BMI RESULT */}
                                        {bmi !== null && (

                                            <div className="mt-3">

                                                {/* RESULT */}
                                                <div className="bg-dark text-white rounded-4 p-3 text-center">

                                                    <p className="text-secondary mb-1">
                                                        YOUR BMI
                                                    </p>

                                                    <h1 className="display-5 fw-bold text-success mb-1">
                                                        {bmi}
                                                    </h1>

                                                    <h6 className="fw-bold">
                                                        {bmiStatus}
                                                    </h6>

                                                    <p className="mb-0 small">
                                                        {bmiMessage}
                                                    </p>

                                                </div>

                                                {/* NOTE */}
                                                <div className="alert alert-info mt-3 rounded-4 small">

                                                    <strong>
                                                        Note:
                                                    </strong>

                                                    <br />

                                                    BMI is a general screening
                                                    measure and does not by itself
                                                    determine overall health.

                                                </div>

                                                {/* VIEW NUTRITION PLAN */}
                                                <button
                                                    type="button"
                                                    className="btn btn-success w-100 rounded-pill"
                                                    onClick={() => navigate('/diet-plan')}
                                                >
                                                    View Nutrition Plan →
                                                </button>

                                            </div>

                                        )}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* BMI INFORMATION */}
                <section className="bg-dark text-white py-5">

                    <div className="container">

                        <div className="text-center mb-5">

                            <span className="badge bg-success rounded-pill px-3 py-2">
                                BMI INFORMATION
                            </span>

                            <h2 className="fw-bold mt-3">
                                Understanding BMI
                            </h2>

                            <p
                                className="text-secondary mx-auto"
                                style={{ maxWidth: '650px' }}
                            >
                                BMI uses height and weight to provide a
                                general screening measurement. It should be
                                considered together with other aspects of health.
                            </p>

                        </div>

                        <div className="row g-4">

                            {/* HEIGHT */}
                            <div className="col-12 col-sm-6 col-lg-3">

                                <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">

                                   

                                    <h5 className="fw-bold">
                                        Height
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Your registered height is
                                        automatically displayed.
                                    </p>

                                </div>

                            </div>

                            {/* WEIGHT */}
                            <div className="col-12 col-sm-6 col-lg-3">

                                <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">

                                  

                                    <h5 className="fw-bold">
                                        Weight
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Your registered weight is
                                        automatically displayed.
                                    </p>

                                </div>

                            </div>

                            {/* AGE */}
                            <div className="col-12 col-sm-6 col-lg-3">

                                <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">

                                    <div className="card-body">

                                     

                                        <h5 className="fw-bold">
                                            Age
                                        </h5>

                                        <p className="text-secondary mb-0">
                                            Your registered age is
                                            automatically displayed.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* WELLNESS */}
                            <div className="col-12 col-sm-6 col-lg-3">

                                <div className="card border-0 shadow-sm rounded-4 text-center p-4 h-100">

                                    

                                    <h5 className="fw-bold">
                                        Wellness
                                    </h5>

                                    <p className="text-secondary mb-0">
                                        Use BMI as one general
                                        screening measure.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

                {/* BOTTOM CTA */}
                <section className="bg-success py-5">

                    <div className="container text-center">

                        <h2 className="text-white fw-bold">
                            Continue Your Wellness Journey
                        </h2>

                        <p className="text-white mb-4">
                            Explore your nutrition and workout sections.
                        </p>

                        <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">

                            <Link
                                to="/nutrition"
                                className="btn btn-light rounded-pill px-4"
                            >
                                ← Nutrition
                            </Link>

                            <Link
                                to="/workouts"
                                className="btn btn-dark rounded-pill px-4"
                            >
                                Explore Workouts →
                            </Link>

                        </div>

                    </div>

                </section>

            </div>

        </div>

    )
}

export default BMICalculatorPage