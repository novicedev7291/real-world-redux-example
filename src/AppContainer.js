import React, { Component } from 'react';
import { Header } from './Header';
import { Switch, Route } from 'react-router-dom';
import { Invite } from './Invite';
import Login from './Login';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';

class AppContainer extends Component {
    render() {
        return (
            <div className="App__Container">
                <Header />
                <section className="App__Container--main-view">
                    <div>
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route exact path="/" component={Invite} />
                                <Route path="/invite" component={Invite} />
                                <Route path="/login" component={Login} />
                            </Switch>
                        </ConnectedRouter>
                    </div>
                </section>
                <footer className="App__footer">This is footer</footer>
            </div>
        );
    }
};

export default AppContainer;