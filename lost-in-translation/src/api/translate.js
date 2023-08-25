import {createHeaders} from './index';

// The .env file contains the api url, check README for more information
const apiURL = process.env.REACT_APP_API_URL;

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
        console.log("Response:", data);
    } catch (error) {
        console.error("Error:", error);
    }
}

