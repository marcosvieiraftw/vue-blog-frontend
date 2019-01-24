export function authHeader() {
    // return authorization header with jwt token
    let user_token = JSON.parse(localStorage.getItem('user_token'));

    if (user_token) {
        return { 'Authorization': 'Bearer ' + user_token };
    }

    return {};
}