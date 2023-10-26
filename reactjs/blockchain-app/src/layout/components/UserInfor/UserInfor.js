import avt from '~/statics/images/noImg.png';
import { Link} from 'react-router-dom';
import React from 'react';
import styles from './UserInfor.module.scss';
import Like from './Like';
import Post from './Post';
import List from './List';
import Followers from './Followers';
import Following from './Following';




const ProductCard = () => {
  return (
    <div className={styles['background-color']}>
      <div className={styles.container_user}>
        <div className={styles.userProfile}>
          <div className={styles.leftSection}>
            <div className={styles.avatar}>
              <img src={avt} alt="Avatar" />
            </div>
            <div className={styles.userInfo}>
              <h2>Tài khoản</h2>
              <p>Hồ Chí Minh</p>
            </div>
            <Link  to={"/editProfile"}>
              
            <button className={styles.editButton} >Edit Profile</button>
            </Link>
          </div>
          <div className={styles.rightSection}>
          
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span>500</span>
              <span>Likes</span>
            </div>
            <div className={styles.stat}>
              <span>1000</span>
              <span>Followers</span>
            </div>
            <div className={styles.stat}>
              <span>200</span>
              <span>Following</span>
            </div>
            <div className={styles.stat}>
              <span>10</span>
              <span>Post</span>
            </div>
            <div className={styles.stat}>
              <span>3</span>
              <span>List</span>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      <Following />
      <Followers />
     <Post />
      <Like />
      <List />

    </div>

  );
}



export default ProductCard;
