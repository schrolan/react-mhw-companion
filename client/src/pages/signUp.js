import { useState } from "react";
import { ADD_USER, LOGIN } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [addUser, { loading: addLoading, error: addError }] = useMutation(ADD_USER);
    const [login, { loading: loginLoading, error: loginError }] = useMutation(LOGIN);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // First, call addUser mutation
            const addUserResponse = await addUser({
                variables: {
                    username,
                    email,
                    password
                }
            });

            if (addUserResponse?.data?.addUser) {
                // Once user is added, call login mutation
                const loginResponse = await login({
                    variables: {
                        email,
                        password,
                    }
                });

                if (loginResponse?.data?.login?.token) {
                    Auth.login(loginResponse.data.login.token);
                }
            }
        } catch (err) {
            console.error("Error in sign-up process:", err);
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
                    <button className="btn btn-info" disabled={addLoading || loginLoading}>
                        {addLoading || loginLoading ? 'Processing...' : 'Sign Up'}
                    </button>
                </div>
            </nav>
            {addError && <p>Error signing up: {addError.message}</p>}
            {loginError && <p>Error logging in: {loginError.message}</p>}
        </form>
    );
};

export default SignUp;
