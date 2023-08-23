const apiKey = process.env.REACT_APP_API_KEY;

// The headers will be used when fetching data from the API, e.g. when using the createUser()
export const createHeaders = () => {
    return{
        'Content-Type': 'application/json',
        'x-api-key': apiKey
    }
}
export const handleResponse = () => {
    //Implement
}