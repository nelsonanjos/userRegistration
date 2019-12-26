import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../pages/login/index';
import Main from '../pages/main/index';

import ConsultUser from '../pages/users/consult/index';
import AddUser from '../pages/users/add/index';
import EditUser from '../pages/users/edit/index';
import RemoveUser from '../pages/users/remove/index';
import Logout from '../pages/logout';

const Routes = () => {
    var logSession = JSON.parse(sessionStorage.getItem('logSession'));

    if (logSession == null) {
        sessionStorage.setItem('logSession', JSON.stringify({ status: false, user: 'userFake' }));
        window.location.href = "/";
    } else
        if (logSession.status === true) {
            return (
                <BrowserRouter>
                    <Switch>

                        <Route exact path="/" component={Main} />
                        <Route exact path="/Main" component={Main} />

                        <Route exact path="/users" component={ConsultUser} />
                        <Route exact path="/users/add" component={AddUser} />
                        <Route path="/users/edit" component={EditUser} />
                        <Route path="/users/remove" component={RemoveUser} />

                        <Route path="/logout" component={Logout} />
                    </Switch>
                </BrowserRouter>
            );
        } else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={Login} />
                    </Switch>
                </BrowserRouter >
            );
        }
}

export default Routes;