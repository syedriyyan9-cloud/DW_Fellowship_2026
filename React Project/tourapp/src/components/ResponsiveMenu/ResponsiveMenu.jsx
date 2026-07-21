import { X } from 'lucide-react'
import { FaUserCircle } from "react-icons/fa"
import { Link } from 'react-router-dom'

function ResponsiveMenu(props) {
    return (
        <div
            className={`fixed top-0 right-0 h-screen overflow-y-auto w-[80%] max-w-sm bg-stone-50 shadow-2xl z-[60] transition-transform duration-500 ease-in-out flex flex-col justify-between ${props.showMenu ? "translate-x-0" : "translate-x-full"}`}>
            <div className="p-6">

                {/* Close Button */}
                <div className="flex justify-end">
                    <button
                        onClick={() => props.setShowMenu(false)}
                        className="rounded-full p-2 text-slate-700 hover:bg-stone-200 transition"
                    >
                        <X size={26} />
                    </button>
                </div>

                {/* User Section */}
                <div className="flex items-center gap-4 mt-4 border-b border-stone-200 pb-6">
                    <FaUserCircle
                        size={55}
                        className="text-slate-700"
                    />

                    <div>
                        <h1 className="text-lg font-semibold text-slate-900">
                            Hello User
                        </h1>

                        <h1 className="text-sm text-orange-500 font-medium">
                            Premium User
                        </h1>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="mt-8">
                    <ul className="flex flex-col gap-2">

                        <Link to="/">
                            <li
                                onClick={() => props.setShowMenu(false)}
                                className="rounded-xl px-4 py-3 text-slate-700 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Home
                            </li>
                        </Link>

                        <Link to="/about">
                            <li
                                onClick={() => props.setShowMenu(false)}
                                className="rounded-xl px-4 py-3 text-slate-700 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                About
                            </li>
                        </Link>

                        <Link to="/tours">
                            <li
                                onClick={() => props.setShowMenu(false)}
                                className="rounded-xl px-4 py-3 text-slate-700 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Tours
                            </li>
                        </Link>

                        <Link to="/gallery">
                            <li
                                onClick={() => props.setShowMenu(false)}
                                className="rounded-xl px-4 py-3 text-slate-700 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Gallery
                            </li>
                        </Link>

                        <Link to="/contact">
                            <li
                                onClick={() => props.setShowMenu(false)}
                                className="rounded-xl px-4 py-3 text-slate-700 font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                Contact
                            </li>
                        </Link>

                        <Link to="#">
                            <button
                                onClick={() => props.setShowMenu(false)}
                                className="mt-6 w-full rounded-full bg-orange-500 py-3 font-semibold text-white hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
                            >
                                Book Now
                            </button>
                        </Link>

                    </ul>
                </nav>
            </div>

            {/* Footer */}
            <div className="border-t border-stone-200 p-5 text-center">
                <h1 className="text-sm text-slate-500">
                    Made with 🤩 React
                </h1>
            </div>
        </div>
    );
}

export default ResponsiveMenu;