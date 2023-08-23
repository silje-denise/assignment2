
//This file reads and writes to localStorage in order to save and retrieve information about the session
// We use this to check if the user is logged in so that we can redirect the user to the correct place in the application
export const storageSave = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const storageRead = (key) => {
    const data = localStorage.getItem(key);
    if(data){
        return JSON.parse(data);
    }
    return null;
}