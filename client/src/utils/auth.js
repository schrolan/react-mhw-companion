import * as jwt_decode from 'jwt-decode';

const lsKey = 'mhwToken';

class AuthService {
  getLoggedInUser() {
    return this.getToken() && jwt_decode(this.getToken())?.data || false;
  }

  loggedIn() {
    const token = this.getToken();
    if (token && !this.isTokenExpired(token)) {
      const decoded = jwt_decode(token);
      return decoded;
    }
    return false;
  }

  isTokenExpired(token) {
    const decoded = jwt_decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem(lsKey);
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem(lsKey);
  }

  login(token) {
    localStorage.setItem(lsKey, token);
    const decoded = jwt_decode(token);
    const { _id } = decoded?.data;
    window.location.assign(`/user/${_id}`);
  }

  logout() {
    localStorage.removeItem(lsKey);
    window.location.assign(`/`);
  }

  addUser(token) {
    this.login(token);
  }
}

export default new AuthService();