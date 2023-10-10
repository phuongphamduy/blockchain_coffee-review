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
import { useSelector } from 'react-redux';
function Header() {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const user = useSelector((state) => state.user);
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
                            <SearchAddress select={true} portal={true} />
                        </div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} />
                    </div>
                ) : (
                    <></>
                )}
            </Col>
            <Col>
                <div className={styles['account-section']}>
                    {Object.keys(user.user).length > 0 ? (
                        <Button variant="primary" className={styles['btn']} onClick={handleShow}>
                            Post
                        </Button>
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
                    <PostNew />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Header;
