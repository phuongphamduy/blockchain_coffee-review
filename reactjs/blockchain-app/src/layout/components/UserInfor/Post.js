import React from 'react';

import styles from './Post.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Trong from '~/statics/images/Trong.png';

const Post = ({ posts }) => {
    return (
        <Container>
            {posts && posts.length > 0 ? (
                <Row>
                    {posts.map((item, index) => (
                        <Col key={index} md={3}>
                            <div className={styles['post']}>
                                <div className={styles['backpost-container']}>
                                    <img className={styles['backpost']} src={item.images[0].url} alt={item.name}></img>
                                </div>
                                <div className={styles['info']}>
                                    <p className={styles['name']}>{item.name}</p>
                                    <p className={styles['address']}>{item.address}</p>
                                </div>
                                <hr className={styles['divider']} /> {/* Dấu gạch ngang */}
                                <div>
                                    <p className={styles['description']}>{item.description}</p>
                                </div>
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
    );
};

export default Post;
