// src/components/ProductCard.js
import UserInfor from '~/statics/images/user_cafe.webp';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import styles from './UserInfor.module.scss';

const List = ({ favorites }) => {
    const [count, setCount] = useState();
    useEffect(() => {
        let c = 0;
        favorites &&
            favorites.forEach((item) => {
                c++;
            });
        setCount(c);
    }, []);
    return (
        <Container>
            <div className={styles.container_card}>
                <div className={styles.recentlist}>
                    <h2>Recent lists:</h2>
                </div>
                <Row>
                    <Col xs={4} md={3}>
                        <div>
                            <div className={styles['product-card']}>
                                <div className={styles['product-image']}>
                                    <img src={UserInfor} alt="Product" />
                                </div>
                                <div className={styles['product-info']}>
                                    <h5 className={styles['product-name']}>My likes places</h5>
                                    {favorites && favorites.length > 0 ? (
                                        <p className={styles['product-intro']}>
                                            1 places including
                                            {favorites.map((item) => {
                                                return <span key={item.id}> {item.postname}</span>;
                                            })}
                                        </p>
                                    ) : (
                                        <p>0 places</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md={3}>
                        <div>
                            <div className={styles['product-card']}>
                                <div className={styles['product-image']}>
                                    <img src={UserInfor} alt="Product" />
                                </div>
                                <div className={styles['product-info']}>
                                    <h5 className={styles['product-name']}>My saved places</h5>
                                    <p className={styles['product-intro']}>1 places including ...</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};
export default List;
