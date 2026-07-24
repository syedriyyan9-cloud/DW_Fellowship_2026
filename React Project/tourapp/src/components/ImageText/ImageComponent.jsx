    import React from 'react';

    const ImageComponent = ({ 
    imageUrl = '', 
    altText = 'Travel image',
    width = 'w-full',
    height = 'h-64 md:h-80 lg:h-96',
    rounded = 'rounded-xl',
    shadow = 'shadow-lg',
    objectFit = 'object-cover',
    className = '',
    overlay = false,
    overlayColor = 'bg-ocean-dark/20'
    }) => {
    return (
        <div className={`relative ${width} ${height} ${rounded} ${shadow} overflow-hidden ${className}`}>
        {imageUrl ? (
            <img 
            src={imageUrl}
            alt={altText}
            className={`w-full h-full ${objectFit}`}
            />
        ) : (
            <div className={`w-full h-full bg-gradient-to-br from-ocean-mist to-sand-light flex items-center justify-center`}>
            <svg className="w-16 h-16 text-ocean/30" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="ml-2 text-ocean/40 text-sm font-medium">Image Placeholder</span>
            </div>
        )}
        
        {overlay && (
            <div className={`absolute inset-0 ${overlayColor} ${rounded}`}></div>
        )}
        </div>
    );
    };

    export default ImageComponent;