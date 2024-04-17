import { useState } from "react";

export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [moodleUsername, setMoodleUsername] = useState('');
    const [moodlePassword, setMoodlePassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your signup logic here
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleMoodleUsernameChange = (e) => {
        setMoodleUsername(e.target.value);
    };

    const handleMoodlePasswordChange = (e) => {
        setMoodlePassword(e.target.value);
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-purple-600">
                <div className="max-w-md w-full p-8 bg-white rounded-md shadow-md mt-20 mb-20">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="first-name" className="sr-only">First Name</label>
                                <span>First Name</span>
                                <input id="first-name" name="first-name" type="text" autoComplete="given-name" required
                                       value={firstName} onChange={handleFirstNameChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                />
                            </div>
                            <div>
                                <label htmlFor="last-name" className="sr-only">Last Name</label>
                                <span>Last Name</span>
                                <input id="last-name" name="last-name" type="text" autoComplete="family-name" required
                                       value={lastName} onChange={handleLastNameChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="sr-only">Email</label>
                                <span>Email</span>
                                <input id="email" name="email" type="email" autoComplete="email" required
                                       value={email} onChange={handleEmailChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="sr-only">Username</label>
                                <span>Username</span>
                                <input id="username" name="username" type="text" autoComplete="username" required
                                       value={username} onChange={handleUsernameChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">Password</label>
                                <span>Password</span>
                                <input id="password" name="password" type="password" autoComplete="new-password"
                                       required
                                       value={password} onChange={handlePasswordChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                />
                            </div>
                            <div>
                                <p className="text-black flex justify-center items-center">Moodle
                                    Credentials</p>
                            </div>
                            <div>
                                <label htmlFor="moodle-username" className="sr-only">Moodle Username</label>
                                <span>Moodle Username</span>
                                <input id="moodle-username" name="moodle-username" type="username"
                                       autoComplete="moodle-username" required
                                       value={moodleUsername} onChange={handleMoodleUsernameChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                />
                            </div>
                            <div>
                                <label htmlFor="moodle-password" className="sr-only">Moodle Password</label>
                                <span>Moodle Password</span>
                                <input id="moodle-password" name="moodle-password" type="password"
                                       autoComplete="moodle-password" required
                                       value={moodlePassword} onChange={handleMoodlePasswordChange}
                                       className="bg-gray-300 rounded-md relative block w-full px-2 py-2 mb-4"
                                />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit"
                                    className="group relative flex justify-center items-center w-36 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mx-auto">Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
