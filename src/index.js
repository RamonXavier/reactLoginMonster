import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import ComponenteDePagina404 from './ComponenteDePagina404';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/home" component={Home} />
            {/* <Route path="*" component={ComponenteDePagina404} /> */}
        </Switch>
    </BrowserRouter>, 
document.getElementById('root'));
serviceWorker.unregister();
