import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/storage";
import { STORAGE_KEY_USER } from "../const/storageKeys";

// This file contains the user data (context) which is used around in the application
const UserContext = createContext();

export const useUser = () => {
    return useContext(UserContext)// returns object
}

const UserProvider = (props) => {
    const [user, setUser] = useState(storageRead(STORAGE_KEY_USER));
    const state = {user,setUser}

    return(
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
}
export default UserProvider;