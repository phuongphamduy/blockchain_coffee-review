import React from 'react';
import styles from './Signup.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import Logo_Coffe from '~/statics/images/Logo_Coffe.png';

function RegisterForm() {
    return (
        <div className={styles['background-color']}>
            <div className={styles['full-height']}>
                <div className="row">
                    <div className="col-lg-5 col-xl-12 mx-auto p-5">
                        <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden col-lg-5 m-auto">
                            <div className="card-img-left d-none d-md-flex col-lg-6">
                                {/* Background image for card set in CSS! */}
                                <img src={Logo_Coffe} alt="Images" className={styles['card-img-left']} />
                            </div>
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-1 fw-bold text-primary">
                                    Register
                                </h5>
                                <form>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control fs-3"
                                            id="floatingInputUsername"
                                            placeholder="myusername"
                                            required
                                            autoFocus
                                        />
                                        <label htmlFor="floatingInputUsername">Username</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="email"
                                            className="form-control fs-3"
                                            id="floatingInputEmail"
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="floatingInputEmail">Email address</label>
                                    </div>

                                    <hr />

                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control fs-3"
                                            id="floatingPassword"
                                            placeholder="Password"
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input
                                            type="password"
                                            className="form-control fs-3"
                                            id="floatingPasswordConfirm"
                                            placeholder="Confirm Password"
                                        />
                                        <label htmlFor="floatingPasswordConfirm">Confirm Password</label>
                                    </div>

                                    <div className="d-grid mb-2">
                                        <button
                                            className="btn btn-lg btn-primary btn-login fw-bold text-uppercase"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                    </div>

                                    <a className="d-block text-center mt-2 small fs-4">Have an account? Sign In</a>

                                    <hr className="my-4" />

                                    <div className="d-grid mb-2">
                                        <button
                                            className="btn btn-lg btn-google btn-login fw-bold text-uppercase text-white bg-danger"
                                            type="submit"
                                        >
                                            <FontAwesomeIcon icon={faGoogle} />{' '}
                                            <span style={{ marginLeft: '8px' }}></span> Sign up with Google
                                        </button>
                                    </div>

                                    <div className="d-grid">
                                        <button
                                            className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase text-white bg-primary"
                                            type="submit"
                                        >
                                            <FontAwesomeIcon icon={faFacebookF} />{' '}
                                            <span style={{ marginLeft: '8px' }}></span> Sign up with Facebook
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

export default RegisterForm;
