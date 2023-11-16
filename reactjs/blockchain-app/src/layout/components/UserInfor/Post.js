import React, { useEffect, useState } from 'react';

import styles from './Post.module.scss';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import Trong from '~/statics/images/Trong.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import httpRequest from '~/utils/httpRequest';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

const Post = ({ posts, account }) => {
    const [show, setShow] = useState(false);
    const [prices, setPrices] = useState([]);
    const [postStatistics, setPostStatistics] = useState([]);
    const [pstatistic, setPStatistic] = useState();
    const [pricepost, setPricePost] = useState();
    const user = getUser();
    useEffect(() => {
        httpRequest
            .get('/rest/price')
            .then((res) => {
                setPrices(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        httpRequest
            .get('/rest/post/report')
            .then((res) => {
                setPostStatistics(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleClose() {
        setShow(false);
    }

    async function getPostPrice(postid) {
        await httpRequest
            .get(`/rest/pricepost/byPost/${postid}`)
            .then((res) => {
                console.log(res.data);
                setPricePost(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleOpen(id) {
        let p = postStatistics.find((item) => {
            return item[0] === id;
        });
        getPostPrice(id);
        setPStatistic(p);
        setShow(true);
    }

    async function requestPrice(priceid) {
        await httpRequest
            .post('/rest/pricepost/request', {
                idp: pstatistic[0],
                idprice: priceid,
                issend: false,
                post: { id: pstatistic[0] },
                price: { id: priceid },
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        await getPostPrice(pstatistic[0]);
    }
    return (
        <>
            <Container>
                {posts && posts.length > 0 ? (
                    <Row>
                        {posts.map((item, index) => (
                            <Col key={index} md={3}>
                                <div className={styles['post-wrapper']}>
                                    <Link to={`/post/${item.id}`} className={styles['post']}>
                                        <div className={styles['backpost-container']}>
                                            <img
                                                className={styles['backpost']}
                                                src={item.images[0].url}
                                                alt={item.name}
                                            ></img>
                                        </div>
                                        <div className={styles['info']}>
                                            <p className={styles['name']}>{item.name}</p>
                                            <p className={styles['address']}>{item.address}</p>
                                        </div>
                                        <hr className={styles['divider']} /> {/* Dấu gạch ngang */}
                                        <div>
                                            <p className={styles['description']}>{item.description}</p>
                                        </div>
                                    </Link>
                                    {user && user.id === account.id && (
                                        <Button
                                            variant="primary"
                                            className={styles['gift-btn']}
                                            onClick={() => handleOpen(item.id)}
                                        >
                                            <FontAwesomeIcon icon={faGift} className={styles['gift-icon']} />
                                            Gift
                                        </Button>
                                    )}
                                </div>
                            </Col>
                        ))}
                    </Row>
                ) : (
                    <div className={styles['post_trong']}>
                        <img src={Trong} alt="Trong"></img>
                        <p>User hasn't left any post yet.</p>
                    </div>
                )}
            </Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Phần thưởng</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles['modal-wrapper']}>
                        {prices &&
                            prices.map((item) => {
                                if (pricepost) {
                                    if (
                                        pricepost.every((pp) => {
                                            return pp.idprice !== item.id;
                                        })
                                    ) {
                                        return (
                                            <div key={item.id} className={styles['modal']}>
                                                <div className={styles['img-background']}>
                                                    <FontAwesomeIcon
                                                        icon={faGift}
                                                        className={styles['gift-icon-modal']}
                                                    />
                                                </div>
                                                <div className={styles['info']}>
                                                    <h5 className={styles['text-heading']}>Điều kiện</h5>
                                                    <p className={styles['text']}>
                                                        - Số lượng comment đạt: {item.comments} lượt
                                                    </p>
                                                    <p className={styles['text']}>
                                                        - Số lượng like đạt: {item.likes} lượt
                                                    </p>
                                                    <h5 className={styles['text-heading']}>Phần thưởng</h5>
                                                    <p className={styles['text']}>
                                                        - Đồng sols:{' '}
                                                        <span className={styles['bold']}>{item.sols} sol</span>
                                                    </p>
                                                    {pstatistic &&
                                                    pstatistic[3] >= item.comments &&
                                                    pstatistic[4] >= item.likes ? (
                                                        <div className={styles['wrapper-btn']}>
                                                            <Button
                                                                variant="primary"
                                                                className={styles['btn']}
                                                                onClick={() => requestPrice(item.id)}
                                                            >
                                                                Yêu cầu phần thưởng
                                                            </Button>
                                                        </div>
                                                    ) : (
                                                        <div className={styles['wrapper-btn']}>
                                                            <Button variant="danger" className={styles['btn']} disabled>
                                                                Không thỏa mãn điều kiện
                                                            </Button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }
                                }
                                return <></>;
                            })}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default Post;
