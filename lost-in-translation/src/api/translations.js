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

export const translationAdd = async (input) => {
    //Get "user" from session storage 
    const user = JSON.parse(sessionStorage.getItem('user'));
    //Based on the userId we fetch translation
    await fetch(`${apiURL}/translations/${user.id}`)
    .then(response => response.json())
    .then(result => { 
        sessionStorage.setItem('translations', JSON.stringify(result.translations));
    })
    .catch(error => {
        console.error("Error:", error);
    })
    //We get the "old" translations from session storage and add the new translation
    const oldTranslations = JSON.parse(sessionStorage.getItem('translations'));
    const updatedInput = [...oldTranslations, input]

    //Based on the users id we update the translations with PATCH
    try {
        const response = await fetch(`${apiURL}translations/${user.id}`, {
            method: "PATCH",
            headers: createHeaders(),
            body: JSON.stringify({
                translations: updatedInput
            })
        });

        const data = await response.json();
        return [null, data]
    } catch (error) {
        console.error("Error:", error);
    }
}

