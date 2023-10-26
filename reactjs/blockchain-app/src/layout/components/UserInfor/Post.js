import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './UserInfor.module.scss';
import Trong from '~/statics/images/Trong.png';

const Post = () => {
    return (
        <Container>
            <div className={styles['post']}>
                <img src={Trong} alt="Trong"></img>
                <p>User hasn't left any post yet.</p>
            </div>
        </Container>
    );
}

export default Post;
