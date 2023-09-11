import http from '../http-common';

const url = '/admin';

class AdminService {
    getUsers() {
        return http.get(`${url}/users`);
    }

    getUser(id) {
        return http.get(`${url}/users/${id}`);
    }

    getAccounts(){
        return http.get(`${url}/accounts`);
    }

    getAccount(id) {
        return http.get(`${url}/accounts/${id}`);
    }

    deleteAccount(id) {
        return http.delete(`${url}/accounts/${id}`);
    }

    deleteUser(id) {
        return http.delete(`${url}/users/${id}`);
    }

    createUser(user) {
        return http.post(`${url}/users`, user);
    }
    
    createAccount(account) {
        return http.post(`${url}/accounts`, account);
    }
    
    updateUser(id, user) {
        return http.put(`${url}/users/${id}`, user);
    }

    updateAccount(id, account) {
        return http.put(`${url}/accounts/${id}`, account);
    }
}

export default new AdminService();