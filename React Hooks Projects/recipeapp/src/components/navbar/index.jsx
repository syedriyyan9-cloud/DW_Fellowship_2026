import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/index.jsx";

function Navbar() {
    const { searchParam, setSearchParam, handleSubmit } =
        useContext(GlobalContext);

    return (
        <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                    {/* Logo */}
                    <h2 className="text-2xl sm:text-3xl font-bold text-orange-600 text-center lg:text-left">
                        <NavLink
                            to={"/"}
                            className="hover:text-orange-700 transition duration-200"
                        >
                            FoodRecipe
                        </NavLink>
                    </h2>

                    {/* Search */}
                    <form className="flex w-full lg:w-auto lg:flex-1 lg:max-w-xl gap-2">
                        <input
                            type="text"
                            name="search"
                            placeholder="Enter Items..."
                            value={searchParam}
                            onChange={(event) => setSearchParam(event.target.value)}
                            className="min-w-0 flex-1 px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg outline-none text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition duration-200"
                        />

                        <button
                            onClick={handleSubmit}
                            className="px-5 sm:px-6 py-2.5 sm:py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 active:scale-95 transition duration-200 shadow-sm"
                        >
                            Search
                        </button>
                    </form>

                    {/* Navigation */}
                    <ul className="flex items-center justify-center lg:justify-end gap-8 text-base sm:text-lg font-medium">

                        <li>
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    `transition duration-200 ${isActive
                                        ? "text-orange-600 font-semibold"
                                        : "text-gray-600 hover:text-orange-500"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to={"/favorites"}
                                className={({ isActive }) =>
                                    `transition duration-200 ${isActive
                                        ? "text-orange-600 font-semibold"
                                        : "text-gray-600 hover:text-orange-500"
                                    }`
                                }
                            >
                                Favorites
                            </NavLink>
                        </li>

                    </ul>

                </div>

            </div>
        </nav>
    );
}

export default Navbar;