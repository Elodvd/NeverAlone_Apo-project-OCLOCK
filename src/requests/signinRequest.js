import apiAxios from './index';

export async function signinRequest(
    lastname,
    firstname,
    pseudo,
    birthday,
    email,
    password,
    passwordConfirm
) {
    try {
        const response = await apiAxios.post('/signin', {
            lastname,
            firstname,
            pseudo,
            birthday,
            email,
            password,
            passwordConfirm,
        });

        return response;
    } catch (err) {
        return err.response;
    }
}
