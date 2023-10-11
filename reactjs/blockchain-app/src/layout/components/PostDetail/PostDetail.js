import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tippy.js/dist/tippy.css';
import Slider from 'react-slick';
import styles from './PostDetail.module.scss';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import Cong1 from '~/statics/images/cong1.jpg';
import HighLand from '~/statics/images/highland.jpg';
import NoLogin from '~/statics/images/noLogin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCamera, faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import Map from '~/components/Map';
import { createRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import httpRequest from '~/utils/httpRequest';

function PostDetail() {
    const [postDetail, setPostDetail] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const id = location.pathname.charAt(location.pathname.length - 1);
        httpRequest
            .get(`/rest/post/${id}`)
            .then((res) => {
                console.log(res.data);
                setPostDetail(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const inputRef = createRef();
    const settings = {
        infinite: true,
        slidesToShow: 7,
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
                                {postDetail &&
                                    postDetail.images &&
                                    postDetail.images.map((item) => {
                                        return (
                                            <div key={item.id} className={styles['slider-item']}>
                                                <img src={item.url} alt="img" />
                                            </div>
                                        );
                                    })}
                            </Slider>
                        </div>
                        <div className={styles['post-info-section']}>
                            <div className={styles['post-info']}>
                                <img src={Cong1} alt="img" />
                                <div className={styles['post-name']}>
                                    <h1>
                                        {postDetail && postDetail.name}
                                        {postDetail && postDetail.reviews && postDetail.reviews.length > 0 && (
                                            <span>8.7</span>
                                        )}
                                    </h1>
                                    <p>{postDetail && postDetail.address}</p>
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
                                    {/* <div className={styles['comment-item']}>
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
                                                <Tippy
                                                    interactive
                                                    placement="bottom-start"
                                                    trigger="click"
                                                    sticky
                                                    render={(attrs) => (
                                                        <div {...attrs} className={styles['menu-more']}>
                                                            <h4>Report</h4>
                                                            <ul className={styles['menu-list']}>
                                                                <li className={styles['menu-item']}>
                                                                    <span href="#" className={styles['menu-link']}>
                                                                        Span
                                                                    </span>
                                                                </li>
                                                                <li className={styles['menu-item']}>
                                                                    <span href="#" className={styles['menu-link']}>
                                                                        Offensive
                                                                    </span>
                                                                </li>
                                                                <li className={styles['menu-item']}>
                                                                    <span href="#" className={styles['menu-link']}>
                                                                        No longer relevant
                                                                    </span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    )}
                                                >
                                                    <Button variant="outline-secondary" className={styles['btn']}>
                                                        <FontAwesomeIcon icon={faEllipsis} className={styles['icon']} />
                                                        More
                                                    </Button>
                                                </Tippy>
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
                                    </div> */}
                                    <div className={styles['no-comment']}>
                                        <Alert variant="light">There are no comments here. Let be the first one!</Alert>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <div className={styles['more-info-section']}>
                                <div className={styles['map-section']}>
                                    <Map lat={postDetail && postDetail.lat} lng={postDetail && postDetail.lng} />
                                </div>
                                <div className={styles['places']}>
                                    <h4>{postDetail && postDetail.name}</h4>
                                    <p>{postDetail && postDetail.address}</p>
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
