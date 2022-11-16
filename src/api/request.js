import axios from 'axios'
import {getToken, setToken} from './token.js'

const service = axios.create({
    baseURL: 'http://localhost:8000',
    timeout: 2000,
    timeoutErrorMessage: 'request time out'
})

service.interceptors.request.use(function(config) {
    let token = getToken()
    config.headers.set("Authorization", token)
    return config
}, function(error) {
    return Promise.reject(error)
})

service.interceptors.response.use(function(response) {
    let updatedToken = response.headers.get('AuthUpdateToken')
    if (updatedToken != '' && updatedToken != undefined) {
        setToken(updatedToken)
    }
    switch(response.status) {
        case 401: break
        default: return response
    }
}, function(error) {
    return Promise.reject(error)
})

export function get(url, data) {
    return service.get(url, data)
}

export function post(url, data) {
    return service.post(url, data)
}