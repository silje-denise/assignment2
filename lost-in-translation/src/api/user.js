import { createHeaders } from "./index";

// The .env file contains the api url, check README for more information
const apiURL = process.env.REACT_APP_API_URL;

const checkForUser = async (username) => {
  try {
    const response = await fetch(`${apiURL}/translations?username=${username}`);
    if (!response.ok) {
      throw new Error("Could not complete request");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};
// Create a new user
const createUser = async (username) => {
  try {
    const response = await fetch(`${apiURL}/translations`, {
      method: "POST",
      headers: createHeaders(),
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not create user with username " + username);
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

// When the user attempts to login, we first run a check to see if user exists
// If the user exists, they will be logged in and redirected to /translation
// Else, we will attempt to create a new user and then logg them in
export const loginUser = async (username) => {
  const [checkError, user] = await checkForUser(username);

  //An error will be thrown if the checkForUser fails to fetch a user
  if (checkError !== null) {
    return [checkError, null];
  }
  //If checkForUser returns a user, the user will be added to the userContext
  if (user.length > 0) {
    return [null, user.pop()];
  }
  //The user will be created with the provided username
  return await createUser(username);
};

//------------ remove? -------------------------
// export const userById = async (userId) => {
//   try {
//     const response = await fetch(`${apiURL}/${userId}`);
//     if (!response.ok) {
//       throw new Error("Could not fetch user");
//     }
//     const user = await response.json();
//     return [null, user];
//   } catch (error) {
//     return [error.message, null];
//   }
// };
