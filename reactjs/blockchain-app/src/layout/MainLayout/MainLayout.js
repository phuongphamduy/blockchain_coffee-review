import { Col, Container, Row } from 'react-bootstrap';
import styles from './MainLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
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
                    <Col>post section</Col>
                    <Col>Map section</Col>
                </Row>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    );
}

export default MainLayout;
