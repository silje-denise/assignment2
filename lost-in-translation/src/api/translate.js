import {createHeaders} from './index';
const apiURL = process.env.REACT_APP_API_URL;

export const translationAdd = async (user, TranslationInput) => {
    try {
        const response = await fetch(`${apiURL}/translation/${user.id}`, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username:user.username,
                translation: [...user.translation, TranslationInput]
            })
        })

        if (!response.ok){
            throw new Error('Can not show translation')
        }

        const result = await response.json()
        return [null, result]
    }

    catch (error) {
        return [error.message, null]

    }
}

