import apiAxios from './index';

export async function loginRequest(email, password) {
    try {
        const response = await apiAxios.post('/login', {
            email,
            password,
        });

        return response;
    } catch (err) {
        return err.response;
    }
}
