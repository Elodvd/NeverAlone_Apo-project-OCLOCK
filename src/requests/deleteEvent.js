import apiAxios from "./index";

export async function deleteEvent(id) {

    try{
        const response = await apiAxios.delete(`/events/${id}`);

        return response;
    }catch(err){
        return err.response;
    }
}