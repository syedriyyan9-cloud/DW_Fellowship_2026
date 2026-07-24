    import React from 'react';
    import CardGrid from '../components/Card/CardGrid.jsx';

    const DestinationsPage = () => {
    const destinations = [
        {
        imageUrl: '/destinations_images/p1.jpg',
        title: 'Bali, Indonesia',
        description: 'Experience the island of gods with stunning temples, rice terraces, and vibrant culture.',
        price: 649,
        rating: 4.7,
        location: 'Southeast Asia',
        duration: '6 Days',
        badge: 'Trending',
        badgeColor: 'bg-ocean',
        buttonText: 'Explore'
        },
        {
        imageUrl: '/destinations_images/p2.jpg',
        title: 'Santorini, Greece',
        description: 'Famous for its stunning sunsets, white-washed buildings, and crystal clear waters.',
        price: 899,
        rating: 4.8,
        location: 'Mediterranean',
        duration: '5 Days',
        badge: 'Popular',
        badgeColor: 'bg-sunset',
        buttonText: 'Explore'
        },
        {
        imageUrl: '/destinations_images/p3.jpg',
        title: 'Machu Picchu, Peru',
        description: 'Explore the ancient Incan citadel set high in the Andes Mountains with guided tours.',
        price: 1199,
        rating: 4.9,
        location: 'South America',
        duration: '8 Days',
        badge: 'Adventure',
        badgeColor: 'bg-coral',
        buttonText: 'Explore'
        },
        {
        imageUrl: '/destinations_images/p4.jpg',
        title: 'Dubai, UAE',
        description: 'Discover modern architecture, luxury shopping, and desert adventures in this futuristic city.',
        price: 799,
        rating: 4.6,
        location: 'Middle East',
        duration: '5 Days',
        badge: 'Luxury',
        badgeColor: 'bg-ocean-dark',
        buttonText: 'Explore'
        },
        {
        imageUrl: '/destinations_images/p5.jpg',
        title: 'Paris, France',
        description: 'Fall in love with the city of lights, art, culture, and world-class cuisine.',
        price: 999,
        rating: 4.9,
        location: 'Europe',
        duration: '7 Days',
        badge: 'Romantic',
        badgeColor: 'bg-coral',
        buttonText: 'Explore'
        },
        {
        imageUrl: '/destinations_images/p6.jpg',
        title: 'Phuket, Thailand',
        description: 'Enjoy pristine beaches, vibrant nightlife, and delicious Thai cuisine on this tropical island.',
        price: 549,
        rating: 4.5,
        location: 'Southeast Asia',
        duration: '5 Days',
        badge: 'Budget',
        badgeColor: 'bg-sand-dark',
        buttonText: 'Explore'
        }
    ];

    return (
        <div className="py-8 md:py-12 bg-cream-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-ocean-dark mb-4">
                Our Destinations
            </h1>
            <p className="text-sand-dark text-lg max-w-2xl mx-auto">
                Discover the most beautiful places around the world with our curated destination collection.
            </p>
            <div className="w-24 h-1 bg-sand mx-auto mt-4 rounded-full"></div>
            </div>
            <CardGrid 
            cards={destinations}
            columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            showHeader={false}
            containerPadding="py-0"
            />
        </div>
        </div>
    );
    };

    export default DestinationsPage;