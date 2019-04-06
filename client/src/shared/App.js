import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Root, Signin, Signup, NotFound } from 'routes';

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={Root}></Route>
            <Route path='/signin' component={Signin}></Route>
            <Route path='/signup' component={Signup}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    );
};

export default App;