import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { useState, useEffect } from "react";
import { storageSave } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { STORAGE_KEY_USER } from "../const/storageKeys";

// The user is required to type in a username longer than 2 characters
const usernameConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => {

// Hooks
  const {register,handleSubmit,formState: { errors },} = useForm();
  const {user, setUser} = useUser();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  // Redirect if user exists
  useEffect(() => {
    if(user !== null){
        navigate('profile');
    }
  },[user, navigate]); // Run once

// Event handler
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);
    if (error !== null) {
      setApiError(error);
    }
    // If user exists, we set the user in the userContext
    if (userResponse !== null) {
      storageSave(STORAGE_KEY_USER, userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  // Return errors if the username does not meet the requirements set in usernameConfig
  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }
    if (errors.username.type === "required") {
      return <div>Username is required</div>;
    }
    if (errors.username.type === "minLength") {
      return <div>Username is too short</div>;
    }
  })();

  return (
    <>
      <h2>What's your name?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            {...register("username", usernameConfig)}
            placeholder="Type in your name"
          />
          {errorMessage}
        </fieldset>
        {/* When the user attempt to log in, the page will load and the button will be disabled until the function returns a response */}
        <button type="submit" disabled={loading}>
          Continue
        </button>
        {loading && <p>Logging in...</p>}
        {apiError && <p>{apiError}</p>}
      </form>
    </>
  );
};

export default LoginForm;
