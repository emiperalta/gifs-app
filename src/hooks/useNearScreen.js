import { useState, useEffect, useRef } from 'react';

const useNearScreen = ({
    distance = '100px',
    externalRef,
    once = true,
} = {}) => {
    const [isNear, setIsNear] = useState(false);
    const elementRef = useRef();

    useEffect(() => {
        const element = externalRef ? externalRef.current : elementRef.current;

        const onChange = (entries, observer) => {
            const el = entries[0];
            if (el.isIntersecting) {
                setIsNear(true);
                once && observer.disconnect();
            } else !once && setIsNear(false);
        };

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance,
        });

        element && observer.observe(element);

        return () => observer && observer.disconnect();
    });

    return { isNear, elementRef };
};

export default useNearScreen;
