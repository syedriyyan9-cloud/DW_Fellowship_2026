    import React from 'react';
    import Card from './Card';

    const CardGrid = ({
    cards = [],
    title,
    subtitle,
    columns = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    gap = 'gap-6 md:gap-8',
    className = '',
    containerPadding = 'py-12 md:py-16',
    showHeader = true
    }) => {
    return (
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerPadding} ${className}`}>
        {/* Header */}
        {showHeader && (title || subtitle) && (
            <div className="text-center mb-10 md:mb-12">
            {subtitle && (
                <p className="text-ocean text-lg md:text-xl font-medium mb-2">{subtitle}</p>
            )}
            {title && (
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-dark">{title}</h2>
            )}
            <div className="w-24 h-1 bg-sand mx-auto mt-4 rounded-full"></div>
            </div>
        )}
        
        {/* Cards Grid */}
        <div className={`grid ${columns} ${gap}`}>
            {cards.map((card, index) => (
            <Card key={index} {...card} />
            ))}
        </div>
        </div>
    );
    };

    export default CardGrid;