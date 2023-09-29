import { Container, Row } from 'react-bootstrap';
import styles from './MainLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

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
            <Outlet />
            <Container>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    );
}

export default MainLayout;
