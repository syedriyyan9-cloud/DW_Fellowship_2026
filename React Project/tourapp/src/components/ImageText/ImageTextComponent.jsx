    import React from 'react';
    import ImageComponent from './ImageComponent';
    import TextComponent from './TextComponent';

    const ImageTextContainer = ({
    imageProps,
    textProps,
    reverse = false,
    containerPadding = 'py-12 md:py-16 lg:py-20',
    gap = 'gap-8 lg:gap-12',
    className = '',
    children
    }) => {
    return (
        <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerPadding} ${className}`}>
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center ${gap}`}>
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
            <ImageComponent {...imageProps} />
            </div>
            
            {/* Text Section */}
            <div className="w-full lg:w-1/2">
            <TextComponent {...textProps}>
                {children}
            </TextComponent>
            </div>
        </div>
        </div>
    );
    };

    export default ImageTextContainer;