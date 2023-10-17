import { Container, Row, Col } from "react-bootstrap";
import styles from './PostAdmin.module.scss'
function PostAdmin() {
    return (
        <>
            <Container>
                <div className={styles['postAdmin']}>
                    <h1 className="text-center">Post Admin</h1>

                    <div className={styles['postdetail']}>
                        <Row xs={{ span: 24 }} md={{ span: 6 }} lg={{ span: 3 }}>
                            <div className={styles['box-account']}>

                                <div className="container-account" style={{ width: '95%', margin: 'auto' }}>
                                    <div className="row" style={{ display: 'inline' }}>
                                        <img
                                            src="https://th.bing.com/th/id/OIP.qBks8TKpCJCW3vQSKK2ScwHaGy?pid=ImgDet&rs=1"
                                            alt=""
                                            className="avartar-account"
                                            style={{ width: '70px', height: '50px' }}
                                        />
                                        <span style={{ fontSize: '20px' }}>Name Account</span>
                                        <p className={styles['content']}>Hôm nay mình có đến một quán cà phế để nằm trên đường Phạm Ngũ Lão và cảm thấy khá ứng ý nên là mình đăng....</p>
                                    </div>

                                </div>
                            <Row>
                                <Col xs={4} md={4}>
                                    <div
                                        className={styles['box-image']}
                                    >
                                        <img
                                            style={{ width: '100%', height: '100%' }}
                                            src="https://fastly.4sqi.net/img/general/300x300/38664018_olOdewpB_7Yk_5SNvs70k0IbTiaXgKoKW6UY2TASJEg.jpg"
                                            alt=""
                                        ></img>
                                    </div>
                                </Col>

                                <Col xs={4} md={4}>
                                    <div
                                        className={styles['box-image']}
                                    >
                                        <img
                                            style={{ width: '100%', height: '100%' }}
                                            src="https://fastly.4sqi.net/img/general/300x300/38664018_olOdewpB_7Yk_5SNvs70k0IbTiaXgKoKW6UY2TASJEg.jpg"
                                            alt=""
                                        ></img>
                                    </div>
                                </Col>

                                <Col xs={4} md={4}>
                                    <div
                                        className={styles['box-image']}
                                    >
                                        <img
                                            style={{ width: '100%', height: '100%' }}
                                            src="https://fastly.4sqi.net/img/general/300x300/38664018_olOdewpB_7Yk_5SNvs70k0IbTiaXgKoKW6UY2TASJEg.jpg"
                                            alt=""
                                        ></img>
                                    </div>
                                </Col>


                            </Row>
                            </div>
                        </Row>

                        

                    </div>
                </div>

            </Container>

        </>
    );
}

export default PostAdmin;
