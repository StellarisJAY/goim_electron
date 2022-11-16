export function getToken() {
    return localStorage.getItem('goim_token')
}

export function saveToken(token) {
    localStorage.setItem('goim_token', token)
}