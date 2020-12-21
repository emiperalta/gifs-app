import React from 'react';
import { Route, Router } from 'wouter';

import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import Details from './pages/Details/Details';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <section className='title'>GIFFES</section>
                <section className='App-content'>
                    <Route path='/' component={Home} />
                    <Route path='/search/:keyword' component={SearchResults} />
                    <Route path='/gif/:id' component={Details} />
                </section>
            </div>
        </Router>
    );
}

export default App;
