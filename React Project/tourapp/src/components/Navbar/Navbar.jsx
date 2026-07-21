import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "../ResponsiveMenu/ResponsiveMenu.jsx";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-stone-50/95 backdrop-blur-md shadow-sm">
                <div className="max-w-7xl mx-auto px-5 lg:px-8">
                    <div className="flex items-center justify-between h-20">

                        {/* Logo */}
                        <Link to="/">
                            <h1 className="text-3xl font-extrabold tracking-wide text-slate-900">
                                Tour<span className="text-orange-500">Dest</span>
                            </h1>
                        </Link>

                        <div className="flex items-center gap-6">

                            {/* Desktop Navigation */}
                            <nav className="hidden lg:flex items-center gap-8">

                                <ul className="flex items-center gap-8 text-slate-700 font-medium">

                                    <Link
                                        to="/"
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        <li>Home</li>
                                    </Link>

                                    <Link
                                        to="/about"
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        <li>About</li>
                                    </Link>

                                    <Link
                                        to="/tours"
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        <li>Tours</li>
                                    </Link>

                                    <Link
                                        to="/gallery"
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        <li>Gallery</li>
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="hover:text-orange-500 transition-colors duration-300"
                                    >
                                        <li>Contact</li>
                                    </Link>

                                </ul>

                                <button className="rounded-full bg-orange-500 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:scale-105">
                                    Book Now
                                </button>

                            </nav>

                            {/* Mobile Menu Icon */}
                            <HiMenuAlt1
                                onClick={toggleMenu}
                                size={30}
                                className="cursor-pointer text-slate-900 lg:hidden transition hover:text-orange-500"
                            />

                        </div>

                    </div>

                </div>
            </header>
            <ResponsiveMenu
                showMenu={showMenu}
                setShowMenu={setShowMenu}
            />
    </>
    );
}

export default Navbar;