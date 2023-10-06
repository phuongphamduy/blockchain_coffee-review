import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './PostDetail.module.scss';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Cong1 from '~/statics/images/cong1.jpg';
import Cong2 from '~/statics/images/cong2.jpg';
import Cong3 from '~/statics/images/cong3.jpg';
import Cong4 from '~/statics/images/cong4.jpg';
import Cong5 from '~/statics/images/cong5.jpg';
import Cong6 from '~/statics/images/cong6.jpg';
import Cong7 from '~/statics/images/cong7.jpg';
import HighLand from '~/statics/images/highland.jpg';
import NoLogin from '~/statics/images/noLogin.png';
import CommentUser1 from '~/statics/images/commentuser1.jpg';
import CommentUser2 from '~/statics/images/commentuser2.jpg';
import CommentUser3 from '~/statics/images/commentuser3.jpg';
import CommentImg1 from '~/statics/images/commentimg1.jpg';
import CommentImg2 from '~/statics/images/commentimg2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCamera, faEllipsis, faHeart, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import Map from '~/components/Map';
import { createRef } from 'react';
function PostDetail() {
    const inputRef = createRef();
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };

    function IconClick(e) {
        inputRef.current.click();
    }

    return (
        <>
            <div className={styles['background-color']}>
                <Container className={styles['body-content']}>
                    <div className={styles['post-info-wrapper']}>
                        <div className={styles['slider-section']}>
                            <Slider {...settings}>
                                <div className={styles['slider-item']}>
                                    <img src={Cong1} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong2} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong3} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong4} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong5} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong6} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong7} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong1} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong2} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong3} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong4} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong5} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong6} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong7} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong1} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong2} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong3} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong4} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong5} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong6} alt="img" />
                                </div>
                                <div className={styles['slider-item']}>
                                    <img src={Cong7} alt="img" />
                                </div>
                            </Slider>
                        </div>
                        <div className={styles['post-info-section']}>
                            <div className={styles['post-info']}>
                                <img src={Cong1} alt="img" />
                                <div className={styles['post-name']}>
                                    <h1>
                                        Cộng Cà Phê <span>8.7</span>
                                    </h1>
                                    <p>26 Lý Tự Trọng, Quận 1 Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className={styles['post-interact']}>
                                <Button variant="secondary" className={styles['btn']}>
                                    <FontAwesomeIcon icon={faBookmark} className={styles['icon']} />
                                    Saved
                                </Button>
                                <Button variant="secondary" className={styles['btn']}>
                                    <FontAwesomeIcon icon={faHeart} className={styles['icon']} />
                                    Liked
                                </Button>
                                <Button variant="secondary" className={styles['btn']}>
                                    <FontAwesomeIcon icon={faThumbsDown} className={styles['icon']} />
                                    Disliked
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Row className={styles['comment-more-info-wrapper']}>
                        <Col sm={9}>
                            <div className={styles['comment-section']}>
                                <div className={styles['comment-input-section']}>
                                    <div className={styles['input-wrapper']}>
                                        <img src={NoLogin} alt="img" />
                                        {/* <p>
                                            <a href="#">Log in</a> to leave a tip here
                                        </p> */}
                                        <textarea
                                            cols="55"
                                            rows="4"
                                            className={styles['input']}
                                            placeholder="leave a tip for others"
                                        ></textarea>
                                        <FontAwesomeIcon
                                            icon={faCamera}
                                            className={styles['icon']}
                                            onClick={(e) => IconClick(e)}
                                        />
                                        <input ref={inputRef} type="file" hidden id="file" />
                                    </div>
                                    <Button variant="secondary" disabled className={styles['post-btn']}>
                                        Post
                                    </Button>
                                </div>
                                <div className={styles['comment-list']}>
                                    <div className={styles['comment-item']}>
                                        <img src={CommentUser1} alt="img" />
                                        <div className={styles['comment-content']}>
                                            <div className={styles['comment-info']}>
                                                <h4>MK Chan</h4>
                                                <p>August 27, 2017</p>
                                            </div>
                                            <div className={styles['comment-text']}>
                                                <p>
                                                    This cafe is located 2nd floor, the entrance is right of building
                                                    and go up the stairs. The mood is pretty good and u can also enjoy
                                                    good coffee at terrace as well. There are many people at weekend.
                                                </p>
                                            </div>
                                            <img src={CommentImg1} alt="img" />
                                            <div className={styles['btn-group']}>
                                                <Button variant="outline-primary" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faThumbsUp} className={styles['icon']} />
                                                    Like
                                                </Button>
                                                <Button variant="outline-danger" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faThumbsDown} className={styles['icon']} />
                                                    Dislike
                                                </Button>
                                                <Button variant="outline-secondary" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faEllipsis} className={styles['icon']} />
                                                    More
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['comment-item']}>
                                        <img src={CommentUser2} alt="img" />
                                        <div className={styles['comment-content']}>
                                            <div className={styles['comment-info']}>
                                                <h4>MK Chan</h4>
                                                <p>August 27, 2017</p>
                                            </div>
                                            <div className={styles['comment-text']}>
                                                <p>
                                                    This cafe is located 2nd floor, the entrance is right of building
                                                    and go up the stairs. The mood is pretty good and u can also enjoy
                                                    good coffee at terrace as well. There are many people at weekend.
                                                </p>
                                            </div>
                                            <img src={CommentImg2} alt="img" />
                                            <div className={styles['btn-group']}>
                                                <Button variant="outline-primary" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faThumbsUp} className={styles['icon']} />
                                                    Like
                                                </Button>
                                                <Button variant="outline-danger" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faThumbsDown} className={styles['icon']} />
                                                    Dislike
                                                </Button>
                                                <Button variant="outline-secondary" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faEllipsis} className={styles['icon']} />
                                                    More
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={styles['comment-item']}>
                                        <img src={CommentUser3} alt="img" />
                                        <div className={styles['comment-content']}>
                                            <div className={styles['comment-info']}>
                                                <h4>MK Chan</h4>
                                                <p>August 27, 2017</p>
                                            </div>
                                            <div className={styles['comment-text']}>
                                                <p>
                                                    Like everyone else says: try the coconut coffee. So good. Awesome to
                                                    sit on the balcony and watch the busy traffic down below.
                                                </p>
                                            </div>
                                            <div className={styles['btn-group']}>
                                                <Button variant="outline-primary" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faThumbsUp} className={styles['icon']} />
                                                    Like
                                                </Button>
                                                <Button variant="outline-danger" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faThumbsDown} className={styles['icon']} />
                                                    Dislike
                                                </Button>
                                                <Button variant="outline-secondary" className={styles['btn']}>
                                                    <FontAwesomeIcon icon={faEllipsis} className={styles['icon']} />
                                                    More
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={styles['more-info-section']}>
                                <div className={styles['map-section']}>
                                    <Map />
                                </div>
                                <div className={styles['places']}>
                                    <h4>Cộng Cà Phê</h4>
                                    <p>26 Lý Tự Trọng, Quận 1 Thành phố Hồ Chí Minh</p>
                                </div>
                            </div>
                            <div className={styles['recomment-section']}>
                                <h3>You might also likes</h3>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-info']}>
                                        <img src={HighLand} alt="img" />
                                        <div className={styles['post-name']}>
                                            <h4>Highlands Coffee</h4>
                                            <p>
                                                B3, Vincom Center B, 72 Lê Thánh Tôn và 45A Lý Tự Trọng, P.Bến Nghé, Q.1
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles['post-desc']}>
                                        <p>HighLand The best places you can go with the loves ones</p>
                                    </div>
                                    <span className={styles['rating']}>6.5</span>
                                </div>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-info']}>
                                        <img src={HighLand} alt="img" />
                                        <div className={styles['post-name']}>
                                            <h4>Highlands Coffee</h4>
                                            <p>
                                                B3, Vincom Center B, 72 Lê Thánh Tôn và 45A Lý Tự Trọng, P.Bến Nghé, Q.1
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles['post-desc']}>
                                        <p>HighLand The best places you can go with the loves ones</p>
                                    </div>
                                    <span className={styles['rating']}>6.5</span>
                                </div>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-info']}>
                                        <img src={HighLand} alt="img" />
                                        <div className={styles['post-name']}>
                                            <h4>Highlands Coffee</h4>
                                            <p>
                                                B3, Vincom Center B, 72 Lê Thánh Tôn và 45A Lý Tự Trọng, P.Bến Nghé, Q.1
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles['post-desc']}>
                                        <p>HighLand The best places you can go with the loves ones</p>
                                    </div>
                                    <span className={styles['rating']}>6.5</span>
                                </div>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-info']}>
                                        <img src={HighLand} alt="img" />
                                        <div className={styles['post-name']}>
                                            <h4>Highlands Coffee</h4>
                                            <p>
                                                B3, Vincom Center B, 72 Lê Thánh Tôn và 45A Lý Tự Trọng, P.Bến Nghé, Q.1
                                            </p>
                                        </div>
                                    </div>
                                    <div className={styles['post-desc']}>
                                        <p>HighLand The best places you can go with the loves ones</p>
                                    </div>
                                    <span className={styles['rating']}>6.5</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default PostDetail;
