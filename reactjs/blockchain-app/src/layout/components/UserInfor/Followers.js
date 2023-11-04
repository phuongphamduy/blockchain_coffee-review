import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import avt from '~/statics/images/noImg.png';
import styles from './Follow.module.scss'; 

import Trong from '~/statics/images/Trong.png';

const Followers = () => {
    const followingList = [
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        { username: 'user1', address: 'Address 1', image: avt },
        { username: 'user2', address: 'Address 2', image: avt },
        // Thêm các tài khoản khác ở đây
    ];
    return (
        <div className={styles['Follow']}>
            <Row className={styles['follow-row']}>
                {followingList.map((user, index) => (
                    <Col key={index} sm={12} md={6} lg={4} xl={3}>
                        <Card className={styles['follow-card']}>
                            <div className={styles['user-info']}>
                                <img src={user.image} alt={user.username} className={styles['user-image']} />
                                <div className={styles['user-details']}>
                                    <Card.Title>{user.username}</Card.Title>
                                    <Card.Text>{user.address}</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* <Container>
            <div className={styles['Follower']}>
                <img src={Trong} alt="Trong"></img>
                <p>User has no followers yet.</p>
            </div>
        </Container> */}
        </div>
    );
};


export default Followers;
