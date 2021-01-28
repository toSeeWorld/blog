import React from 'react';
import {HashRouter,Redirect, Route,Switch} from 'react-router-dom';
import Login from '../pages/user/Login';
import Index from '../layout/Index'
class PageRouter extends React.PureComponent {
    render() {
        return (
            <HashRouter >
                <Switch>
                    <Route path="/" exact render={()=>(<Redirect to="/index" />)} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/index"  component={Index} />
                </Switch>
            </HashRouter>
        )
    }
}
export default PageRouter;