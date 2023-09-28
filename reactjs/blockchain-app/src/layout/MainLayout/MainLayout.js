import { Col, Container, Row } from 'react-bootstrap';
import './MainLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MainLayout() {
    return (
        <>
            <Container>
                <Row>
                    <Header />
                </Row>
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
