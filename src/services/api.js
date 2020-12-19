export const getGifs = async ({ keyword = 'panda' } = {}) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

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
