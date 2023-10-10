import { Col, Container, Row } from 'react-bootstrap';
import styles from './AdminLayout.module.scss';
import Footer from '../components/Footer';
import { NavLink, Outlet } from 'react-router-dom';
import HeaderAdmin from '../components/admin/HeaderAdmin';

function AdminLayout() {
    return (
        <>
            <div className={styles['header-background']}>
                <Container>
                    <Row>
                        <HeaderAdmin />
                    </Row>
                </Container>
            </div>
            <div className={styles['body-background']}>
                <Container>
                    <Row>
                        <Col sm={3}>
                            <div className={styles['sidebar-section']}>
                                <h2>Admin Menu</h2>
                                <ul className={styles['sidebar-menu']}>
                                    <li className={styles['sidebar-menu-item']}>
                                        <NavLink to="account" 
                                            className={({ isActive }) => {
                                                return isActive ? styles['active'] : styles['link'];
                                            }}>Quản lý tài khoản
                                        </NavLink>
                                    </li>
                                    <li className={styles['sidebar-menu-item']}>
                                        <NavLink to="post" 
                                            className={({ isActive }) => {
                                                return isActive ? styles['active'] : styles['link'];
                                            }}>Quản lý bài đăng
                                        </NavLink>
                                    </li>
                                    <li className={styles['sidebar-menu-item']}>
                                        <NavLink to="statistic" 
                                            className={({ isActive }) => {
                                                return isActive ? styles['active'] : styles['link'];
                                            }}>Thống kê
                                        </NavLink>
                                    </li>
                                    <li className={styles['sidebar-menu-item']}>
                                        <NavLink to="allowPost" 
                                            className={({ isActive }) => {
                                                return isActive ? styles['active'] : styles['link'];
                                            }}>Duyệt bài
                                        </NavLink>
                                    </li>
                                    <li className={styles['sidebar-menu-item']}>
                                        <NavLink to="reportFeedback" 
                                            className={({ isActive }) => {
                                                return isActive ? styles['active'] : styles['link'];
                                            }}>Báo cáo & Phản hồi
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={9}>
                            <Outlet />
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Footer />
                </Row>
            </Container>
        </>
    );
}

export default AdminLayout;
