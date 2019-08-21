class Auth {
    constructor() {
        this.auth = ''
    }

    getInstance() {
        if(this.auth) {
            return this.auth;
        }
        return null;
    }

    setAuth(user) {
        this.auth = user;
    }
}

export default new Auth();