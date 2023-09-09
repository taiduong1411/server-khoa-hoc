import http from '../services/http-common';

const url = 'https://course-8xwb.onrender.com/';

class AccountService{
    login(){
        return http.get(url);
    }

    login(data){
        return http.post(url, data);
    }

    register(){
        return http.get(`${url}/register`);
    }

    register(data){
        return http.post(`${url}/register`, data);
    }

    resetPassword(){
        return http.get(`${url}/reset-password`);
    }

    resetPassword(id, data){
        return http.put(`${url}/reset-password/${id}`, data);
    }
}

export default new AccountService();