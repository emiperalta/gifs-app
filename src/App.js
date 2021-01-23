import React from 'react';
import { Switch, Route, Router } from 'wouter';

import { GifsContextProvider } from 'context/GifsContext';
import { UserContextProvider } from 'context/UserContext';

import Header from 'components/Header';

import Home from 'pages/Home';
import SearchResults from 'pages/SearchResults';
import Details from 'pages/Details';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Error from 'pages/Error';

import './App.css';

function App() {
    return (
        <Router>
            <UserContextProvider>
                <div className='App'>
                    <section className='App-content'>
                        <Header />
                        <GifsContextProvider>
                            <Switch>
                                <Route path='/' component={Home} />
                                <Route
                                    path='/search/:keyword/:rating?/:lang?'
                                    component={SearchResults}
                                />
                                <Route path='/gif/:id' component={Details} />
                                <Route path='/login' component={Login} />
                                <Route path='/register' component={Register} />
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
