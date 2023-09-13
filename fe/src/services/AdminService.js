import http from '../http-common';

const url = '/admin';

class AdminService {
    getAllStudents(){
        return http.get(`${url}/all-student`);
    }

    getAllTeachers(){
        return http.get(`${url}/all-teacher`);
    }
}

export default new AdminService();