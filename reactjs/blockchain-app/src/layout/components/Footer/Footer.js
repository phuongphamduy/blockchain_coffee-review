import styles from './Footer.module.scss';
import { Alert, Col } from 'react-bootstrap';
function Footer() {
    return (
        <>
            <Col>
                <Alert variant="secondary" className={styles['footer-text']}>
                    Đây là trang web được phát triển bởi sinh viên FPOLY
                </Alert>
            </Col>
        </>
    );
}

export default Footer;
