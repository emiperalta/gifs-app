import { useEffect, useRef } from 'react';

const useSEO = ({ title, description }) => {
    const prevTitle = useRef(document.title);
    const prevDescription = useRef(
        document.querySelector('meta[name="description"]').getAttribute('content')
    );

    // for title
    useEffect(() => {
        const previousTitle = prevTitle.current;

        document.title = `${title} | Giffes`;

        return () => (document.title = previousTitle);
    }, [title]);

    // for meta description
    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]');
        const previousDescription = prevDescription.current;

        if (description) {
            metaDescription.setAttribute('content', description);
        }

        return () => metaDescription.setAttribute('content', previousDescription);
    }, [description]);
};

export default useSEO;

// ps: using react-helmet instead of this custom hook
