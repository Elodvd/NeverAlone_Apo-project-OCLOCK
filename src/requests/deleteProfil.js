import apiAxios from './index';

export async function deleteProfil(id) {
    try {
        const response = await apiAxios.delete(`/profils/${id}`);

        return response;
    } catch (err) {
        return err.response;
    }
}
