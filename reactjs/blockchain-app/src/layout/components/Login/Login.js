import React, { useState } from 'react';
import styles from './Login.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import httpRequest from '~/utils/httpRequest';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await httpRequest.post('/rest/account', { email, password });
            if (res.data) {
                sessionStorage.setItem('user', JSON.stringify(res.data));
                navigate('/post');
            }
        } catch (error) {
            alert('Kết nối server thất bại');
        }
    }

    return (
        <div className={styles['background-color']}>
            <div className="container">
                <div className={styles['full-height']}>
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-auto">
                        <div className="card border-0 shadow rounded-3 my-5  ${styles['card-background']}">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-1 fw-bold">Sign In</h5>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control fs-3"
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
                                            className="form-control fs-3"
                                            id="floatingPassword"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-check mb-5">
                                        <input
                                            className="form-check-input "
                                            type="checkbox"
                                            value=""
                                            id="rememberPasswordCheck"
                                        />

                                        <label className="form-check-label fs-4" htmlFor="rememberPasswordCheck">
                                            Remember password
                                        </label>
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            className="btn btn-primary btn-login text-uppercase fw-bold fs-4"
                                            onClick={handleSubmit}
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                    <hr className="my-4" />
                                    <div className="d-grid mb-2">
                                        <button
                                            className="btn btn-google btn-login text-uppercase fw-bold bg-danger text-white fs-4"
                                            type="submit"
                                        >
                                            <FontAwesomeIcon icon={faGoogle} />{' '}
                                            <span style={{ marginLeft: '8px' }}></span> Sign in with Google
                                        </button>
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-facebook btn-login text-uppercase fw-bold bg-primary text-white fs-4"
                                            type="submit"
                                        >
                                            <FontAwesomeIcon icon={faFacebookF} />{' '}
                                            <span style={{ marginLeft: '8px' }}></span> Sign in with Facebook
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
