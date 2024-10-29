import { useState } from "react";
import { ADD_USER, LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [addUser, { loading: addingUser, error: addUserError }] = useMutation(ADD_USER);
    const [login, { loading: loggingIn, error: loginError }] = useMutation(LOGIN);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // First, create the user account
            const { data: addUserData } = await addUser({
                variables: { username, email, password }
            });

            // Check if the user was added before attempting login
            if (addUserData?.addUser) {
                // Separate login request
                const { data: loginData } = await login({
                    variables: { email, password }
                });
                
                if (loginData?.login?.token) {
                    Auth.login(loginData.login.token); // Authenticate user on successful login
                }
            }
        } catch (err) {
            console.error("Error during signup or login:", err);
        }
    };

    return (
        <form id="signUp-form" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
            <nav className="navbar navbar-expand-lg navbar-light bg-success">
                <div className="container-fluid">
                    <input
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="username"
                        type="text"
                        className="form-control me-2"
                    />
                    <input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        type="email"
                        className="form-control me-2"
                    />
                    <input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                        type="password"
                        className="form-control me-2"
                    />
                    <button className="btn btn-info" disabled={addingUser || loggingIn}>
                        SignUp
                    </button>
                </div>
            </nav>
            {addUserError && <p>Error: {addUserError.message}</p>}
            {loginError && <p>Error: {loginError.message}</p>}
        </form>
    );
};

export default SignUp;
