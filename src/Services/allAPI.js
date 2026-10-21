import apiService from "../API/api-services";


// registerUserAPI: ADD NEW USER DETAILS 
export const registerUserAPI = async (userDetails) => {
    return await apiService('POST', '/users', userDetails)
}


// loginUserAPI: CALLED BY LOGIN COMPONENT 
export const loginUserAPI = async (email, password) => {
    return await apiService('GET', `/users?email=${email}&password=${password}`, {})
}


// checkUserAPI: CALLED BY REGISTER COMPONENT 
export const checkUserAPI = async (email) => {
    return await apiService('GET', `/users?email=${email}`, {})
}


// viewUserAPI
export const viewUserAPI = async (userId) => {
    return await apiService('GET', `/users/${userId}`, {})
}


// updateUserAPI
export const updateUserAPI = async (userId, userDetails) => {
    return await apiService('PUT', `/users/${userId}`, userDetails)

}

//downloadDietPlanAPI: CALLED WHEN DIET PLAN IS DOWNLOADED 
export const downloadDietPlanAPI = async (dietPlanDetails) => {
    return await apiService('POST', '/downloads', dietPlanDetails)
}

// allWorkoutAPI: CALLED BY WORKOUT COMPONENT
export const allWorkoutAPI = async () => {
    return await apiService('GET', '/workouts', {})
}


// viewWorkoutAPI: CALLED BY WORKOUT DETAILS 
export const viewWorkoutAPI = async (workoutId) => {
    return await apiService('GET', `/workouts/${workoutId}`, {})
}





// ADD WORKOUT
export const addWorkoutAPI = async (workoutDetails) => {
    return await apiService('POST', '/workouts', workoutDetails)
}

// UPDATE WORKOUT
export const updateWorkoutAPI = async (workoutId, workoutDetails) => {
    return await apiService('PUT', `/workouts/${workoutId}`, workoutDetails)
}

// DELETE WORKOUT
export const deleteWorkoutAPI = async (workoutId) => {
    return await apiService('DELETE', `/workouts/${workoutId}`, {})
}


// ALL DIET PLANS
export const allDietPlansAPI = async () => {
    return await apiService('GET', '/dietPlans', {})
}

// ADD DIET
export const addDietPlanAPI = async (dietDetails) => {
    return await apiService('POST', '/dietPlans', dietDetails)
}

// UPDATE DIET
export const updateDietPlanAPI = async (dietId, dietDetails) => {
    return await apiService('PUT', `/dietPlans/${dietId}`, dietDetails)
}

// DELETE DIET
export const deleteDietPlanAPI = async (dietId) => {
    return await apiService('DELETE', `/dietPlans/${dietId}`, {})
}




//ALL USERS
export const allUsersAPI = async () => {
    return await apiService('GET', '/users', {});
}
//DELETE USER
export const deleteUserAPI = async (userId) => {
    return await apiService('DELETE', `/users/${userId}`, {});
}

