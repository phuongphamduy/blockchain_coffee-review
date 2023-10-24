import { Table } from 'react-bootstrap';
import styles from './PostAdmin.module.scss';
import { useEffect, useState } from 'react';
import httpRequest from '~/utils/httpRequest';
function PostAdmin() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        httpRequest
            .get('/rest/post')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <>
            <div className={styles['postAdmin']}>
                <h1 className={styles['heading']}>Post Admin</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Create date</th>
                            <th>Creator</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts &&
                            posts.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.address}</td>
                                        <td>{item.description}</td>
                                        <td>{item.createdate}</td>
                                        <td>{item.account.fullname}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>

                {/* <div className={styles['postdetail']}>
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
                                        <p className={styles['content']}>
                                            Hôm nay mình có đến một quán cà phế để nằm trên đường Phạm Ngũ Lão và cảm
                                            thấy khá ứng ý nên là mình đăng....
                                        </p>
                                    </div>
                                </div>
                                <Row>
                                    <Col xs={4} md={4}>
                                        <div className={styles['box-image']}>
                                            <img
                                                style={{ width: '100%', height: '100%' }}
                                                src="https://fastly.4sqi.net/img/general/300x300/38664018_olOdewpB_7Yk_5SNvs70k0IbTiaXgKoKW6UY2TASJEg.jpg"
                                                alt=""
                                            ></img>
                                        </div>
                                    </Col>

                                    <Col xs={4} md={4}>
                                        <div className={styles['box-image']}>
                                            <img
                                                style={{ width: '100%', height: '100%' }}
                                                src="https://fastly.4sqi.net/img/general/300x300/38664018_olOdewpB_7Yk_5SNvs70k0IbTiaXgKoKW6UY2TASJEg.jpg"
                                                alt=""
                                            ></img>
                                        </div>
                                    </Col>

                                    <Col xs={4} md={4}>
                                        <div className={styles['box-image']}>
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
                    </div> */}
            </div>
        </>
    );
}

export default PostAdmin;
