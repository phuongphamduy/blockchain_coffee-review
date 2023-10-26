import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './UserInfor.module.scss';
import Trong from '~/statics/images/Trong.png';

const Like = () => {
    return (
        <Container>
            <div className={styles['like']}>
                <img src={Trong} alt="Trong"></img>
                <p>User hasn't left any like yet.</p>
            </div>
        </Container>
    );
}

export default Like;
