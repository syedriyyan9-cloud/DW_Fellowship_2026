    import React, { useState } from 'react';

    const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div className="py-8 md:py-12 bg-cream-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ocean-dark mb-4">
                Contact Us
            </h1>
            <p className="text-sand-dark text-lg max-w-2xl mx-auto">
                Have questions about our tours or need help planning your trip? We're here to help!
            </p>
            <div className="w-24 h-1 bg-sand mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
                <div className="bg-cream-warm rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ocean-dark mb-6">Get in Touch</h2>
                
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-ocean-dark">Address</h3>
                        <p className="text-sand-dark text-sm">123 Ocean Drive, Beach City, BC 12345</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-ocean-dark">Phone</h3>
                        <p className="text-sand-dark text-sm">+1 (555) 123-4567</p>
                        <p className="text-sand-dark text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-ocean-dark">Email</h3>
                        <p className="text-sand-dark text-sm">info@Travel&Tours.com</p>
                        <p className="text-sand-dark text-sm">support@Travel&Tours.com</p>
                    </div>
                    </div>

                    <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-semibold text-ocean-dark">Working Hours</h3>
                        <p className="text-sand-dark text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sand-dark text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                        <p className="text-sand-dark text-sm">Sunday: Closed</p>
                    </div>
                    </div>
                </div>
                </div>

                <div className="bg-cream-warm rounded-2xl shadow-lg p-6 md:p-8">
                <h3 className="text-xl font-bold text-ocean-dark mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center hover:shadow-lg transition duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center hover:shadow-lg transition duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center hover:shadow-lg transition duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-ocean to-ocean-dark rounded-lg flex items-center justify-center hover:shadow-lg transition duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    </a>
                </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-cream-warm rounded-2xl shadow-lg p-6 md:p-8">
                <h2 className="text-2xl font-bold text-ocean-dark mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label className="block text-sm font-medium text-ocean-dark mb-1">
                    Full Name
                    </label>
                    <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition duration-300 bg-cream-light text-ocean-dark placeholder:text-sand-dark/50"
                    placeholder="John Doe"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-ocean-dark mb-1">
                    Email Address
                    </label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition duration-300 bg-cream-light text-ocean-dark placeholder:text-sand-dark/50"
                    placeholder="john@example.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-ocean-dark mb-1">
                    Subject
                    </label>
                    <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition duration-300 bg-cream-light text-ocean-dark placeholder:text-sand-dark/50"
                    placeholder="How can we help you?"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-ocean-dark mb-1">
                    Message
                    </label>
                    <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-sand focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition duration-300 bg-cream-light text-ocean-dark placeholder:text-sand-dark/50 resize-none"
                    placeholder="Tell us about your travel plans..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={isSubmitted}
                    className={`w-full py-3 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg ${
                    isSubmitted
                        ? 'bg-ocean/50 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-ocean to-ocean-dark hover:from-ocean-dark hover:to-ocean-deep text-white'
                    }`}
                >
                    {isSubmitted ? 'Message Sent!' : 'Send Message'}
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ContactPage;