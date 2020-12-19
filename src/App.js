import React, { useState, useEffect } from 'react';

import Gif from './components/Gif';
import { getGifs } from './services/api';
import './App.css';

function App() {
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        getGifs({ keyword: 'cyberpunk2077' }).then(gifs => setGifs(gifs));
    }, []);

    return (
        <div className='App'>
            <section className='App-content'>
                {gifs.map(gif => (
                    <Gif gif={gif} key={gif.id} />
                ))}
            </section>
        </div>
    );
}

export default App;
