import React from 'react';
import {Home, Dashboard, SignIn} from './components'
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux';
import { store } from './redux/store'
import './styles.css'
import 'firebase/auth';
import { FirebaseAppProvider, AuthCheck } from 'reactfire'; 
import { firebaseConfig } from './firebaseConfig' 


//routing 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


ReactDOM.render(
    <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}> 
        <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home title ='Mecca of Soccer' />
                </Route>

                <Route path='/Dashboard' component={Dashboard} />

                <Route path='/SignIn' component={SignIn} />
            </Switch>
        </Router>
        </Provider>
        </FirebaseAppProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();