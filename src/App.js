import React from 'react';
import { Link, Route, Router } from 'wouter';

import { GifsContextProvider } from './context/GifsContext';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import Details from './pages/Details/Details';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <section className='title'>
                    <span>
                        <Link to='/'>GIFFES</Link>
                    </span>
                </section>
                <GifsContextProvider>
                    <section className='App-content'>
                        <Route path='/' component={Home} />
                        <Route
                            path='/search/:keyword'
                            component={SearchResults}
                        />
                        <Route path='/gif/:id' component={Details} />
                    </section>
                </GifsContextProvider>
            </div>
        </Router>
    );
}

export default App;
