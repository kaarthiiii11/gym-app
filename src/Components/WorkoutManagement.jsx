import { useEffect, useState } from "react";

import { allWorkoutAPI, addWorkoutAPI, updateWorkoutAPI, deleteWorkoutAPI } from "../Services/allAPI";

function WorkoutManagement({ workouts, setWorkouts }) {

  const [workoutData, setWorkoutData] = useState({
    day: "",
    name: "",
    category: "",
    level: "",
    sets: "",
    reps: "",
    duration: "",
    rest: "",
    benefits: "",
    video: "",
    instructions: ""
  });

  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getWorkouts();
  }, []);

  // GET ALL WORKOUTS
  async function getWorkouts() {
    try {
      const result = await allWorkoutAPI();
      setWorkouts(result.data);
    } catch (error) {
      setMessage("Unable to load workouts. Check JSON Server.");
    }
  }

  // HANDLE INPUT CHANGES
  function handleChange(e) {
    setWorkoutData({...workoutData,[e.target.name]: e.target.value});
  }

  // RESET FORM
  function resetForm() {
    setWorkoutData({
      day: "",
      name: "",
      category: "",
      level: "",
      sets: "",
      reps: "",
      duration: "",
      rest: "",
      benefits: "",
      video: "",
      instructions: ""
    });

    setEditId(null);
  }

  // ADD AND UPDATE WORKOUT
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      if (editId !== null) {

        // UPDATE WORKOUT
        await updateWorkoutAPI(editId, workoutData);

        setMessage("Workout updated successfully!");

      } else {

        // ADD WORKOUT
        await addWorkoutAPI(workoutData);

        setMessage("Workout added successfully!");
      }

      resetForm();

      await getWorkouts();

    } catch (error) {
      setMessage("Unable to save workout. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  // EDIT WORKOUT
  function handleEdit(workout) {
    setWorkoutData({
      day: workout.day || "",
      name: workout.name || workout.title || "",
      category: workout.category || workout.type || "",
      level: workout.level || "",
      sets: workout.sets || "",
      reps: workout.reps || "",
      duration: workout.duration || "",
      rest: workout.rest || workout.restTime || "",
      benefits: workout.benefits || "",
      video: workout.video || "",
      instructions: workout.instructions || workout.description || ""
    });

    setEditId(workout.id);
    setMessage("");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // DELETE WORKOUT
  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this workout?"
    );

    if (confirmDelete) {
      try {
        setMessage("");

        await deleteWorkoutAPI(id);

        setMessage("Workout deleted successfully!");

        if (editId === id) {
          resetForm();
        }

        await getWorkouts();

      } catch (error) {
        setMessage("Unable to delete workout.");
      }
    }
  }

  // CANCEL EDITING
  function handleCancel() {
    resetForm();
    setMessage("");
  }

  return (
    <div className="container-fluid py-3">

      <div className="card shadow-sm border-0 mb-4">
        <div className="card-body p-4">

          <h3 className="mb-4">
            {editId !== null ? "Edit Workout" : "Add New Workout"}
          </h3>

          {message && (
            <div className="alert alert-info">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Workout Day</label>

                <select
                  className="form-select"
                  name="day"
                  value={workoutData.day}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Day</option>
                  <option value="Monday">Monday</option>
                  <option value="Tuesday">Tuesday</option>
                  <option value="Wednesday">Wednesday</option>
                  <option value="Thursday">Thursday</option>
                  <option value="Friday">Friday</option>
                  <option value="Saturday">Saturday</option>
                  <option value="Sunday">Sunday</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Workout Name</label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={workoutData.name}
                  onChange={handleChange}
                  placeholder="Enter workout name"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>

                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={workoutData.category}
                  onChange={handleChange}
                  placeholder="Example: Upper Body"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Difficulty Level</label>

                <select
                  className="form-select"
                  name="level"
                  value={workoutData.level}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Sets</label>

                <input
                  type="number"
                  className="form-control"
                  name="sets"
                  value={workoutData.sets}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Reps</label>

                <input
                  type="number"
                  className="form-control"
                  name="reps"
                  value={workoutData.reps}
                  onChange={handleChange}
                  min="1"
                  required
                />
              </div>

              <div className="col-md-4 mb-3">
                <label className="form-label">Duration</label>

                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  value={workoutData.duration}
                  onChange={handleChange}
                  placeholder="Example: 10 minutes"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Rest Time</label>

                <input
                  type="text"
                  className="form-control"
                  name="rest"
                  value={workoutData.rest}
                  onChange={handleChange}
                  placeholder="Example: 30 seconds between sets"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Workout Video URL</label>

                <input
                  type="url"
                  className="form-control"
                  name="video"
                  value={workoutData.video}
                  onChange={handleChange}
                  placeholder="Paste YouTube video URL"
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Workout Benefits</label>

                <textarea
                  className="form-control"
                  name="benefits"
                  value={workoutData.benefits}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Explain the benefits of this workout"
                  required
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Instructions</label>

                <textarea
                  className="form-control"
                  name="instructions"
                  value={workoutData.instructions}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Explain how to perform the workout"
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary me-2"
              disabled={loading}
            >
              {loading
                ? "Please wait..."
                : editId !== null
                  ? "Update Workout"
                  : "Add Workout"}
            </button>

            {editId !== null && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
                disabled={loading}
              >
                Cancel
              </button>
            )}

          </form>
        </div>
      </div>

      <h3 className="mb-3">All Workouts</h3>

      <div className="row">

        {workouts.map((workout) => (
          <div
            className="col-md-6 col-lg-4 mb-4"
            key={workout.id}
          >
            <div className="card h-100 shadow-sm">
              <div className="card-body">

                <span className="badge bg-primary mb-2">
                  {workout.day}
                </span>

                <h5 className="card-title">
                  {workout.name || workout.title}
                </h5>

                <p className="mb-1">
                  <strong>Category:</strong>{" "}
                  {workout.category || workout.type}
                </p>

                <p className="mb-1">
                  <strong>Level:</strong>{" "}
                  {workout.level || "Not specified"}
                </p>

                <p className="mb-1">
                  <strong>Sets:</strong> {workout.sets}
                </p>

                <p className="mb-1">
                  <strong>Reps:</strong> {workout.reps}
                </p>

                <p className="mb-1">
                  <strong>Duration:</strong> {workout.duration}
                </p>

                <p className="mb-1">
                  <strong>Rest Time:</strong>{" "}
                  {workout.rest || workout.restTime || "Not specified"}
                </p>

                <p className="mt-3 mb-1">
                  <strong>Benefits:</strong>
                </p>

                <p>{workout.benefits || "No benefits added"}</p>

                <p className="mb-1">
                  <strong>Instructions:</strong>
                </p>

                <p>
                  {workout.instructions || workout.description}
                </p>

                {workout.video && (
                  <a
                    href={workout.video}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm btn-outline-primary mb-3"
                  >
                    Watch Video
                  </a>
                )}

                <div className="d-flex gap-2 mt-2">

                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleEdit(workout)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(workout.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          </div>
        ))}

        {workouts.length === 0 && (
          <div className="col-12">
            <div className="alert alert-light border">
              No workouts added yet.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default WorkoutManagement;