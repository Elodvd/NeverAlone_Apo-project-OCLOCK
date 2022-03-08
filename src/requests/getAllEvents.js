import apiAxios from "./index";

export async function getAllEventsRequest() {

    try{
        const response = await apiAxios.get("/events");

        return response;
    }catch(err){
        return err.response;
    }
}