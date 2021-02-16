import React from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import useProtectRoutes from "hooks/protect-routes";
import Login from "containers/Login";
import Usuario from "containers/Usuario";

const Routes = ({ location, history }) => {
    useProtectRoutes(location, history);

    return (
        <Switch>
            <Route exact path="/authentication" component={Login} />
            <Route exact path="/" render={() => <h4>Home (nothing to do here)</h4>} />
            <Route path="/usuarios/:id?" component={Usuario} />
        </Switch>
    );
};

export default withRouter(Routes);
