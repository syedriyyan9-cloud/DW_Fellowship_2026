    import React from 'react';
    import ImageTextComponent from '../components/ImageText/ImageTextComponent.jsx';
    import CardGrid from '../components/Card/CardGrid.jsx';
    import SignUpForm from '../components/Signup/SignUpForm.jsx';

    const HomePage = () => {
    // Sample data for tour packages
    const tourPackages = [
        {
        imageUrl: '/homepage_images/p1.jpg', // Add your image URL
        title: 'Tropical Paradise Escape',
        description: 'Experience the ultimate beach getaway with crystal clear waters, white sandy beaches, and luxurious accommodations.',
        price: 899,
        rating: 4.8,
        location: 'Maldives',
        duration: '7 Days / 6 Nights',
        badge: 'Best Seller',
        badgeColor: 'bg-ocean',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/homepage_images/p2.jpg', // Add your image URL
        title: 'Alpine Mountain Adventure',
        description: 'Conquer the majestic peaks and enjoy breathtaking views on this thrilling mountain expedition with expert guides.',
        price: 1299,
        rating: 4.9,
        location: 'Swiss Alps',
        duration: '10 Days / 9 Nights',
        badge: 'Premium',
        badgeColor: 'bg-sunset',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/homepage_images/p3.jpg', // Add your image URL
        title: 'Cultural Explorer Japan',
        description: 'Immerse yourself in ancient traditions, exquisite cuisine, and stunning architecture of historic Japanese cities.',
        price: 749,
        rating: 4.7,
        location: 'Japan',
        duration: '8 Days / 7 Nights',
        badge: 'Popular',
        badgeColor: 'bg-coral',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/homepage_images/p4.jpg', // Add your image URL
        title: 'African Safari Expedition',
        description: 'Witness the majestic wildlife in their natural habitat on an unforgettable safari through the savannah.',
        price: 1599,
        rating: 4.9,
        location: 'Kenya',
        duration: '12 Days / 11 Nights',
        badge: 'Limited',
        badgeColor: 'bg-ocean-dark',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/homepage_images/p5.jpg', // Add your image URL
        title: 'Greek Island Hopping',
        description: 'Discover hidden gems and pristine beaches across multiple tropical islands with authentic local experiences.',
        price: 1099,
        rating: 4.6,
        location: 'Greece',
        duration: '9 Days / 8 Nights',
        badge: 'New',
        badgeColor: 'bg-sand-dark',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/homepage_images/p6.jpg', // Add your image URL
        title: 'Northern Lights Adventure',
        description: 'Witness the spectacular aurora borealis and explore the Arctic wilderness on this once-in-a-lifetime journey.',
        price: 1899,
        rating: 4.9,
        location: 'Norway',
        duration: '8 Days / 7 Nights',
        badge: 'Bucket List',
        badgeColor: 'bg-ocean-deep',
        buttonText: 'View Package'
        }
    ];

    const handleSignUpSuccess = (formData) => {
        console.log('New user signed up:', formData);
        // Here you would typically send data to your backend
    };

    return (
        <>
        {/* Hero Section */}
        <section id="home" className="relative">
            <ImageTextComponent imageProps={{ imageUrl: '/homepage_images/hero_image.jpg', altText: 'Hero Image', height: 'h-96 md:h-[500px] lg:h-[600px]', rounded: 'rounded-none', shadow: 'shadow-none', overlay: true, overlayColor: 'bg-ocean-dark/30' }}
            textProps={{ title: 'Discover Your Next Adventure', subtitle: 'Explore the world with Travel&Tours', description: 'From pristine beaches to mountain peaks, we curate unforgettable travel experiences tailored just for you.', titleColor: 'text-white', subtitleColor: 'text-cream-warm', descriptionColor: 'text-cream-light', dividerColor: 'bg-cream-warm', alignment: 'text-left' }}
            className="relative bg-gradient-to-r from-ocean-deep to-ocean-dark"
            >
            <div className="flex flex-wrap gap-4 mt-6">
                <button className="bg-cream-warm text-ocean-dark px-8 py-3 rounded-lg hover:bg-cream-light transition duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore Tours
                </button>
                <button className="border-2 border-cream-warm text-cream-warm hover:bg-cream-warm/10 px-8 py-3 rounded-lg transition duration-300 font-medium backdrop-blur-sm">
                Learn More
                </button>
            </div>
            </ImageTextComponent>
        </section>

        {/* About Section */}
        <section id="about" className="bg-cream-warm py-12 md:py-16">
            <ImageTextComponent
            imageProps={{imageUrl: '/homepage_images/about_image.jpg', altText: "About Us - Travel&Tours", height: "h-72 md:h-96", rounded: "rounded-2xl", shadow: "shadow-lg", overlay: false}}
            textProps={{title: "Creating Unforgettable Memories Since 2010", subtitle: "About Travel&Tours", description: "With over a decade of experience, we've helped thousands of travelers discover the world's most beautiful destinations. Our expert team is passionate about creating personalized experiences that exceed expectations. We believe that travel is not just about the destination, but the journey and memories created along the way.", titleColor: "text-ocean-dark", subtitleColor: "text-ocean", descriptionColor: "text-sand-dark", alignment: "text-left", showDivider: true, dividerColor: "bg-sand", reverse: true}}
            
            >
            <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-cream-light px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-ocean" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-ocean-dark font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-cream-light px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-ocean" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-ocean-dark font-medium">500+ Happy Travelers</span>
                </div>
                <div className="flex items-center gap-2 bg-cream-light px-4 py-2 rounded-lg shadow-sm">
                <svg className="w-5 h-5 text-ocean" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-ocean-dark font-medium">50+ Destinations</span>
                </div>
            </div>
            </ImageTextComponent>
        </section>

        {/* Tour Packages Section */}
        <section id="packages" className="py-12 md:py-16 bg-cream-light">
            <CardGrid
            title="Our Tour Packages"
            subtitle="Hand-picked experiences for every traveler"
            cards={tourPackages}
            columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            gap="gap-6 md:gap-8"
            containerPadding="py-0"
            showHeader={true}
            />
        </section>

        {/* Sign Up Section */}
        <section id="contact" className="py-16 bg-gradient-to-b from-cream-warm to-sand-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6">
                <div className="w-16 h-1 bg-ocean rounded-full"></div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-dark leading-tight">
                    Ready to Explore the World?
                </h2>
                <p className="text-sand-dark text-lg">
                    Join our community of passionate travelers and get exclusive access to special deals, travel tips, and inspirational content delivered straight to your inbox.
                </p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-ocean-dark">
                    <svg className="w-5 h-5 text-ocean flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Exclusive member-only discounts</span>
                    </div>
                    <div className="flex items-center gap-3 text-ocean-dark">
                    <svg className="w-5 h-5 text-ocean flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Early access to new packages</span>
                    </div>
                    <div className="flex items-center gap-3 text-ocean-dark">
                    <svg className="w-5 h-5 text-ocean flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Travel tips and insider guides</span>
                    </div>
                </div>
                </div>
                
                {/* Sign Up Form */}
                <SignUpForm 
                title="Start Your Adventure"
                subtitle="Sign up for exclusive deals and travel inspiration"
                buttonText="Sign Up Now"
                onSuccess={handleSignUpSuccess}
                />
            </div>
            </div>
        </section>
        </>
    );
    };

    export default HomePage;