import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => {
  const avatarPath = 'path_to_avatar.jpg'; // Thay đổi thành đường dẫn thực tế của hình ảnh

  return (
    <div className={styles.container}>
      <div className={styles.userProfile}>
        <div className={styles.leftSection}>
          <div className={styles.avatar}>
            <img src={avatarPath} alt="Avatar" />
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.userInfo}>
            <h2>User Name</h2>
            <p>Address</p>
          </div>
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
              <span>Posts</span>
            </div>
            <div className={styles.stat}>
              <span>10</span>
              <span>List</span>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.editButton}>Edit</button>
    </div>
  );
}

export default UserProfile;
