
//This file reads and writes to sessionStorage in order to save and retrieve information about the session
// We use this to check if the user is logged in so that we can redirect the user to the correct place in the application
export const storageSave = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = (key) => {
    const data = sessionStorage.getItem(key);
    if(data){
        return JSON.parse(data);
    }
    return null;
}
//Delete user information from sessionStorage
//This will terminate the session and the user has to log in again in order to reach /translation or /profile
export const storageDelete = key => {
    sessionStorage.removeItem(key);
}