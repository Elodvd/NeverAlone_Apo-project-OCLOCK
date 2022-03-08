import apiAxios from "./index";

export async function createEventRequest(title, description, date, category, price, adress, city, capacity, user_id) {

    try{
        const response = await apiAxios.post("/events", { 
            title, description, date, category, price, adress, city, capacity, user_id
        });
        return response;

    }catch(err){
        return err.response;
    }
}