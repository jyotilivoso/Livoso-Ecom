import {jwtDecode} from 'jwt-decode';



export function getUserData() {
    const token = localStorage.getItem('token');
    if (!token) {
        return null;
    }
    try {
        const decodedToken = jwtDecode(token);
        return decodedToken.tokondata;
    } catch (error) {
        console.error("Error decoding token:", error);
        return null;
    }
}