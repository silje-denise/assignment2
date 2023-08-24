import {createHeaders} from './index';

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

export const translationAdd = async (translation) => {
    try {
        const response = await fetch(`${apiURL}/translation`, {
            method: "POST",
            "X-API-Key": apiKey,
            headers: createHeaders(),
            body: JSON.stringify({
                translation: [translation],
            })
        })

        if (!response.ok){
            throw new Error("Can not show translation")
        }

        const result = await response.json()
        return [null, result]
    }

    catch (error) {
        return [error.message, null]

    }
}

