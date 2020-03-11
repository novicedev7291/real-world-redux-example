import React, { Component } from 'react';
import { Formik } from 'formik';
import { withRouter } from 'react-router-dom';
import agent from './agent';
import store from './store';
import { LOGIN } from './reducer';

class Login extends Component {
    render() {
        let self = this;
        return (
            <div className="Login__form-container">
                <Formik
                initialValues = { { email: '', password: ''} }
                onSubmit={(values, { setSubmitting }) => {
                    const {email, password} = values;
                    agent.Auth.login(email, password).then(
                        res => {
                            self.props.history.push("/");
                            store.dispatch({type: LOGIN, payload: res});
                        },
                        error => {
                            console.log(error.response.body);
                        }
                    );
                    setSubmitting(false);
                }}
                > 
                {
                    ({ values, handleSubmit, handleChange, isSubmitting }) => (
                        <form onSubmit={handleSubmit} className="Login__form">
                            <label htmlFor="email" className="Login__form-label">Email</label>
                            <input 
                            type="text" 
                            name="email" 
                            onChange={handleChange}
                            className="Login__form-input" 
                            value={values.email}
                            />
                            <label htmlFor="password" className="Login__form-label">Password</label>
                            <input 
                            type="password" 
                            name="password" 
                            onChange={handleChange}
                            className="Login__form-input" 
                            value={values.password}
                            />
                            <button type="submit" disabled={isSubmitting} className="App__btn--large">Login</button>
                        </form>
                    )
                }

                </Formik>
            </div>
        );
    }
};

export default withRouter(Login);

