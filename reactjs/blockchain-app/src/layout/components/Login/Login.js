import React, { useState } from 'react';
import Style from './Login.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import httpRequest from '~/utils/httpRequest';
import { useDispatch } from 'react-redux';
import { Login } from '~/redux/user';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        const res = await httpRequest.post('/rest/account', { email, password });
        if (res.data) {
            dispatch(Login(res.data));
            navigate('/post');
        }
    }

    return (
        <div className="container">
            <div className="row ${styles['full-height']}">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-auto">
                    <div className="card border-0 shadow rounded-3 my-5  ${styles['card-background']}">
                        <div className="card-body p-4 p-sm-5">
                            <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                            <form>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingInput"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="floatingPassword"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="form-check mb-3">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="rememberPasswordCheck"
                                    />
                                    <label className="form-check-label" htmlFor="rememberPasswordCheck">
                                        Remember password
                                    </label>
                                </div>
                                <div className="d-grid">
                                    <button
                                        className="btn btn-primary btn-login text-uppercase fw-bold"
                                        onClick={handleSubmit}
                                    >
                                        Sign in
                                    </button>
                                </div>
                                <hr className="my-4" />
                                <div className="d-grid mb-2">
                                    <button className="btn btn-google btn-login text-uppercase fw-bold" type="submit">
                                        <i className="fab fa-google me-2"></i> Sign in with Google
                                    </button>
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-facebook btn-login text-uppercase fw-bold" type="submit">
                                        <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
