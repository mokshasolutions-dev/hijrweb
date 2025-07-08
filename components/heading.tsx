   import React from 'react';

   type HeadingProps = {
     as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
     className?: string;
     children: string;
   };

   const Heading: React.FC<HeadingProps> = ({ as = 'h2', className, children }: HeadingProps) => {
     const Component = as;

     const baseStyles = 'font-bold tracking-tight';
     const headingStyles = {
       h1: 'font-bold',
       h2: 'text-3xl md:text-4xl',
       h3: 'text-2xl md:text-3xl',
       h4: 'text-xl md:text-2xl',
       h5: 'text-lg md:text-xl',
       h6: 'text-base md:text-lg',
     };

     const combinedStyles = `${baseStyles} ${headingStyles[as]} ${className || ''}`;

     return <Component className={combinedStyles}>{children}</Component>;
   };

   export default Heading;