import React from 'react';

import styles from './Post.module.scss';
import { Container, Row, Col } from 'react-bootstrap';
import avt from '~/statics/images/cong.jpg';
import backpost from '~/statics/images/user_cafe.webp';
import Trong from '~/statics/images/Trong.png';


const data = [
    {
        name: "Cộng Cà Phê",
        avatar: avt,
        backpost: backpost,
        address: "101 Nguyễn Huê, TP. Hồ Chí Minh",
        description: "Cộng Cà Phê là một trong những thương hiệu kinh doanh thành công nhất tại Hà Nội với hệ thống chuỗi hơn 60 cửa hàng phủ sóng khắp toàn quốc. ",
      },
      {
        name: "Cộng Cà Phê",
        avatar: avt,
        backpost: backpost,
        address: "101 Nguyễn Huê, TP. Hồ Chí Minh",
        description: "Cộng Cà Phê là một trong những thương hiệu kinh doanh thành công nhất tại Hà Nội với hệ thống chuỗi hơn 60 cửa hàng phủ sóng khắp toàn quốc. ",
      },
      {
        name: "Cộng Cà Phê",
        avatar: avt,
        backpost: backpost,
        address: "101 Nguyễn Huê, TP. Hồ Chí Minh",
        description: "Cộng Cà Phê là một trong những thương hiệu kinh doanh thành công nhất tại Hà Nội với hệ thống chuỗi hơn 60 cửa hàng phủ sóng khắp toàn quốc. ",
      },
      {
        name: "Cộng Cà Phê",
        avatar: avt,
        backpost: backpost,
        address: "101 Nguyễn Huê, TP. Hồ Chí Minh",
        description: "Cộng Cà Phê là một trong những thương hiệu kinh doanh thành công nhất tại Hà Nội với hệ thống chuỗi hơn 60 cửa hàng phủ sóng khắp toàn quốc. ",
      },
  ];


  const Post = () => {
    return (
      <Container>
        <Row>
          {data.slice(0, 4).map((item, index) => (
            <Col key={index} md={3}>
              <div className={styles['post']}>
                <div className={styles['backpost-container']}>
                  <img className={styles['backpost']} src={item.backpost} alt={item.name}></img>
                  <button className={styles['follow-button']}>Follow</button>
                </div>
                <div className={styles['avatar-overlay']}>
                  <img className={styles['avatar']} src={item.avatar} alt={item.name}></img>
                </div>
                <div className={styles['info']}>
                  <p className={styles['name']}>{item.name}</p>
                  <p className={styles['address']}>{item.address}</p>
                </div>
                <hr className={styles['divider']} /> {/* Dấu gạch ngang */}
                <div>
                  <p className={styles['description']}>{item.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        {/* <Container>
            <div className={styles['post_trong']}>
                <img src={Trong} alt="Trong"></img>
                <p>User hasn't left any post yet.</p>
            </div>
        </Container> */}


      </Container>
    );
  }
  
  






export default Post;
