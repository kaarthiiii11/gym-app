import { useEffect, useState } from "react";

import {allDietPlansAPI,addDietPlanAPI,updateDietPlanAPI,deleteDietPlanAPI} from "../Services/allAPI";


function DietPlanManagement() {

    const [dietPlans, setDietPlans] = useState([]);

    const [dietData, setDietData] = useState({
        title: "",
        goal: "",
        day: "",
        breakfast: "",
        lunch: "",
        snack: "",
        dinner: ""
    });

    const [editId, setEditId] = useState(null);

    const [message, setMessage] = useState("");

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];


    //  GET ALL DIET PLANS

    useEffect(() => {
        getDietPlans();
    }, []);


    async function getDietPlans() {

        try {
            const result = await allDietPlansAPI();
            setDietPlans(result.data);
        }

        catch (error) {
            console.log(error);
            setMessage("Failed to load diet plans");
        }

    }




    function handleChange(e) {

        setDietData({  ...dietData,[e.target.name]: e.target.value});

    }

    // ADD

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            if (editId !== null) {

                await updateDietPlanAPI(editId,dietData);

                setMessage("Diet plan updated successfully");

            }

            else {

                await addDietPlanAPI(dietData);

                setMessage("Diet plan added successfully");

            }

            resetForm();
            getDietPlans();

        }

        catch (error) {

            console.log(error);

            setMessage("Failed to save diet plan");

        }

    }


    // EDIT

    function handleEdit(diet) {

        setDietData({
            title: diet.title || "",
            goal: diet.goal || "",
            day: diet.day || "",
            breakfast: diet.breakfast || "",
            lunch: diet.lunch || "",
            snack: diet.snack || "",
            dinner: diet.dinner || ""
        });


        setEditId(diet.id);
        setMessage("");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    // DELETE

    async function handleDelete(id) {

        if (
            window.confirm("Do you want to delete this diet plan?")
        ) {

            try {

                await deleteDietPlanAPI(id);

                setMessage("Diet plan deleted successfully");

                getDietPlans();

            }

            catch (error) {

                console.log(error);

                setMessage("Failed to delete diet plan");

            }

        }

    }


    // RESET

    function resetForm() {
        setDietData({
            title: "",
            goal: "",
            day: "",
            breakfast: "",
            lunch: "",
            snack: "",
            dinner: ""

        });

        setEditId(null);

    }


    // RETURN

    return (

        <div className="container py-4">


            {/* PAGE TITLE */}

            <h2 className="text-center fw-bold mb-4">

                Diet Plan Management

            </h2>


            {/* MESSAGE */}

            {message && (

                <div className="alert alert-info">

                    {message}

                </div>

            )}


            {/*  FORM */}

            <form
                onSubmit={handleSubmit}
                className="card p-4 mb-5 shadow-sm"
            >


                <h4 className="mb-4">

                    {editId !== null
                        ? "Edit Diet Plan"
                        : "Add Diet Plan"}

                </h4>


                {/* PLAN TITLE */}

                <div className="mb-3">

                    <label className="form-label fw-semibold">

                        Plan Title

                    </label>


                    <input

                        type="text"

                        className="form-control"

                        name="title"

                        value={dietData.title}

                        onChange={handleChange}

                        placeholder="Eg: Normal Weight Weekly Plan"

                        required

                    />

                </div>


                {/* BMI CATEGORY + DAY */}

                <div className="row">


                    {/* BMI CATEGORY */}

                    <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                            BMI Category

                        </label>


                        <select

                            className="form-select"

                            name="goal"

                            value={dietData.goal}

                            onChange={handleChange}

                            required

                        >

                            <option value="">

                                Select BMI category

                            </option>


                            <option value="Underweight">

                                Underweight

                            </option>


                            <option value="Normal Weight">

                                Normal Weight

                            </option>


                            <option value="Overweight">

                                Overweight

                            </option>


                            <option value="Obese">

                                Obese

                            </option>

                        </select>

                    </div>


                    {/* DAY */}

                    <div className="col-md-6 mb-3">

                        <label className="form-label fw-semibold">

                            Day

                        </label>


                        <select

                            className="form-select"

                            name="day"

                            value={dietData.day}

                            onChange={handleChange}

                            required

                        >

                            <option value="">

                                Select day

                            </option>


                            {days.map((day) => (

                                <option
                                    key={day}
                                    value={day}
                                >

                                    {day}

                                </option>

                            ))}

                        </select>

                    </div>

                </div>


                {/* BREAKFAST */}

                <div className="mb-3">

                    <label className="form-label fw-semibold">

                        Breakfast

                    </label>


                    <textarea

                        className="form-control"

                        rows="3"

                        name="breakfast"

                        value={dietData.breakfast}

                        onChange={handleChange}

                        placeholder="Enter breakfast details"

                        required

                    />

                </div>


                {/* LUNCH */}

                <div className="mb-3">

                    <label className="form-label fw-semibold">

                        Lunch

                    </label>


                    <textarea

                        className="form-control"

                        rows="3"

                        name="lunch"

                        value={dietData.lunch}

                        onChange={handleChange}

                        placeholder="Enter lunch details"

                        required

                    />

                </div>


                {/* SNACK */}

                <div className="mb-3">

                    <label className="form-label fw-semibold">

                        Evening Snack

                    </label>


                    <textarea

                        className="form-control"

                        rows="3"

                        name="snack"

                        value={dietData.snack}

                        onChange={handleChange}

                        placeholder="Enter evening snack details"

                        required

                    />

                </div>


                {/* DINNER */}

                <div className="mb-3">

                    <label className="form-label fw-semibold">

                        Dinner

                    </label>


                    <textarea

                        className="form-control"

                        rows="3"

                        name="dinner"

                        value={dietData.dinner}

                        onChange={handleChange}

                        placeholder="Enter dinner details"

                        required

                    />

                </div>


                {/* BUTTONS */}

                <div className="d-flex gap-2">


                    <button

                        type="submit"

                        className="btn btn-success"

                    >

                        {editId !== null
                            ? "Update Diet Plan"
                            : "Add Diet Plan"}

                    </button>


                    {editId !== null && (

                        <button

                            type="button"

                            className="btn btn-secondary"

                            onClick={resetForm}

                        >

                            Cancel

                        </button>

                    )}

                </div>

            </form>


            {/* AVAILABLE DIET PLANS*/}

            <h4 className="mb-3">

                Available Diet Plans

            </h4>


            <div className="row">


                {dietPlans.map((diet) => (

                    <div

                        className="col-md-6 col-lg-4 mb-4"

                        key={diet.id}

                    >

                        <div className="card h-100 shadow-sm">


                            <div className="card-body">


                                {/* DAY */}

                                <span className="badge bg-success mb-2">

                                    {diet.day}

                                </span>


                                {/* TITLE */}

                                <h5 className="card-title fw-bold">

                                    {diet.title}

                                </h5>


                                {/* BMI */}

                                <p>

                                    <strong>
                                        BMI Category:
                                    </strong>{" "}

                                    {diet.goal}

                                </p>


                                <hr />


                                {/* BREAKFAST */}

                                <p>

                                    <strong>
                                        Breakfast:
                                    </strong>

                                    <br />

                                    {diet.breakfast}

                                </p>


                                {/* LUNCH */}

                                <p>

                                    <strong>
                                        Lunch:
                                    </strong>

                                    <br />

                                    {diet.lunch}

                                </p>


                                {/* SNACK */}

                                <p>

                                    <strong>
                                        Snack:
                                    </strong>

                                    <br />

                                    {diet.snack}

                                </p>


                                {/* DINNER */}

                                <p>

                                    <strong>
                                        Dinner:
                                    </strong>

                                    <br />

                                    {diet.dinner}

                                </p>


                                {/* BUTTONS */}

                                <div className="d-flex gap-2 mt-3">


                                    <button

                                        className="btn btn-warning btn-sm"

                                        onClick={() =>
                                            handleEdit(diet)
                                        }

                                    >

                                        Edit

                                    </button>


                                    <button

                                        className="btn btn-danger btn-sm"

                                        onClick={() =>
                                            handleDelete(diet.id)
                                        }

                                    >

                                        Delete

                                    </button>


                                </div>


                            </div>

                        </div>

                    </div>

                ))}

            </div>


            {/* NO DATA */}

            {dietPlans.length === 0 && (

                <p className="text-center text-muted">

                    No diet plans available.

                </p>

            )}

        </div>

    );

}


export default DietPlanManagement;