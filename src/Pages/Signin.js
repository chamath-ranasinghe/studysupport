import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Components/NavBar";
import AlertBox from "../Components/AlertBox";
import axios from 'axios';
import { Alert } from "@mui/material";

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthorized, setAuthorized] = useState(true);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add your login logic here
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;

        const url = 'http://localhost:5000/sign-in'; 
        const postData = {username: username, password: password};

        try{
            const response = await axios.post(url,postData);
            
            // If response is True direct to Dashboard else display error message
            if (response.data.correct){
                navigate("/dashboard");
            } else{
                setAuthorized(false);
            }
        } catch(error){
            console.error(error)
        }
        
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <Navbar isSignin={true}/>
            <div className="min-h-screen flex items-center justify-center bg-purple-600">
                <div className="max-w-md w-full p-8 bg-white rounded-md shadow-md">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Login</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="username" className="sr-only">Username</label>
                                <span>Username</span>
                                <input id="username" name="username" type="text" autoComplete="username" required
                                       value={username} onChange={handleUsernameChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4 "
                                       />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <span>Password</span>
                                <input id="password" name="password" type="password" autoComplete="current-password"
                                       required value={password} onChange={handlePasswordChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                       />
                            </div>
                            <div>
                                <p> Not a member yet? <a href='/register' className="text-purple-600">Register Now</a></p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit"
                                    className="group relative flex justify-center items-center w-36 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Incorrect Credentials Warning*/}
            {(isAuthorized)?(""):(<AlertBox/>)}
            
        </>
    );
}
