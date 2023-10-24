import styles from './Header.module.scss';
import { Button, Col, Form, InputGroup, Modal } from 'react-bootstrap';
import Logo from '~/statics/images/Logo_Coffe.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '@reach/combobox/styles.css';
import { useEffect, useState } from 'react';
import PostNew from '../PostNew';
import SearchAddress from '~/components/SearchAddress';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import _ from 'lodash';
import httpRequest from '~/utils/httpRequest';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

function Header() {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [isConnect, setIsConnect] = useState(false);
    const user = getUser();
    const isPhantomInstalled = window.phantom?.solana?.isPhantom;
    var provider = null;
    const [place, setPlace] = useState('');
    const [listPlace, setListPlace] = useState([]);

    useEffect(() => {
        var debounce = _.debounce(() => {
            httpRequest
                .get('/rest/post/get/places', { params: { name: place } })
                .then((res) => {
                    setListPlace(res.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);
        debounce();

        return () => {
            debounce.cancel();
        };
    }, [place]);

    const getProvider = () => {
        if ('phantom' in window) {
            const provider = window.phantom?.solana;

            if (provider?.isPhantom) {
                return provider;
            }
        }
    };

    if (user) {
        if (!isPhantomInstalled) {
            alert('Hãy cài ví Phantom để có trải nghiệm tốt nhất');
            window.open('https://phantom.app/', '_blank');
        }
    }

    // hàm xử lý đăng nhập
    function handleLogin() {}

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }

    function handleDownloadPhantom() {
        window.open('https://phantom.app/', '_blank');
    }

    async function handleConnect() {
        provider = getProvider();
        try {
            const resp = await provider.request({ method: 'connect' });
            setIsConnect(provider.isConnected);
            console.log(resp.publicKey.toString());
        } catch (err) {
            // { code: 4001, message: 'User rejected the request.' }
        }
    }

    async function handleDisconnect() {
        provider = getProvider();
        await provider.request({ method: 'disconnect' });
        setIsConnect(provider.isConnected);
    }

    function handleSignOut() {
        sessionStorage.removeItem('user');
    }
    return (
        <>
            <Col className={styles['d-flex']}>
                <Link to="/" className={styles['logo-section']}>
                    <img src={Logo} className={styles['header-logo']} alt="Logo" />
                    <h1>Coffee Review</h1>
                </Link>
                {location.pathname.includes('/post') ? (
                    <div className={styles['search-section']}>
                        <Tippy
                            // visible
                            interactive
                            trigger="focusin"
                            placement="bottom-end"
                            render={(attrs) => {
                                return (
                                    <div className={styles['box']} tabIndex="-1" {...attrs}>
                                        <ul className={styles['list']}>
                                            {listPlace &&
                                                listPlace.map((item) => {
                                                    return (
                                                        <li key={item.id} className={styles['item']}>
                                                            <Link to={`/post/${item.id}`} className={styles['link']}>
                                                                {item.name}
                                                                <div className={styles['address']}>{item.address}</div>
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                );
                            }}
                        >
                            <InputGroup className="" size="lg">
                                <Form.Control
                                    className={styles['input']}
                                    placeholder="I'm looking for..."
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value)}
                                />
                            </InputGroup>
                        </Tippy>
                        <div>
                            <SearchAddress portal={true} width="180px" />
                        </div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} />
                    </div>
                ) : (
                    <></>
                )}
            </Col>
            <Col>
                <div className={styles['account-section']}>
                    {user && Object.keys(user).length > 0 && !isPhantomInstalled ? (
                        <Button className={styles['btn-down']} onClick={handleDownloadPhantom}>
                            Download Phantom
                        </Button>
                    ) : (
                        <></>
                    )}
                    {user && Object.keys(user).length > 0 && isPhantomInstalled ? (
                        <>
                            {isConnect ? (
                                <>
                                    <Button className={styles['btn-down']} onClick={handleDisconnect}>
                                        Disconnect wallet
                                    </Button>
                                    <Button variant="primary" className={styles['btn']} onClick={handleShow}>
                                        Post
                                    </Button>
                                    {/* <span className={styles['number-sol']}>0 Sol</span> */}
                                </>
                            ) : (
                                <Button className={styles['btn-down']} onClick={handleConnect}>
                                    Connect to phantom wallet
                                </Button>
                            )}
                        </>
                    ) : (
                        <></>
                    )}
                    {user && Object.keys(user).length > 0 ? (
                        <>
                            <Tippy
                                placement="bottom-end"
                                interactive
                                trigger="mouseenter"
                                render={(attrs) => {
                                    return (
                                        <div className={styles['menu-user']} tabIndex="-1" {...attrs}>
                                            <ul className={styles['list']}>
                                                <li className={styles['item']}>
                                                    <Link className={styles['link']} to={'/userinfo'}>
                                                        Profile
                                                    </Link>
                                                </li>
                                                <li className={styles['item']}>
                                                    <Link className={styles['link']} to={'/editProfile'}>
                                                        Edit information
                                                    </Link>
                                                </li>
                                                {user && user.isadmin && (
                                                    <li className={styles['item']}>
                                                        <Link to="/admin" className={styles['link']}>
                                                            Admin
                                                        </Link>
                                                    </li>
                                                )}

                                                <li className={styles['item']}>
                                                    <Link className={styles['link']} onClick={handleSignOut}>
                                                        Sign out
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    );
                                }}
                            >
                                <span className={styles['user-name']}>Welcome back {user.fullname}</span>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className={styles['btn']} onClick={handleLogin}>
                                Login
                            </Link>
                            <Link to="/signUp" className={styles['btn']}>
                                Sign up
                            </Link>
                        </>
                    )}
                </div>
            </Col>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a new post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <PostNew close={handleClose} />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;
