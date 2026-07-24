    import React from 'react';

    const Card = ({
    imageUrl,
    title,
    description,
    price,
    rating,
    location,
    duration,
    badge,
    badgeColor = 'bg-ocean',
    buttonText = 'Learn More',
    onButtonClick,
    className = '',
    imageHeight = 'h-48 md:h-56',
    rounded = 'rounded-xl',
    shadow = 'shadow-lg hover:shadow-xl',
    hoverEffect = 'hover:-translate-y-1'
    }) => {
    return (
        <div className={`bg-cream-light ${rounded} ${shadow} ${hoverEffect} transition-all duration-300 overflow-hidden ${className}`}>
        {/* Image Section */}
        <div className={`relative ${imageHeight} overflow-hidden`}>
            {imageUrl ? (
            <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
            />
            ) : (
            <div className="w-full h-full bg-gradient-to-br from-ocean-mist to-sand-light flex items-center justify-center">
                <svg className="w-12 h-12 text-ocean/30" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
            </div>
            )}
            
            {/* Badge */}
            {badge && (
            <div className={`absolute top-4 left-4 ${badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-md`}>
                {badge}
            </div>
            )}
            
            {/* Rating */}
            {rating && (
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold">{rating}</span>
            </div>
            )}
        </div>
        
        {/* Content Section */}
        <div className="p-5 md:p-6">
            {/* Location & Duration */}
            {(location || duration) && (
            <div className="flex items-center gap-4 text-sm text-ocean mb-2">
                {location && (
                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{location}</span>
                </div>
                )}
                {duration && (
                <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{duration}</span>
                </div>
                )}
            </div>
            )}
            
            {/* Title */}
            <h3 className="text-xl md:text-2xl font-bold text-ocean-dark mb-2">
            {title}
            </h3>
            
            {/* Description - Updated to use sand-dark */}
            {description && (
            <p className="text-sand-dark text-sm md:text-base mb-4 line-clamp-2">
                {description}
            </p>
            )}
            
            {/* Price & Button */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-sand-light">
            {price && (
                <div>
                <span className="text-2xl font-bold text-ocean-dark">${price}</span>
                <span className="text-sand-dark text-sm ml-1">/ person</span>
                </div>
            )}
            <button
                onClick={onButtonClick}
                className="bg-ocean text-white px-4 py-2 rounded-lg hover:bg-ocean-dark transition duration-300 text-sm font-medium shadow-md hover:shadow-lg"
            >
                {buttonText}
            </button>
            </div>
        </div>
        </div>
    );
    };

    export default Card;