import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';
import Repositories from './components/Repositories';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/repos/:id' render={(props) => <Repositories user={props.match.params.id} />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;