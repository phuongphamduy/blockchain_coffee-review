import React, { useEffect, useState } from 'react';
import styles from './Login.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import httpRequest from '~/utils/httpRequest';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import GoogleLoginButton from './GoogleLoginButton';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { state } = useLocation();

    // lấy email và password đăng ký truyền qua
    useEffect(() => {
        if (state !== null) {
            setEmail(state.email);
            setPassword(state.password);
        }
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        if (!email || !password) {
            alert('Vui lòng nhập đầy đủ email và mật khẩu.');
            return;
        }

        try {
            const res = await httpRequest.get('/rest/account');
            const existingAccount = res.data.find(account => account.email === email);
            if (existingAccount) {
                if (existingAccount.password === password) {
                    alert('Đăng nhập thành công');
                    sessionStorage.setItem('user', JSON.stringify(existingAccount));
                    navigate('/post');
                } else {
                    alert('Sai mật khẩu.');
                }
            } else {
                alert('Không có tài khoản có email bạn nhập.');
            }
        } catch (error) {
            console.error(error);
            alert('Kết nối server thất bại. Vui lòng thử lại sau.');
        }
    }

    return (
        <div className={styles['background-color']}>
            <div className="container">
                <div className={styles['full-height']}>
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-auto">
                        <div className="card border-0 shadow rounded-3 my-5 ">
                            <div className="card-body p-4 p-sm-5">
                                <h5 className="card-title text-center mb-5 fw-light fs-1 fw-bold">Sign In</h5>
                                <form onSubmit={handleSubmit}>
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
                                        <GoogleLoginButton>

                                            <button
                                                className="btn btn-google btn-login text-uppercase fw-bold bg-danger text-white fs-4"
                                                type="submit"
                                            >
                                                <FontAwesomeIcon icon={faGoogle} />
                                                <span style={{ marginLeft: '8px' }}></span> Sign in with Google
                                            </button>
                                        </GoogleLoginButton>
                                    </div>
                                    <div className="d-grid">
                                        <button
                                            className="btn btn-facebook btn-login text-uppercase fw-bold bg-primary text-white fs-4"
                                            type="submit"
                                        >
                                            <FontAwesomeIcon icon={faFacebookF} />
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