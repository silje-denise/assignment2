import { createHeaders } from ".";

const apiURL = process.env.REACT_APP_API_URL;

//Using the PATCH method to update parts of the record
//In this case, we want to update the translations to be empty, thus "deleting" the data
export const translationClearHistory = async (userId) => {
    try {
        const response = await fetch(`${apiURL}/translations/${userId}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if(!response.ok){
            throw new Error('Could not update translations');
        }
        const result = await response.json();
        return[null, result]
    } catch (error) {
        return [error.message, null]
    }
}