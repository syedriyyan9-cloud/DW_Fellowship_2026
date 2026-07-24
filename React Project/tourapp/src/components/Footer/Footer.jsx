    import React from 'react';

    const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-linear-to-b from-ocean-dark to-ocean-deep text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer */}
            <div className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
                <div className="flex items-center space-x-3">
                <div>
                    <span className="text-2xl font-bold text-cream-light">Travel&</span>
                    <span className="text-2xl font-bold text-sand-light">Tours</span>
                </div>
                </div>
                <p className="text-ocean-mist text-sm leading-relaxed">
                Discover the world's most beautiful destinations with our premium travel experiences.
                </p>
                <div className="flex space-x-4">
                {/* Social Icons */}
                <a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                </a>
                <a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                </a>
                <a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                </a>
                <a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                </a>
                </div>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="text-lg font-semibold mb-4 text-cream-light">Quick Links</h3>
                <ul className="space-y-2">
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">About Us</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Destinations</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Travel Packages</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Blog</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Contact Us</a></li>
                </ul>
            </div>

            {/* Support */}
            <div>
                <h3 className="text-lg font-semibold mb-4 text-cream-light">Support</h3>
                <ul className="space-y-2">
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">FAQ</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Booking Help</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Cancellation Policy</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Privacy Policy</a></li>
                <li><a href="#" className="text-ocean-mist hover:text-cream-light transition duration-300 text-sm">Terms of Service</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="text-lg font-semibold mb-4 text-cream-light">Get in Touch</h3>
                <ul className="space-y-3">
                <li className="flex items-start gap-3 text-ocean-mist text-sm">
                    <svg className="w-5 h-5 text-cream-light shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Ocean Drive, Beach City, BC 12345</span>
                </li>
                <li className="flex items-center gap-3 text-ocean-mist text-sm">
                    <svg className="w-5 h-5 text-cream-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-3 text-ocean-mist text-sm">
                    <svg className="w-5 h-5 text-cream-light shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>info@Travel&Tours.com</span>
                </li>
                </ul>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-ocean/30 py-6 text-center">
            <p className="text-ocean-mist text-sm">
                &copy; {currentYear} Travel&Tours. All rights reserved. Made with ❤️ for travelers.
            </p>
            <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-ocean-mist hover:text-cream-light text-xs transition duration-300">Privacy Policy</a>
                <span className="text-ocean-mist">|</span>
                <a href="#" className="text-ocean-mist hover:text-cream-light text-xs transition duration-300">Terms of Service</a>
                <span className="text-ocean-mist">|</span>
                <a href="#" className="text-ocean-mist hover:text-cream-light text-xs transition duration-300">Cookie Policy</a>
            </div>
            </div>
        </div>
        </footer>
    );
    };

    export default Footer;