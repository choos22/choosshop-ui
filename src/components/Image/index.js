import { forwardRef, useState } from 'react';
import images from '~/assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const hanlderError = () => {
        setFallback(images.avatarUser);
    };

    return <img ref={ref} src={fallback || src} alt={alt} {...props} onError={hanlderError} />;
});

export default Image;
