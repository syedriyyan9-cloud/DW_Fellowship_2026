import { useState, useEffect, useRef } from "react";

function SearchAutoComplete() {
    const [users, setUsers] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [searchedUsers, setSearchedUsers] = useState([]);
    const inputValue = useRef(null);

    async function get_users() {
        try {
            let data = await fetch("https://dummyjson.com/users");

            if (data.ok) {
                data = await data.json();
                setUsers(data.users);
            } else {
                throw new Error(data.status);
            }
        } catch (e) {
            console.log(`Error ${e}`);
        }
    }

    useEffect(() => {
        get_users();
    }, []);

    function handleUserInput(e) {
        let cpyinput = e.target.value;
        setUserInput(cpyinput);
    }

    useEffect(() => {
        if (userInput.length !== 0) {
            let fill = users.filter((user) =>
                user.username.includes(userInput)
            );

            setSearchedUsers([...fill]);
        } else {
            setSearchedUsers([]);
        }
    }, [userInput, users]);

    function handleClick(currIndex) {
        let value = searchedUsers.at(currIndex).username;

        console.log(value);

        inputValue.current.value = value;
        setUserInput(value);
        setSearchedUsers([]);
    }

    return (
        <div className="min-h-150 bg-slate-100 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-xl">

                {/* Search Container */}
                <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">

                    <h1 className="text-2xl sm:text-3xl font-bold text-center text-slate-800 mb-6">
                        User Search
                    </h1>

                    {/* Input */}
                    <div className="relative">

                        <input
                            type="text"
                            ref={inputValue}
                            value={userInput}
                            onChange={handleUserInput}
                            placeholder="Search username..."
                            className="w-full px-4 py-3 sm:py-4 border border-slate-300 rounded-xl outline-none text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                        />

                        {/* Search Results */}
                        {searchedUsers.length !== 0 ? (
                            <div className="absolute left-0 right-0 top-full mt-2 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden z-10 max-h-64 overflow-y-auto">

                                {searchedUsers.map((items, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleClick(index)}
                                        className="list-none px-4 py-3 cursor-pointer text-slate-700 hover:bg-slate-100 hover:text-blue-600 transition duration-150 border-b last:border-b-0 border-slate-100"
                                    >
                                        {items.username}
                                    </li>
                                ))}

                            </div>
                        ) : null}

                    </div>

                    {/* Helper Text */}
                    <p className="text-sm text-slate-400 mt-4 text-center">
                        Start typing a username to see suggestions.
                    </p>

                </div>

            </div>
        </div>
    );
}

export default SearchAutoComplete;