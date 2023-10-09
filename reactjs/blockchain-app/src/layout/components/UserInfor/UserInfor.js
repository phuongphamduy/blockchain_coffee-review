// src/components/ProductCard.js

import React from 'react';
import styles from './UserInfor.module.scss';

const productData = [
  {
    id: 1,
    image: '~/statics/images/user_cafe.webp',
    name: 'My List Coffee',
    intro: '1 places including Coffeehouse',
  },
  {
    id: 2,
    image: '~/statics/images/user_cafe.webp',
    name: 'My Saved places',
    intro: '1 places including Coffeehouse',
  },
  {
    id: 3,
    image: '~/statics/images/user_cafe.webp',
    name: 'My  Liked places',
    intro: '1 places including Coffeehouse',
  },

];


const ProductCard = () => {
  return (
    <div className={styles['background-color']}>
      <div className={styles.container_user}>
        <div className={styles.userProfile}>
          <div className={styles.leftSection}>
            <div className={styles.avatar}>
              <img src="path_to_avatar.jpg" alt="Avatar" />
            </div>
            <div className={styles.userInfo}>
              <h2>Tài khoản</h2>
              <p>Hồ Chí Minh</p>
            </div>
            <button className={styles.editButton}>Edit Profile</button>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.followCount}>
              <span>Followers: 1000</span>
              <span>Likes: 500</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container_card}>
        <div className="row">
          {productData.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6">
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
          ))}
        </div> 
      </div>


    </div>

  );
}



export default ProductCard;
