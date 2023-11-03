// src/components/ProductCard.js
import UserInfor from '~/statics/images/user_cafe.webp';
import { Container, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import styles from './UserInfor.module.scss';

const List = ({ saved, liked }) => {
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
                                    <h5 className={styles['product-name']}>saved places</h5>
                                    {saved && saved.length > 0 ? (
                                        <p className={styles['product-intro']}>
                                            {saved && saved.length} places including
                                            {saved.map((item) => {
                                                return <span key={item.id}> {item.postname}</span>;
                                            })}
                                        </p>
                                    ) : (
                                        <p className={styles['product-intro']}>0 places</p>
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
                                    <h5 className={styles['product-name']}>liked places</h5>
                                    <p className={styles['product-intro']}>
                                        {liked && liked.length} places including{' '}
                                        {liked.map((item) => {
                                            return <span key={item[1].id}> {item[1].name}</span>;
                                        })}
                                    </p>
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
