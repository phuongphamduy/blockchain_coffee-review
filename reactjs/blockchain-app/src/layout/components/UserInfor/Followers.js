import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './UserInfor.module.scss';
import Trong from '~/statics/images/Trong.png';

const Followers = () => {
    return (
        <Container>
            <div className={styles['Follower']}>
                <img src={Trong} alt="Trong"></img>
                <p>User has no followers yet.</p>
            </div>
        </Container>
    );
}

export default Followers;
