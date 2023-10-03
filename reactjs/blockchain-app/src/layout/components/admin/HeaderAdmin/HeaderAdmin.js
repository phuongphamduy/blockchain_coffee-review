import { Col, Row } from 'react-bootstrap';
import styles from './HeaderAdmin.module.scss';
import Logo from '~/statics/images/Logo_Coffe.png';
import NoImage from '~/statics/images/noImg.png';
function HeaderAdmin() {
    return (
        <>
            <Row>
                <Col sm={3}>
                    <div className={styles['heading-section']}>
                        <h1 className={styles['text']}>Trang quản lý</h1>
                    </div>
                </Col>
                <Col sm={9}>
                    <div className={styles['left-section']}>
                        <div className={styles['logo-section']}>
                            <img src={Logo} className={styles['header-logo']} alt="Logo" />
                            <h1>Coffee Review</h1>
                        </div>
                        <div className={styles['account-section']}>
                            <img src={NoImage} className={styles['img']} alt="img" />
                            <h4>Phương Phạm</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default HeaderAdmin;
