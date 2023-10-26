import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './UserInfor.module.scss';
import Trong from '~/statics/images/Trong.png';

const Following = () => {
    return (
        <Container>
            <div className={styles['Following']}>
                <img src={Trong} alt="Trong"></img>
                <p>User hasn't followed anybody yet.</p>
            </div>
        </Container>
    );
}

export default Following;
