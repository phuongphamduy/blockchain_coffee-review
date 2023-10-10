import styles from './Header.module.scss';
import { Button, Col, Form, InputGroup, Modal } from 'react-bootstrap';
import Logo from '~/statics/images/Logo_Coffe.png';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import '@reach/combobox/styles.css';
import { useState } from 'react';
import httpRequest from '~/utils/httpRequest';
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
    const [pubKey, setPubKey] = useState(null);
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
    function handleLogin() {
        httpRequest
            .get('/rest/account')
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }

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
            setPubKey(resp.publicKey.toString());
        } catch (err) {
            // { code: 4001, message: 'User rejected the request.' }
        }
    }

    async function handleDisconnect() {
        provider = getProvider();
        await provider.request({ method: 'disconnect' });
        setIsConnect(provider.isConnected);
        setPubKey(null);
    }
    return (
        <>
            <Col className={styles['d-flex']}>
                <div className={styles['logo-section']}>
                    <img src={Logo} className={styles['header-logo']} alt="Logo" />
                    <h1>Coffee Review</h1>
                </div>
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
                                <Button className={styles['btn-down']} onClick={handleDisconnect}>
                                    Disconnect wallet
                                </Button>
                            ) : (
                                <Button className={styles['btn-down']} onClick={handleConnect}>
                                    Connect to phantom wallet
                                </Button>
                            )}

                            <Button variant="primary" className={styles['btn']} onClick={handleShow}>
                                Post
                            </Button>
                            <span className={styles['user-name']}>Welcome back {user.fullname}</span>
                        </>
                    ) : (
                        <>
                            <Button variant="outline-primary" className={styles['btn']} onClick={handleLogin}>
                                Login
                            </Button>
                            <Button variant="outline-warning" className={styles['btn']}>
                                Sign up
                            </Button>
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
