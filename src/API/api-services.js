import axiosinstance from "./axios-instance";

//api call should be call by component apiService
const apiService = async(httpMethod,url,resBody) => {
    const reqConfig = {
        method:httpMethod,
        url,
        data:resBody
    }

    try{
        const response = await axiosinstance(reqConfig)
        return response
    }
    
    catch(error){
        throw(err)
    }

}

export default apiService