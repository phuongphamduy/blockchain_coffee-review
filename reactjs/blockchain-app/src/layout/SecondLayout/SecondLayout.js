import { Col, Container, Row } from 'react-bootstrap';
import styles from './SecondLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SecondLayout() {
    return (
        <>
            <div className={styles['header-background']}>
                <Container>
                    <Row>
                        <Header />
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col>Phần nội dung</Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    );
}

export default SecondLayout;
