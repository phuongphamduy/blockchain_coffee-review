import styles from './Header.module.scss';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import Logo from '~/statics/images/Logo_Coffe.png';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Header() {
    const location = useLocation();
    return (
        <>
            <Col className={styles['d-flex']}>
                <div className={styles['logo-section']}>
                    <img src={Logo} className={styles['header-logo']} alt="Logo" />
                    <h1>Coffee Review</h1>
                </div>
                {location.pathname === '/' ? (
                    <></>
                ) : (
                    <div className={styles['search-section']}>
                        <InputGroup className="" size="lg">
                            <Form.Control className={styles['input']} placeholder="I'm looking for..." />
                        </InputGroup>
                        <InputGroup className="ms-2" size="lg">
                            <Form.Control className={styles['input']} placeholder="Address..." />
                        </InputGroup>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} />
                    </div>
                )}
            </Col>
            <Col>
                <div className={styles['account-section']}>
                    <Button variant="outline-primary" className={styles['btn']}>
                        Login
                    </Button>
                    <Button variant="outline-warning" className={styles['btn']}>
                        Sign up
                    </Button>
                </div>
            </Col>
        </>
    );
}

export default Header;
