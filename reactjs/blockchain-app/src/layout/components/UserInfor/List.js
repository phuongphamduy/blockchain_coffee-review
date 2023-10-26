// src/components/ProductCard.js
import UserInfor from '~/statics/images/user_cafe.webp';
import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import styles from './UserInfor.module.scss';


const productData = [
    {
        id: 1,
        image: UserInfor,
        name: 'My List Coffee',
        intro: '1 places including Coffeehouse',
    },
    {
        id: 2,
        image: UserInfor,
        name: 'My Saved places',
        intro: '1 places including Coffeehouse',
    },
    {
        id: 3,
        image: UserInfor,
        name: 'My  Liked places',
        intro: '1 places including Coffeehouse',
    },


];

const List = () => {
    return (
        <Container>
            <div className={styles.container_card}>
                <div className={styles.recentlist}>
                    <h2>Recent lists:</h2>
                </div>
                <Row>

                    {productData.map((product) => (
                        <Col xs={4} md={3}>
                            <div key={product.id} >
                                <div className={styles['product-card']}>
                                    <div className={styles['product-image']}>
                                        <img src={product.image} alt="Product" />
                                    </div>
                                    <div className={styles['product-info']}>
                                        <h5 className={styles['product-name']}>{product.name}</h5>
                                        <p className={styles['product-intro']}>{product.intro}</p>
                                    </div>
                                </div>
                            </div>

                        </Col>
                    ))}

                </Row>
            </div>

        </Container>
    );
}
export default List;
