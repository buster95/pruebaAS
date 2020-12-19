import contacto from '../Models/contacto.model';
import http from './index';

const contactosService = {
    get: async () => {
        try {
            var response = await http.get<contacto[]>('/api/v1/contacto');
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    getOne: async (id: string) => {
        try {
            var response = await http.get<contacto>(`/api/v1/contacto/${id}`);
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    save: async (modelo: contacto) => {
        try {
            var response = await http.post<contacto>(`/api/v1/contacto`, modelo);
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    update: async (id: string, modelo: contacto) => {
        try {
            var response = await http.put<contacto>(`/api/v1/contacto/${id}`, modelo);
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    },
    delete: async (id: string) => {
        try {
            var response = await http.delete<contacto>(`/api/v1/contacto/${id}`);
            return response.data
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
};

export default contactosService;