    import React from 'react';
    import ImageTextComponent from '../components/ImageText/ImageTextComponent.jsx';

    const AboutPage = () => {
    return (
        <div className="py-8 md:py-12 bg-cream-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-ocean-dark mb-4">
                About Travel&Tours
            </h1>
            <p className="text-sand-dark text-lg max-w-2xl mx-auto">
                Learn more about our story, mission, and the team behind your unforgettable travel experiences.
            </p>
            <div className="w-24 h-1 bg-sand mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Our Story Section */}
            <div className="mb-16">
            <ImageTextComponent
                imageProps={{ imageUrl: '/about_images/p1.PNG', altText: "Our Story", height: "h-72 md:h-96", rounded: "rounded-2xl", shadow: "shadow-lg", overlay: false}}
                textProps={{title: "Our Story", subtitle: "Since 2010", description: "Travel&Tours was founded with a simple mission: to make travel accessible, memorable, and transformative for everyone. What started as a small group of passionate travelers has grown into a global community of adventure seekers. We believe that travel has the power to change lives, broaden perspectives, and create connections that last a lifetime. Our team works tirelessly to curate experiences that go beyond the ordinary, ensuring every journey is as unique as the traveler.", titleColor: "text-ocean-dark", subtitleColor: "text-ocean", descriptionColor: "text-sand-dark", alignment: "text-left",showDivider: true, dividerColor: "bg-sand", reverse: false}}
                
            />
            </div>

            {/* Mission Section */}
            <div className="mb-16">
            <ImageTextComponent
            imageProps={{imageUrl: '/about_images/p2.PNG', altText: "Our Mission", height: "h-72 md:h-96", rounded: "rounded-2xl", shadow: "shadow-lg", overlay: false}}
            textProps={{title: "Our Mission", subtitle: "What Drives Us", description: "Our mission is to create unforgettable travel experiences that inspire, educate, and connect people to the world around them. We're committed to sustainable tourism practices that protect the destinations we love and support local communities. Every tour we design is crafted with care, ensuring that our travelers not only see the sights but truly experience the culture, cuisine, and heart of each destination.", titleColor: "text-ocean-dark", subtitleColor: "text-ocean", descriptionColor: "text-sand-dark", alignment: "text-left", showDivider: true, dividerColor: "bg-sand", reverse: true}}    
            />
            </div>

            {/* Values Section */}
            <div className="mb-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">
                Our Core Values
                </h2>
                <div className="w-24 h-1 bg-sand mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-cream-warm rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean to-ocean-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-ocean-dark mb-2">Authenticity</h3>
                <p className="text-sand-dark text-sm">
                    We believe in genuine experiences that connect you with the heart of every destination.
                </p>
                </div>

                <div className="bg-cream-warm rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean to-ocean-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-ocean-dark mb-2">Sustainability</h3>
                <p className="text-sand-dark text-sm">
                    We're committed to responsible tourism that protects environments and supports local communities.
                </p>
                </div>

                <div className="bg-cream-warm rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean to-ocean-dark rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-ocean-dark mb-2">Passion</h3>
                <p className="text-sand-dark text-sm">
                    We're driven by a genuine love for travel and a desire to share that joy with our community.
                </p>
                </div>
            </div>
            </div>

            {/* Team Section */}
            <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ocean-dark mb-4">
                Meet Our Team
            </h2>
            <p className="text-sand-dark text-lg max-w-2xl mx-auto">
                Our dedicated team of travel experts is here to help you plan your perfect journey.
            </p>
            <div className="w-24 h-1 bg-sand mx-auto mt-4 rounded-full"></div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-cream-warm rounded-xl shadow-md p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-ocean-mist to-sand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-ocean/40" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-ocean-dark">Sarah Johnson</h3>
                <p className="text-ocean text-sm font-medium mb-2">CEO & Founder</p>
                <p className="text-sand-dark text-sm">15+ years of travel experience</p>
                </div>

                <div className="bg-cream-warm rounded-xl shadow-md p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-ocean-mist to-sand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-ocean/40" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-ocean-dark">Michael Chen</h3>
                <p className="text-ocean text-sm font-medium mb-2">Head of Operations</p>
                <p className="text-sand-dark text-sm">10+ years in tourism</p>
                </div>

                <div className="bg-cream-warm rounded-xl shadow-md p-6">
                <div className="w-24 h-24 bg-gradient-to-br from-ocean-mist to-sand-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-ocean/40" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                </div>
                <h3 className="text-xl font-bold text-ocean-dark">Emily Rodriguez</h3>
                <p className="text-ocean text-sm font-medium mb-2">Lead Travel Consultant</p>
                <p className="text-sand-dark text-sm">8+ years of experience</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default AboutPage;