import styles from './Header.module.scss';
import { Button, Col, Form, InputGroup, Modal } from 'react-bootstrap';
import Logo from '~/statics/images/Logo_Coffe.png';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '@reach/combobox/styles.css';
import { useState } from 'react';
import PostNew from '../PostNew';
import SearchAddress from '~/components/SearchAddress';

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
    return (
        <>
            <Col className={styles['d-flex']}>
                <Link to="/" className={styles['logo-section']}>
                    <img src={Logo} className={styles['header-logo']} alt="Logo" />
                    <h1>Coffee Review</h1>
                </Link>
                {location.pathname.includes('/post') ? (
                    <div className={styles['search-section']}>
                        <InputGroup className="" size="lg">
                            <Form.Control className={styles['input']} placeholder="I'm looking for..." />
                        </InputGroup>
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

                            <span className={styles['user-name']}>Welcome back {user.fullname}</span>
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
