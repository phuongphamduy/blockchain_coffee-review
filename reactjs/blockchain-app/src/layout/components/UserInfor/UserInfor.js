import avt from '~/statics/images/noImg.png';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styles from './UserInfor.module.scss';
import Like from './Like';
import Post from './Post';
import List from './List';
import Followers from './Followers';
import Following from './Following';
import { Container } from 'react-bootstrap';
import httpRequest from '~/utils/httpRequest';


function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;




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
      {/* <Followers />
     <Post />
      <Like />
      <List /> */}

    </div>

  );

}

const ProductCard = () => {
    const user = getUser();
    const [account, setAccount] = useState({});
    useEffect(() => {
        httpRequest
            .get(`/rest/account/${user.id}`)
            .then((res) => {
                let countLike = 0;
                let countPost = 0;
                res.data.interactions.forEach((item) => {
                    if (item.islike) {
                        countLike++;
                    }
                });
                res.data.posts.forEach((item) => {
                    countPost++;
                });
                let acc = { ...res.data, countLike: countLike, countPost: countPost };
                setAccount(acc);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div className={styles['background-color']}>
            <Container>
                <div className={styles.container_user}>
                    <div className={styles.userProfile}>
                        <div className={styles.leftSection}>
                            <div className={styles.avatar}>
                                <img src={avt} alt="Avatar" />
                            </div>
                            <div className={styles.userInfo}>
                                <h2>{user.fullname}</h2>
                                <Link to={'/editProfile'}>
                                    <button className={styles.editButton}>Edit Profile</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <span>{account && account.countLike}</span>
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
                                <span>{account && account.countPost}</span>
                                <span>Post</span>
                            </div>
                            <div className={styles.stat}>
                                <span>3</span>
                                <span>List</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* <Following />
            <Followers />
            <Post />
            <Like /> */}
            <List />
        </div>
    );
};

export default ProductCard;
