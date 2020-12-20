import React from 'react';
import { Link, Route } from 'wouter';

import GifsList from './components/GifsList';
import './App.css';

function App() {
    return (
        <div className='App'>
            <section className='App-content'>
                <Link to='/gif/panda'>panda gifs</Link>
                <Link to='/gif/monkey'>monkeys gifs</Link>
                <Link to='/gif/racoon'>racoon gifs</Link>
                <Link to='/gif/christmas'>christmas gifs</Link>
                <Route path='/gif/:keyword' component={GifsList} />
            </section>
        </div>
    );
}

export default App;
