import { Col, Container, Row } from 'react-bootstrap';
import './SecondLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SecondLayout() {
    return (
        <>
            <Container>
                <Row>
                    <Header />
                </Row>
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
