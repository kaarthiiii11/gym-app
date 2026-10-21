
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { viewUserAPI, downloadDietPlanAPI, allDietPlansAPI } from "../Services/allAPI";

import DashboardNavbar from "../Components/DashboardNav";

function DietPlan({ user, setCurrentUser }) {

    const [bmi, setBmi] = useState(null);
    const [bmiCategory, setBmiCategory] = useState("");
    const [dietPlans, setDietPlans] = useState([]);
    const [selectedDay, setSelectedDay] = useState("Monday");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const previewRef = useRef();

    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    //GET USER BMI
    useEffect(() => {

        const getUserData = async () => {

            if (!user?.id) {setLoading(false);setError("Please log in to view your diet plan.");
                return;
            }

            try {

                const response = await viewUserAPI(user.id);
                const currentUser = response.data;
                const userBMI = currentUser.bmi;
                const category = currentUser.bmiCategory;

                setBmi(userBMI ?? null);

                if (category) {
                    setBmiCategory(category);
                }
                else if (
                    userBMI !== null &&
                    userBMI !== undefined &&
                    userBMI !== ""
                ) {

                    if (Number(userBMI) < 18.5) {
                        setBmiCategory("Underweight");
                    }
                    else if (Number(userBMI) < 25) {
                        setBmiCategory("Normal Weight");
                    }
                    else if (Number(userBMI) < 30) {
                        setBmiCategory("Overweight");

                    }
                    else {

                        setBmiCategory("Obese");

                    }

                }

            }
            catch (error) {

                console.log("Error getting user BMI:",error);

                setError("Unable to load your BMI details.");

            }

        };

        getUserData();

    }, [user?.id]);


    //  GET DIET PLANS

    useEffect(() => {

        const getDietPlans = async () => {

            try {
                const response = await allDietPlansAPI();
                setDietPlans(response.data);

            }
            catch (error) {
                console.log("Error getting diet plans:",error);

                setError("Unable to load diet plans. Please check your server.");

            }
            finally {
                setLoading(false);
            }
        };

        getDietPlans();

    }, []);


    //  NORMALIZE CATEGORY

    const normalizeCategory = (value) => {

        if (!value) {
            return "";
        }

        const category =value.toString().trim().toLowerCase();

        if (
            category === "normal" ||
            category === "normal weight"
        ) {

            return "normal weight";

        }

        if (
            category === "obesity" ||
            category === "obese"
        ) {

            return "obese";

        }

        return category;

    };


    //  FILTER BY BMI

    const matchingDietPlans =
        dietPlans.filter((diet) => {

            return (normalizeCategory(diet.goal)===normalizeCategory(bmiCategory));

        });


    //  FILTER BY DAY

    const selectedDietPlans =matchingDietPlans.filter((diet) => {
                return (diet.day === selectedDay);

            }
        );


    // ALL 7 DAYS

    const weeklyDietPlans =days.map((day) => {
                return matchingDietPlans.find((diet) =>diet.day === day);

            })
            .filter(Boolean);


    //  DOWNLOAD PDF

    const handleDownload = async () => {

        try {

            const previewTag =previewRef.current;

            if (!previewTag) {
                console.log("PDF preview not found");

                return;

            }

            const canvas =await html2canvas(previewTag,{scale: 2,useCORS: true,backgroundColor: "#ffffff"});

            const previewIMG =canvas.toDataURL("image/png",1.0);

            await generatePDF(previewIMG);

        }
        catch (error) {

            console.log("Download error:",error);

        }

    };


    //  GENERATE PDF

    const generatePDF = async (dietImg) => {

        try {

            const pdf =new jsPDF("p","mm","a4");

            const pageWidth =
                pdf.internal.pageSize.getWidth();

            const pageHeight =
                pdf.internal.pageSize.getHeight();

            const img = new Image();

            img.src = dietImg;

            await new Promise((resolve) => {img.onload = resolve;}
            );

            const imgWidth =pageWidth;

            const imgHeight =(img.height *imgWidth) /img.width;

            let heightLeft =imgHeight;

            let position = 0;


            // FIRST PAGE

            pdf.addImage(dietImg,"PNG",0,position,imgWidth,imgHeight);

            heightLeft -= pageHeight;


            // ADDITIONAL PAGES

            while (heightLeft > 0) {

                position =position -pageHeight;
                pdf.addPage();
                pdf.addImage(dietImg,"PNG",0,position,imgWidth,imgHeight);
                heightLeft -= pageHeight;

            }


            // SAVE DOWNLOAD INFORMATION

            const downloadDetails = {

                bmi:bmi ||"Not calculated",

                bmiCategory:bmiCategory,

                plan:weeklyDietPlans

            };


            const result =await downloadDietPlanAPI(downloadDetails);

            if (result.status === 201) {
                const fileName =`${bmiCategory || "Diet"}-7-Day-Diet-Plan.pdf`;
                pdf.save(fileName);
            }

        }
        catch (error) {
            console.log("PDF error:",error);

        }

    };


    return (

        <div>

            <DashboardNavbar
                setCurrentUser={setCurrentUser}
            />

            <div className="bg-light min-vh-100">

                {/* HERO */}

                <section
                    className="bg-dark text-white py-5"
                >

                    <div className="container py-5">

                        <span
                            className="badge bg-success rounded-pill px-3 py-2"
                        >
                            SMART GYM
                        </span>

                        <h1
                            className="display-4 fw-bold mt-3"
                        >

                            Your{" "}

                            <span className="text-success">
                                Weekly Diet Plan
                            </span>

                        </h1>

                        <p
                            className="lead text-secondary mt-3"
                        >
                            Follow your personalized
                            diet plan day by day
                            based on your BMI category.
                        </p>

                        {bmiCategory && (

                            <p className="mb-0">

                                Your BMI Category:{" "}

                                <span className="badge bg-success">
                                    {bmiCategory}
                                </span>

                            </p>

                        )}

                    </div>

                </section>


                {/* BMI */}

                <section
                    className="bg-white py-4"
                >

                    <div className="container">

                        <div
                            className="row justify-content-center"
                        >

                            <div
                                className="col-12 col-md-8 col-lg-6"
                            >

                                <div
                                    className="border rounded-3 p-4 text-center shadow-sm"
                                >

                                    <small
                                        className="text-uppercase text-secondary"
                                    >
                                        Your BMI Category
                                    </small>

                                    <h3
                                        className="fw-bold mt-2 mb-0"
                                    >

                                        {
                                            bmiCategory ||
                                            "Not available"
                                        }

                                    </h3>

                                    {
                                        bmi !== null &&
                                        bmi !== undefined &&
                                        bmi !== "" && (

                                            <p
                                                className="text-success fw-semibold mt-2 mb-0"
                                            >
                                                BMI: {bmi}
                                            </p>

                                        )
                                    }

                                    {!bmiCategory && (

                                        <p
                                            className="text-danger mt-3 mb-0"
                                        >
                                            Please calculate
                                            your BMI first
                                            to see matching
                                            diet plans.
                                        </p>

                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* WEEKLY DIET */}

                <section
                    className="bg-light py-5"
                >

                    <div className="container">

                        <div
                            className="text-center mb-5"
                        >

                            <span
                                className="badge bg-dark rounded-pill px-3 py-2"
                            >
                                YOUR NUTRITION
                            </span>

                            <h2
                                className="fw-bold mt-3"
                            >
                                Weekly Diet Plan
                            </h2>

                            <p
                                className="text-secondary"
                            >
                                Select a day to see
                                your planned meals.
                            </p>

                        </div>


                        {/* DAY BUTTONS */}

                        <div
                            className="d-flex flex-wrap justify-content-center gap-2 mb-5"
                        >

                            {days.map((day) => (

                                <button
                                    key={day}
                                    type="button"
                                    className={
                                        selectedDay === day
                                            ?
                                            "btn btn-success rounded-pill px-4"
                                            :
                                            "btn btn-outline-dark rounded-pill px-4"
                                    }
                                    onClick={() =>
                                        setSelectedDay(day)
                                    }
                                >
                                    {day}
                                </button>

                            ))}

                        </div>


                        {/* SELECTED DAY */}

                        <div
                            className="text-center mb-4"
                        >

                            <h3 className="fw-bold">
                                {selectedDay}
                            </h3>

                            <p className="text-secondary">
                                Diet Plan
                            </p>

                        </div>


                        {/* LOADING */}

                        {loading && (

                            <div
                                className="text-center py-5"
                            >

                                <div
                                    className="spinner-border text-success"
                                ></div>

                                <p className="mt-3">
                                    Loading diet plans...
                                </p>

                            </div>

                        )}


                        {/* ERROR */}

                        {!loading &&
                            error && (

                                <div
                                    className="alert alert-danger text-center"
                                >
                                    {error}
                                </div>

                            )}


                        {/* NO BMI */}

                        {!loading &&
                            !error &&
                            !bmiCategory && (

                                <div
                                    className="alert alert-warning text-center"
                                >

                                    Your BMI category
                                    is not available.

                                    <br />

                                    Please calculate
                                    your BMI first.

                                </div>

                            )}


                        {/* NO PLAN */}

                        {!loading &&
                            !error &&
                            bmiCategory &&
                            selectedDietPlans.length === 0 && (

                                <div
                                    className="alert alert-info text-center"
                                >

                                    No diet plan is available
                                    for{" "}

                                    <strong>
                                        {selectedDay}
                                    </strong>

                                    {" "}yet.

                                </div>

                            )}


                        {/* SELECTED DAY CARD */}

                        <div
                            className="row g-4 justify-content-center"
                        >

                            {selectedDietPlans.map(
                                (diet) => (

                                    <div
                                        className="col-12 col-md-8 col-lg-6"
                                        key={diet.id}
                                    >

                                        <div
                                            className="card border shadow-sm rounded-3 h-100"
                                        >

                                            <div
                                                className="card-body p-4"
                                            >

                                                <span
                                                    className="badge bg-success mb-3"
                                                >
                                                    {diet.day}
                                                </span>

                                                <h4
                                                    className="fw-bold mb-3"
                                                >
                                                    {diet.title}
                                                </h4>

                                                <p className="mb-3">

                                                    <strong>
                                                        BMI Category:
                                                    </strong>{" "}

                                                    {diet.goal}

                                                </p>

                                                <hr />

                                                {/* BREAKFAST */}

                                                <div className="mb-4">

                                                    <h6 className="fw-bold">
                                                        Breakfast
                                                    </h6>

                                                    <p className="text-secondary mb-0">
                                                        {
                                                            diet.breakfast ||
                                                            "Not specified"
                                                        }
                                                    </p>

                                                </div>


                                                {/* LUNCH */}

                                                <div className="mb-4">

                                                    <h6 className="fw-bold">
                                                        Lunch
                                                    </h6>

                                                    <p className="text-secondary mb-0">
                                                        {
                                                            diet.lunch ||
                                                            "Not specified"
                                                        }
                                                    </p>

                                                </div>


                                                {/* SNACK */}

                                                <div className="mb-4">

                                                    <h6 className="fw-bold">
                                                        Evening Snack
                                                    </h6>

                                                    <p className="text-secondary mb-0">
                                                        {
                                                            diet.snack ||
                                                            "Not specified"
                                                        }
                                                    </p>

                                                </div>


                                                {/* DINNER */}

                                                <div className="mb-4">

                                                    <h6 className="fw-bold">
                                                        Dinner
                                                    </h6>

                                                    <p className="text-secondary mb-0">
                                                        {
                                                            diet.dinner ||
                                                            "Not specified"
                                                        }
                                                    </p>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                )
                            )}

                        </div>


                        {/* DOWNLOAD BUTTON */}

                        {!loading &&
                            !error &&
                            bmiCategory &&
                            weeklyDietPlans.length > 0 && (

                                <div
                                    className="text-center mt-5"
                                >

                                    <button
                                        type="button"
                                        className="btn btn-dark px-5 py-3 rounded-pill shadow"
                                        onClick={handleDownload}
                                    >
                                        Download 7-Day Diet Plan PDF
                                    </button>

                                </div>

                            )}


                        {/* NUTRITION NOTE */}

                        <div
                            className="border rounded-3 p-4 mt-5 bg-white"
                        >

                            <h5 className="fw-bold mb-2">
                                Nutrition Note
                            </h5>

                            <p className="text-secondary mb-0">

                                These diet plans are
                                general wellness guidance.
                                Individual nutritional
                                needs may vary. Consult a
                                qualified healthcare
                                professional or dietitian
                                for personalised medical
                                nutrition advice.

                            </p>

                        </div>

                    </div>

                </section>


                {/* PDF PREVIEW */}

                <div
                    style={{
                        position: "absolute",
                        left: "-99999px",
                        top: "0",
                        width: "794px",
                        backgroundColor: "#ffffff"
                    }}
                >

                    <div
                        ref={previewRef}
                        style={{
                            width: "794px",
                            backgroundColor: "#ffffff",
                            padding: "45px",
                            fontFamily: "Arial, sans-serif",
                            color: "#212529"
                        }}
                    >

                        {/* PDF HEADER */}

                        <div
                            style={{
                                textAlign: "center",
                                borderBottom: "3px solid #0c0c0c",
                                paddingBottom: "20px",
                                marginBottom: "25px"
                            }}
                        >

                            <h1
                                style={{
                                    fontSize: "30px",
                                    fontWeight: "700",
                                    margin: "0 0 8px 0"
                                }}
                            >
                                SMART GYM
                            </h1>

                            <h2
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "600",
                                    margin: "0 0 10px 0"
                                }}
                            >
                                7-Day Diet Plan
                            </h2>

                            <p
                                style={{
                                    fontSize: "15px",
                                    margin: "5px 0"
                                }}
                            >

                                BMI Category:{" "}

                                <strong>
                                    {bmiCategory}
                                </strong>

                            </p>

                            {bmi && (

                                <p
                                    style={{
                                        fontSize: "14px",
                                        margin: "5px 0"
                                    }}
                                >
                                    BMI:{" "}
                                    <strong>
                                        {bmi}
                                    </strong>
                                </p>

                            )}

                        </div>


                        {/* ALL 7 DAYS */}

                        {days.map((day) => {

                            const diet =
                                matchingDietPlans.find(
                                    (item) =>
                                        item.day === day
                                );

                            if (!diet) {
                                return null;
                            }

                            return (

                                <div
                                    key={diet.id}
                                    style={{
                                        border: "1px solid #dee2e6",
                                        borderRadius: "10px",
                                        marginBottom: "22px",
                                        overflow: "hidden",
                                        pageBreakInside: "avoid"
                                    }}
                                >

                                    {/* DAY HEADER */}

                                    <div
                                        style={{
                                            backgroundColor: "#0a0a0a",
                                            color: "#ffffff",
                                            padding: "12px 18px",
                                            fontSize: "18px",
                                            fontWeight: "700"
                                        }}
                                    >
                                        {diet.day}
                                    </div>


                                    {/* DAY CONTENT */}

                                    <div
                                        style={{
                                            padding: "18px"
                                        }}
                                    >

                                        <h3
                                            style={{
                                                fontSize: "17px",
                                                margin: "0 0 15px 0",
                                                fontWeight: "700"
                                            }}
                                        >
                                            {diet.title}
                                        </h3>


                                        {/* BREAKFAST */}

                                        <div
                                            style={{
                                                display: "table",
                                                width: "100%",
                                                marginBottom: "12px"
                                            }}
                                        >

                                            <div
                                                style={{
                                                    display: "table-row"
                                                }}
                                            >

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "25%",
                                                        fontWeight: "700",
                                                        verticalAlign: "top",
                                                        padding: "7px 10px 7px 0"
                                                    }}
                                                >
                                                    Breakfast
                                                </div>

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "75%",
                                                        verticalAlign: "top",
                                                        padding: "7px 0"
                                                    }}
                                                >
                                                    {
                                                        diet.breakfast ||
                                                        "Not specified"
                                                    }
                                                </div>

                                            </div>

                                        </div>


                                        {/* LUNCH */}

                                        <div
                                            style={{
                                                display: "table",
                                                width: "100%",
                                                marginBottom: "12px"
                                            }}
                                        >

                                            <div
                                                style={{
                                                    display: "table-row"
                                                }}
                                            >

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "25%",
                                                        fontWeight: "700",
                                                        verticalAlign: "top",
                                                        padding: "7px 10px 7px 0"
                                                    }}
                                                >
                                                    Lunch
                                                </div>

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "75%",
                                                        verticalAlign: "top",
                                                        padding: "7px 0"
                                                    }}
                                                >
                                                    {
                                                        diet.lunch ||
                                                        "Not specified"
                                                    }
                                                </div>

                                            </div>

                                        </div>


                                        {/* EVENING SNACK */}

                                        <div
                                            style={{
                                                display: "table",
                                                width: "100%",
                                                marginBottom: "12px"
                                            }}
                                        >

                                            <div
                                                style={{
                                                    display: "table-row"
                                                }}
                                            >

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "25%",
                                                        fontWeight: "700",
                                                        verticalAlign: "top",
                                                        padding: "7px 10px 7px 0"
                                                    }}
                                                >
                                                    Evening Snack
                                                </div>

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "75%",
                                                        verticalAlign: "top",
                                                        padding: "7px 0"
                                                    }}
                                                >
                                                    {
                                                        diet.snack ||
                                                        "Not specified"
                                                    }
                                                </div>

                                            </div>

                                        </div>


                                        {/* DINNER */}

                                        <div
                                            style={{
                                                display: "table",
                                                width: "100%"
                                            }}
                                        >

                                            <div
                                                style={{
                                                    display: "table-row"
                                                }}
                                            >

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "25%",
                                                        fontWeight: "700",
                                                        verticalAlign: "top",
                                                        padding: "7px 10px 7px 0"
                                                    }}
                                                >
                                                    Dinner
                                                </div>

                                                <div
                                                    style={{
                                                        display: "table-cell",
                                                        width: "75%",
                                                        verticalAlign: "top",
                                                        padding: "7px 0"
                                                    }}
                                                >
                                                    {
                                                        diet.dinner ||
                                                        "Not specified"
                                                    }
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}


                    

                    </div>

                </div>


                {/* FOOTER */}

                <section
                    className="bg-dark text-white py-5"
                >

                    <div
                        className="container text-center"
                    >

                        <h2 className="fw-bold">
                            Continue Your Fitness Journey
                        </h2>

                        <p className="text-secondary mb-4">
                            Combine balanced nutrition,
                            regular movement and enough rest.
                        </p>

                        <div
                            className="d-flex justify-content-center gap-3 flex-wrap"
                        >

                            <Link
                                to="/nutrition"
                                className="btn btn-outline-light rounded-pill px-4"
                            >
                                ← Nutrition
                            </Link>

                            <Link
                                to="/workouts"
                                className="btn btn-success rounded-pill px-4"
                            >
                                Explore Workouts →
                            </Link>

                        </div>

                    </div>

                </section>

            </div>

        </div>

    );

}

export default DietPlan;