import React from 'react';
import { Link, Route } from 'wouter';

import Home from './pages/Home/Home';
import GifsList from './components/GifsList/GifsList';
import Details from './pages/Details/Details';
import './App.css';

function App() {
    return (
        <div className='App'>
            <section className='title'>GIFFES</section>
            <section className='App-content'>
                <Link to='/search/panda'>panda gifs</Link>
                <Link to='/search/monkey'>monkeys gifs</Link>
                <Link to='/search/racoon'>racoon gifs</Link>
                <Link to='/search/christmas'>christmas gifs</Link>
                <Route path='/' component={Home} />
                <Route path='/search/:keyword' component={GifsList} />
                <Route path='/gif/:id' component={Details} />
            </section>
        </div>
    );
}

export default App;
