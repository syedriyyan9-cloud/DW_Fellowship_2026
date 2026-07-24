    import React, { useState } from 'react';
    import CardGrid from '../components/Card/CardGrid.jsx';

    const PackagesPage = () => {
    const [filter, setFilter] = useState('all');

    const allPackages = [
        {
        imageUrl: '/packages_images/p1.jpg',
        title: 'Tropical Paradise Escape',
        description: 'Experience the ultimate beach getaway with crystal clear waters and white sandy beaches.',
        price: 899,
        rating: 4.8,
        location: 'Maldives',
        duration: '7 Days / 6 Nights',
        badge: 'Best Seller',
        badgeColor: 'bg-ocean',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/packages_images/p2.jpg',
        title: 'Alpine Mountain Adventure',
        description: 'Conquer the majestic peaks and enjoy breathtaking views on this thrilling expedition.',
        price: 1299,
        rating: 4.9,
        location: 'Swiss Alps',
        duration: '10 Days / 9 Nights',
        badge: 'Premium',
        badgeColor: 'bg-sunset',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/packages_images/p3.jpg',
        title: 'Cultural Explorer Japan',
        description: 'Immerse yourself in ancient traditions, cuisine, and architecture of historic cities.',
        price: 749,
        rating: 4.7,
        location: 'Japan',
        duration: '8 Days / 7 Nights',
        badge: 'Popular',
        badgeColor: 'bg-coral',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/packages_images/p4.jpg',
        title: 'African Safari Expedition',
        description: 'Witness majestic wildlife in their natural habitat on an unforgettable safari.',
        price: 1599,
        rating: 4.9,
        location: 'Kenya',
        duration: '12 Days / 11 Nights',
        badge: 'Limited',
        badgeColor: 'bg-ocean-dark',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/packages_images/p5.jpg',
        title: 'Greek Island Hopping',
        description: 'Discover hidden gems and pristine beaches across multiple tropical islands.',
        price: 1099,
        rating: 4.6,
        location: 'Greece',
        duration: '9 Days / 8 Nights',
        badge: 'New',
        badgeColor: 'bg-sand-dark',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/packages_images/p6.jpg',
        title: 'Northern Lights Adventure',
        description: 'Witness the spectacular aurora borealis and explore the Arctic wilderness.',
        price: 1899,
        rating: 4.9,
        location: 'Norway',
        duration: '8 Days / 7 Nights',
        badge: 'Bucket List',
        badgeColor: 'bg-ocean-deep',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/packages_images/p7.jpg',
        title: 'Italian Romance Tour',
        description: 'Experience the romance of Italy with visits to Venice, Florence, and Rome.',
        price: 1349,
        rating: 4.8,
        location: 'Italy',
        duration: '10 Days / 9 Nights',
        badge: 'Romantic',
        badgeColor: 'bg-coral',
        buttonText: 'View Package'
        },
        {
        imageUrl: '/packages_images/p8.jpg',
        title: 'Australian Adventure',
        description: 'Explore the diverse landscapes of Australia from Sydney to the Outback.',
        price: 1699,
        rating: 4.7,
        location: 'Australia',
        duration: '14 Days / 13 Nights',
        badge: 'Adventure',
        badgeColor: 'bg-ocean',
        buttonText: 'View Package'
        }
    ];

    // Filter packages based on badge
    const filteredPackages = filter === 'all' 
        ? allPackages 
        : allPackages.filter(pkg => pkg.badge.toLowerCase() === filter.toLowerCase());

    const filters = ['all', 'best seller', 'premium', 'popular', 'adventure', 'romantic', 'new', 'limited'];

    return (
        <div className="py-8 md:py-12 bg-cream-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-ocean-dark mb-4">
                Tour Packages
            </h1>
            <p className="text-sand-dark text-lg max-w-2xl mx-auto">
                Choose from our carefully curated tour packages designed for every type of traveler.
            </p>
            <div className="w-24 h-1 bg-sand mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filterOption) => (
                <button
                key={filterOption}
                onClick={() => setFilter(filterOption)}
                className={`px-4 py-2 rounded-lg capitalize transition duration-300 text-sm font-medium ${
                    filter === filterOption
                    ? 'bg-ocean text-white shadow-md'
                    : 'bg-cream-warm text-ocean-dark hover:bg-ocean/10 border border-sand'
                }`}
                >
                {filterOption}
                </button>
            ))}
            </div>

            <CardGrid 
            cards={filteredPackages}
            columns="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            showHeader={false}
            containerPadding="py-0"
            />
        </div>
        </div>
    );
    };

    export default PackagesPage;