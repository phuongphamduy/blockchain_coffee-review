import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './PostDetail.module.scss';
import { Button, Container } from 'react-bootstrap';
import Cong1 from '~/statics/images/cong1.jpg';
import Cong2 from '~/statics/images/cong2.jpg';
import Cong3 from '~/statics/images/cong3.jpg';
import Cong4 from '~/statics/images/cong4.jpg';
import Cong5 from '~/statics/images/cong5.jpg';
import Cong6 from '~/statics/images/cong6.jpg';
import Cong7 from '~/statics/images/cong7.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faHeart, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
function PostDetail() {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
    };

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
                </Container>
            </div>
        </>
    );
}

export default PostDetail;
