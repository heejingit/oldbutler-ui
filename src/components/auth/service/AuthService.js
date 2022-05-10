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
            if (res.data.roles && res.data.roles.includes("ROLE_ADMIN")) {
                this.props.history.push("/admin/board");
            } else if (res.data.roles && res.data.roles.includes("ROLE_MODERATOR")) {
                this.props.history.push("/staff/board");
            } else {
                this.props.history.push("/");
            }
            window.location.reload();
            return res.data;
        })
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
}

export default new AuthService;