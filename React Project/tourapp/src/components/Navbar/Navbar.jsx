    import React, { useState } from 'react';
    import { Link, useLocation } from 'react-router-dom';

    const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const handleLinkClick = (link) => {
        setIsOpen(false);
    };

    const NavLink = ({ to, label, id }) => {
        const isActive = location.pathname === to || (to === '/' && location.pathname === '/');
        
        return (
        <Link
            to={to}
            onClick={() => handleLinkClick(id)}
            className={`block px-4 py-2 rounded-lg transition duration-300 ${
            isActive
                ? 'text-ocean-dark bg-cream-warm font-semibold'
                : 'text-ocean-deep hover:text-ocean hover:bg-cream/50'
            }`}
        >
            {label}
        </Link>
        );
    };

    return (
        <nav className="bg-gradient-to-r from-cream via-cream-warm to-sand-light shadow-md fixed top-0 left-0 right-0 z-50 border-b border-sand/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
                <div>
                <span className="text-ocean-dark text-2xl font-bold">Travel&</span>
                <span className="text-sand-dark text-2xl font-bold">Tours</span>
                </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
                <NavLink to="/" label="Home" id="home" />
                <NavLink to="/destinations" label="Destinations" id="destinations" />
                <NavLink to="/packages" label="Packages" id="packages" />
                <NavLink to="/about" label="About" id="about" />
                <NavLink to="/contact" label="Contact" id="contact" />
                <Link to="/packages">
                <button className="ml-4 bg-ocean text-white px-5 py-2 rounded-lg hover:bg-ocean-dark transition duration-300 shadow-md hover:shadow-lg">
                    Book Now
                </button>
                </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-ocean-dark p-2 rounded-lg hover:bg-cream-warm transition duration-300"
                aria-label="Toggle menu"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
                </svg>
            </button>
            </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
            <div className="bg-cream-warm/95 backdrop-blur-sm px-4 py-3 space-y-1 border-t border-sand/30">
            <NavLink to="/" label="Home" id="home" />
            <NavLink to="/destinations" label="Destinations" id="destinations" />
            <NavLink to="/packages" label="Packages" id="packages" />
            <NavLink to="/about" label="About" id="about" />
            <NavLink to="/contact" label="Contact" id="contact" />
            <Link to="/packages" onClick={() => setIsOpen(false)}>
                <button className="w-full mt-2 bg-ocean text-white px-4 py-2 rounded-lg hover:bg-ocean-dark transition duration-300 shadow-md">
                Book Now
                </button>
            </Link>
            </div>
        </div>
        </nav>
    );
    };

    export default Navbar;