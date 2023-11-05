import { Col, Row } from 'react-bootstrap';
import styles from './HeaderAdmin.module.scss';
import Logo from '~/statics/images/Logo_Coffe.png';
import NoImage from '~/statics/images/noImg.png';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'



function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'))
    }
    return null;
}

function handleSignOut(){
    sessionStorage.removeItem("user");
}

function HeaderAdmin() {
    const user = getUser();
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
                        <Link to="/post" className={styles['logo-section']}>
                            <img src={Logo} className={styles['header-logo']} alt="Logo" />
                            <h1>Coffee Review</h1>
                        </Link>
                        <div className={styles['account-section']}>
                            <img src={NoImage} className={styles['img']} alt="img" />
                            {/* <h4><span className={styles['user-name']}>{user.fullname}</span></h4> */}
                            <>
                                <Tippy
                                    placement="bottom-end"
                                    interactive
                                    trigger="mouseenter"
                                    render={(attrs) => {
                                        return (
                                            <div className={styles['menu-user']} tabIndex="-1" {...attrs}>
                                                <ul className={styles['list']}>
                                                    <li className={styles['item']}>
                                                        <Link
                                                            className={styles['link']}
                                                            to={`/userinfo/${user && user.id}`}
                                                        >
                                                            Profile
                                                        </Link>
                                                    </li>
                                                    <li className={styles['item']}>
                                                        <Link className={styles['link']} to={'/editProfile'}>
                                                            Edit information
                                                        </Link>
                                                    </li>
                                                    {user && user.isadmin && (
                                                        <li className={styles['item']}>
                                                            <Link to="/post" className={styles['link']}>
                                                                Home
                                                            </Link>
                                                        </li>
                                                    )}

                                                    <li className={styles['item']}>
                                                        <Link className={styles['link']} onClick={handleSignOut}>
                                                            Sign out
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        );
                                    }}
                                >
                                    <h4>

                                    <span className={styles['user-name']}>{user.fullname}</span>
                                    </h4>
                                </Tippy>
                            </>

                        </div>
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default HeaderAdmin;
