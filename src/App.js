import React from 'react';
import { Link, Switch, Route, Router } from 'wouter';

import { GifsContextProvider } from 'context/GifsContext';
import { UserContextProvider } from 'context/UserContext';

import Header from 'components/Header/Header';
import Home from 'pages/Home/Home';
import SearchResults from 'pages/SearchResults/SearchResults';
import Details from 'pages/Details/Details';
import Login from 'pages/Login/Login';
import Error from 'pages/Error/Error';

import './App.css';

function App() {
    return (
        <Router>
            <UserContextProvider>
                <div className='App'>
                    <section className='App-content'>
                        <Header />
                        <section className='title'>
                            <span>
                                <Link to='/'>GIFFES</Link>
                            </span>
                        </section>
                        <GifsContextProvider>
                            <Switch>
                                <Route path='/' component={Home} />
                                <Route
                                    path='/search/:keyword/:rating?/:lang?'
                                    component={SearchResults}
                                />
                                <Route path='/gif/:id' component={Details} />
                                <Route path='/login' component={Login} />
                                <Route path='/404' component={Error} />
                            </Switch>
                        </GifsContextProvider>
                    </section>
                </div>
            </UserContextProvider>
        </Router>
    );
}

export default App;
