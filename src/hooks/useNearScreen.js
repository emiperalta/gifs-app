import { useState, useEffect, useRef } from 'react';

const useNearScreen = ({ distance = '100px' } = {}) => {
    const [isNear, setIsNear] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const onChange = (entries, observer) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setIsNear(true);
                observer.disconnect();
            }
        };

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance,
        });

        observer.observe(elementRef.current);

        return () => observer.disconnect();
    });

    return { isNear, elementRef };
};

export default useNearScreen;
