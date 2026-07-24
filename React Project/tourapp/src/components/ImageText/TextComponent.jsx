    import React from 'react';

    const TextComponent = ({
    title,
    subtitle,
    description,
    titleSize = 'text-3xl md:text-4xl lg:text-5xl',
    titleColor = 'text-ocean-dark',
    subtitleSize = 'text-lg md:text-xl',
    subtitleColor = 'text-ocean',
    descriptionSize = 'text-base md:text-lg',
    descriptionColor = 'text-sand-dark', // Changed from gray-600 to sand-dark for better palette integration
    alignment = 'text-left',
    spacing = 'space-y-4',
    className = '',
    children,
    showDivider = true,
    dividerColor = 'bg-sand',
    dividerWidth = 'w-20'
    }) => {
    return (
        <div className={`${alignment} ${spacing} ${className}`}>
        {subtitle && (
            <p className={`${subtitleSize} ${subtitleColor} font-medium`}>
            {subtitle}
            </p>
        )}
        
        {title && (
            <h2 className={`${titleSize} ${titleColor} font-bold leading-tight`}>
            {title}
            </h2>
        )}
        
        {showDivider && (
            <div className={`${dividerColor} ${dividerWidth} h-1 rounded-full`}></div>
        )}
        
        {description && (
            <p className={`${descriptionSize} ${descriptionColor} leading-relaxed max-w-2xl`}>
            {description}
            </p>
        )}
        
        {children}
        </div>
    );
    };

    export default TextComponent;