import http from '../http-common';

const url = '/account';

class AccountService{
    login(data){
        return http.post(`${url}/login`, data);
    }

    register(data){
        return http.post(`${url}/register`, data);
    }

    resetPassword(id, data){
        return http.put(`${url}/reset-password/${id}`, data);
    }
}

export default new AccountService();