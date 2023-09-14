import http from '../http-common';

const url = '/admin';
http.interceptors.request.use((config) =>{
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config; 
})
class AdminService {
    
    getAllStudents(){
        return http.get(`${url}/all-student`);
    }

    getAllTeachers(){
        return http.get(`${url}/all-teacher`);
    }
}

export default new AdminService();