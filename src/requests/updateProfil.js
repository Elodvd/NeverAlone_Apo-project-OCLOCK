import apiAxios from './index';
export async function updateProfil(
    id,
    first_name,
    last_name,
    pseudo,
    birthday,
    email
) {
    try {
        const response = await apiAxios.patch(`/profils/${id}`, {
            first_name,
            last_name,
            pseudo,
            birthday,
            email
        });
        return response;
    } catch (err) {
        return err.response;
    }
}
