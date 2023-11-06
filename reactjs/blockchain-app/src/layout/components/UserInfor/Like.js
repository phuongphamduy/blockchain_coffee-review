import React from 'react';

import styles from './Post.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Trong from '~/statics/images/Trong.png';

const Like = ({ liked }) => {
    return (
        <Container>
            {liked && liked.length > 0 ? (
                <Row>
                    {liked.map((item, index) => (
                        <Col key={index} md={3}>
                            <div className={styles['post']}>
                                <div className={styles['backpost-container']}>
                                    <img
                                        className={styles['backpost']}
                                        src={item[1].images[0].url}
                                        height="150px"
                                        alt={item[1].name}
                                    ></img>
                                </div>
                                <div className={styles['info']}>
                                    <p className={styles['name']}>{item[1].name}</p>
                                    <p className={styles['address']}>{item[1].address}</p>
                                </div>
                                <hr className={styles['divider']} /> {/* Dấu gạch ngang */}
                                <div>
                                    <p className={styles['description']}>{item[1].description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            ) : (
                <div className={styles['like_trong']}>
                    <img src={Trong} alt="Trong"></img>
                    <p>User hasn't left any like yet.</p>
                </div>
            )}
        </Container>
    );
};

export default Like;
