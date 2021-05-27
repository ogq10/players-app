import React from 'react';
import {Home, Dashboard, SignIn} from './components'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import './styles.css'
//routing 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home title ='Mecca of Soccer' />
                </Route>

                <Route path='/Dashboard' component={Dashboard} />

                <Route path='/SignIn' component={SignIn} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();