const { REACT_APP_API_KEY, REACT_APP_API_BASEURL } = process.env;

export const getGifs = ({ keyword } = {}) => {
    const apiURL = `${REACT_APP_API_BASEURL}/gifs/search?api_key=${REACT_APP_API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response;

            if (Array.isArray(data)) {
                const gifsArray = data.map(img => {
                    const { id, title } = img;
                    const { url } = img.images.downsized_medium;
                    return { id, title, url };
                });
                return gifsArray;
            }
        });
};

export const getTrendingTerms = () => {
    const apiURL = `${REACT_APP_API_BASEURL}/trending/searches?api_key=${REACT_APP_API_KEY}`;

    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const { data = [] } = response;

            return data;
        });
};
