export function getStoredJson(key) {
    let item = localStorage.getItem(key)
    if (item != "" && item != null) {
        return JSON.parse(item)
    }else {
        return null
    }
}

export function store(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}