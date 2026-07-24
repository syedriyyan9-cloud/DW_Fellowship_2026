    import React, { useState } from 'react';

    const SignUpForm = ({
    title = 'Start Your Adventure',
    subtitle = 'Sign up for exclusive deals and travel inspiration',
    buttonText = 'Sign Up',
    className = '',
    onSuccess
    }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        agreeTerms: false
    });
    
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error for this field
        if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the terms';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
        }
        
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setSuccess(true);
        if (onSuccess) onSuccess(formData);
        // Reset form after 3 seconds
        setTimeout(() => {
            setFormData({ name: '', email: '', password: '', agreeTerms: false });
            setSuccess(false);
        }, 3000);
        }, 1500);
    };

    return (
        <div className={`bg-cream-light rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 ${className}`}>
        <div className="max-w-md mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-ocean to-ocean-dark rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-ocean-dark">{title}</h2>
            <p className="text-sand-dark mt-2">{subtitle}</p>
            </div>

            {/* Success Message - Updated with palette colors */}
            {success && (
            <div className="mb-6 p-4 bg-ocean-mist/20 border border-ocean rounded-lg text-ocean-dark text-center">
                <svg className="w-6 h-6 mx-auto mb-2 text-ocean" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="font-medium">Successfully signed up!</p>
                <p className="text-sm text-ocean-dark/80">Welcome to Travel&Tours!</p>
            </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
                <label className="block text-sm font-medium text-ocean-dark mb-1">
                Full Name
                </label>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-coral' : 'border-sand'} focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition duration-300 bg-cream-light text-ocean-dark placeholder:text-sand-dark/50`}
                placeholder="John Doe"
                disabled={isSubmitting || success}
                />
                {errors.name && <p className="text-coral text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
                <label className="block text-sm font-medium text-ocean-dark mb-1">
                Email Address
                </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-coral' : 'border-sand'} focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition duration-300 bg-cream-light text-ocean-dark placeholder:text-sand-dark/50`}
                placeholder="john@example.com"
                disabled={isSubmitting || success}
                />
                {errors.email && <p className="text-coral text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
                <label className="block text-sm font-medium text-ocean-dark mb-1">
                Password
                </label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.password ? 'border-coral' : 'border-sand'} focus:border-ocean focus:ring-2 focus:ring-ocean/20 outline-none transition duration-300 bg-cream-light text-ocean-dark placeholder:text-sand-dark/50`}
                placeholder="••••••••"
                disabled={isSubmitting || success}
                />
                {errors.password && <p className="text-coral text-sm mt-1">{errors.password}</p>}
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start">
                <div className="flex items-center h-5">
                <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className={`w-4 h-4 text-ocean rounded border-sand focus:ring-ocean focus:ring-2 ${errors.agreeTerms ? 'border-coral' : ''}`}
                    disabled={isSubmitting || success}
                />
                </div>
                <div className="ml-3 text-sm">
                <label className="text-sand-dark">
                    I agree to the{' '}
                    <a href="#" className="text-ocean hover:text-ocean-dark font-medium transition duration-300">
                    Terms of Service
                    </a>
                    {' '}and{' '}
                    <a href="#" className="text-ocean hover:text-ocean-dark font-medium transition duration-300">
                    Privacy Policy
                    </a>
                </label>
                {errors.agreeTerms && <p className="text-coral text-sm mt-1">{errors.agreeTerms}</p>}
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting || success}
                className={`w-full py-3 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg ${
                isSubmitting || success
                    ? 'bg-sand cursor-not-allowed text-sand-dark'
                    : 'bg-gradient-to-r from-ocean to-ocean-dark hover:from-ocean-dark hover:to-ocean-deep text-white'
                }`}
            >
                {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Signing up...
                </span>
                ) : (
                buttonText
                )}
            </button>

            {/* Login Link */}
            <p className="text-center text-sm text-sand-dark">
                Already have an account?{' '}
                <a href="#" className="text-ocean hover:text-ocean-dark font-medium transition duration-300">
                Log in
                </a>
            </p>
            </form>
        </div>
        </div>
    );
    };

    export default SignUpForm;