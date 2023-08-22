import { useForm } from "react-hook-form";
import { loginUser } from "../api/user";
import { useState, useEffect } from "react";
import { storageSave } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const usernameConfig = {
  required: true,
  minLength: 2,
};

const LoginForm = () => {
//   const input = {
//     padding: "5px",
//     borderRadius: "10px",
//     fontSize: "20px",
//     border: "2px solid #ccc",
//     backgroundColor: "#eee",
//   };

// Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
    if (userResponse !== null) {
      storageSave("user", userResponse);
      setUser(userResponse);
    }
    setLoading(false);
  };

  // Render functions
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
