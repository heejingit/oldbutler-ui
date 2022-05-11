import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(username, password) {
        return axios.post(API_URL + "signin", {
            username,
            password
        }).then(res => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
    }

    logout() {
        return localStorage.removeItem("user");
    }

    register(username, email, password) {
        return axios.post(API_URL + "signup", {
            username,
            email,
            password
        })
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

    getTokenHeader() {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.accessToken) {
            return { Authorization: 'Bearer ' + user.accessToken };
        } else {
            return {};
        }
    }

    isAuthenticated() {
        const user = this.getUser();
        if (user && user.accessToken) {
            return true;
        }
        return false;
    }

    getRole() {
        const user = this.getUser();
        if (user.roles.includes("ROLE_ADMIN")) {
            return "admin";
        } else if (user.roles.includes("ROLE_MODERATOR")) {
            return "staff";
        } else {
            return "user";
        }
    }
}

export default new AuthService();