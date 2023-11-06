import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import avt from '~/statics/images/noImg.png';
import styles from './Follow.module.scss';
import Trong from '~/statics/images/Trong.png';
import { Link } from 'react-router-dom';
const Following = ({ following }) => {
    return (
        <>
            {following && following.length > 0 ? (
                <div className={styles['Follow']}>
                    <Row className={styles['follow-row']} lg={following.length > 4 && 4}>
                        {following.map((item) => (
                            <Col key={item.following.id}>
                                <Link to={`/userinfo/${item.following.id}`} style={{ textDecoration: 'none' }}>
                                    <Card className={styles['follow-card']}>
                                        <div className={styles['user-info']}>
                                            <img
                                                src={avt}
                                                alt={item.following.fullname}
                                                className={styles['user-image']}
                                            />
                                            <div className={styles['user-details']}>
                                                <Card.Title>{item.following.fullname}</Card.Title>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                        {following.map((item) => (
                            <Col key={item.following.id}>
                                <Link to={`/userinfo/${item.following.id}`} style={{ textDecoration: 'none' }}>
                                    <Card className={styles['follow-card']}>
                                        <div className={styles['user-info']}>
                                            <img
                                                src={avt}
                                                alt={item.following.fullname}
                                                className={styles['user-image']}
                                            />
                                            <div className={styles['user-details']}>
                                                <Card.Title>{item.following.fullname}</Card.Title>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                        {following.map((item) => (
                            <Col key={item.following.id}>
                                <Link to={`/userinfo/${item.following.id}`} style={{ textDecoration: 'none' }}>
                                    <Card className={styles['follow-card']}>
                                        <div className={styles['user-info']}>
                                            <img
                                                src={avt}
                                                alt={item.following.fullname}
                                                className={styles['user-image']}
                                            />
                                            <div className={styles['user-details']}>
                                                <Card.Title>{item.following.fullname}</Card.Title>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                        {following.map((item) => (
                            <Col key={item.following.id}>
                                <Link to={`/userinfo/${item.following.id}`} style={{ textDecoration: 'none' }}>
                                    <Card className={styles['follow-card']}>
                                        <div className={styles['user-info']}>
                                            <img
                                                src={avt}
                                                alt={item.following.fullname}
                                                className={styles['user-image']}
                                            />
                                            <div className={styles['user-details']}>
                                                <Card.Title>{item.following.fullname}</Card.Title>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                        {following.map((item) => (
                            <Col key={item.following.id}>
                                <Link to={`/userinfo/${item.following.id}`} style={{ textDecoration: 'none' }}>
                                    <Card className={styles['follow-card']}>
                                        <div className={styles['user-info']}>
                                            <img
                                                src={avt}
                                                alt={item.following.fullname}
                                                className={styles['user-image']}
                                            />
                                            <div className={styles['user-details']}>
                                                <Card.Title>{item.following.fullname}</Card.Title>
                                            </div>
                                        </div>
                                    </Card>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </div>
            ) : (
                <div className={styles['not-follow']}>
                    <Row className={styles['follow-row']}>
                        <div className={styles['Following']}>
                            <img src={Trong} alt="Trong"></img>
                            <p>User has no following yet.</p>
                        </div>
                    </Row>
                </div>
            )}
        </>
    );
};

export default Following;
