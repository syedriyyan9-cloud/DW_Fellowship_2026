import { useState, useRef } from "react";
import dummyApiResponse from "../featureFlag/data.js";

function GithubProfileFinder() {
const [user, setUser] = useState(null);
const inputValue = useRef(null);

async function findUser() {
    try {
    const data = await fetch(
        `https://api.github.com/users/${inputValue.current.value}`
    );

    if (data.ok) {
        const response = await data.json();
        setUser(response);
    } else {
        throw new Error(`User not found: ${data.status}`);
    }
    } catch (e) {
    setUser(null);
    console.log(e.message);
    }
}

return (
    <div className="min-h-150 bg-slate-100 flex items-center justify-center px-4">
    <div className="w-full max-w-lg">

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8">
            GitHub Profile Finder
        </h1>

        <div className="flex gap-3">
            <input
            type="text"
            ref={inputValue}
            placeholder="Enter GitHub username..."
            className="flex-1 px-4 py-3 border border-slate-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

            <button
            onClick={findUser}
            className="px-5 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition duration-200"
            >
            Find User
            </button>
        </div>
        </div>

        {/* Profile */}
        {user ? (
        <div className="mt-6 bg-white rounded-2xl shadow-xl overflow-hidden">

            <div className="flex flex-col items-center p-8">

            {/* Avatar */}
            <img
                src={user.avatar_url}
                alt="user_Image"
                className="w-32 h-32 rounded-full object-cover border-4 border-slate-100 shadow-md"
            />

            {/* Name */}
            <h2 className="mt-5 text-2xl font-bold text-slate-800">
                {user.name || "No name provided"}
            </h2>

            {/* Username */}
            <p className="text-slate-500 mt-1">
                @{user.login}
            </p>

            {/* Details */}
            <div className="w-full mt-6 space-y-4">

                <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-500">
                    Joined
                </p>
                <p className="text-slate-800 mt-1">
                    {new Date(user.created_at).toLocaleDateString()}
                </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-500">
                    Bio
                </p>
                <p className="text-slate-800 mt-1">
                    {user.bio || "No bio available"}
                </p>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-sm font-semibold text-slate-500">
                    Public Repositories
                </p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                    {user.public_repos}
                </p>
                </div>

            </div>

            {/* GitHub Profile */}
            <a
                href={user.html_url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full text-center bg-slate-800 text-white py-3 rounded-lg font-semibold hover:bg-slate-700 transition duration-200"
            >
                Visit GitHub Profile
            </a>

            </div>
        </div>
        ) : (
        <div className="mt-6 bg-white rounded-xl shadow-md p-6 text-center">
            <p className="text-slate-500">
            User not found
            </p>
        </div>
        )}

    </div>
    </div>
);
}

export default GithubProfileFinder;