import React from 'react';
import { Link, Switch, Route, Router } from 'wouter';

import { GifsContextProvider } from './context/GifsContext';
import Home from './pages/Home/Home';
import SearchResults from './pages/SearchResults/SearchResults';
import Details from './pages/Details/Details';
import Error from './pages/Error/Error';
import './App.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <section className='App-content'>
                    <section className='title'>
                        <span>
                            <Link to='/'>GIFFES</Link>
                        </span>
                    </section>
                    <GifsContextProvider>
                        <Switch>
                            <Route path='/' component={Home} />
                            <Route
                                path='/search/:keyword'
                                component={SearchResults}
                            />
                            <Route path='/gif/:id' component={Details} />
                            <Route path='/404' component={Error} />
                        </Switch>
                    </GifsContextProvider>
                </section>
            </div>
        </Router>
    );
}

export default App;
