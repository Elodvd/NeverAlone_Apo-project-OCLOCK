import apiAxios from "./index";

export async function getOneEventRequest(id) {

    try{
        const response = await apiAxios.get(`/events/${id}`);

        return response;
    }catch(err){
        return err.response;
    }
}