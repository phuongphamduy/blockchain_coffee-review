import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './Post.module.scss';
import Cong from '~/statics/images/cong.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Post() {
    return (
        <>
            <div className={styles['post-section-background-color']}>
                <Container>
                    <Row>
                        <Col>
                            <div className={styles['suggestion-secton']}>
                                <h4 className={styles['text']}>
                                    Suggestions for Coffee near{' '}
                                    <span className={styles['place']}>Ho Chi Minh City</span>
                                </h4>
                            </div>
                            <div className={styles['filter-section']}>
                                <label>Filter</label>
                                <Form.Select aria-label="Default select example" className={styles['select-input']}>
                                    <option>Open filter menu</option>
                                    <option value="1">Newest to oldest</option>
                                    <option value="2">Oldest to newest</option>
                                    <option value="2">Highest rating to lowest rating</option>
                                    <option value="2">Lowest rating to highest rating</option>
                                </Form.Select>
                            </div>
                            <div className={styles['post-section']}>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-upper']}>
                                        <img src={Cong} alt="Images" className={styles['post-image']} />
                                        <div className={styles['post-info']}>
                                            <h2 className={styles['post-name']}>Cộng cà phê</h2>
                                            <p className={styles['address']}>
                                                26 Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh
                                            </p>
                                            <p className={styles['address']}>26-10-2003</p>
                                            <Button variant="secondary" className={styles['btn']}>
                                                <FontAwesomeIcon icon={faBookmark} className={styles['icon']} />
                                                Save
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles['description-wrapper']}>
                                        <h5 className={styles['heading']}>Description</h5>
                                        <p className={styles['text']}>
                                            This place is meet with friends and family. If you are in district 1, don't
                                            forget to check out this place and try the best coffee we have :)
                                        </p>
                                    </div>
                                    <div className={styles['rating-wrapper']}>
                                        <span>8.5</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['post-section']}>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-upper']}>
                                        <img src={Cong} alt="Images" className={styles['post-image']} />
                                        <div className={styles['post-info']}>
                                            <h2 className={styles['post-name']}>Cộng cà phê</h2>
                                            <p className={styles['address']}>
                                                26 Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh
                                            </p>
                                            <p className={styles['address']}>26-10-2003</p>
                                            <Button variant="secondary" className={styles['btn']}>
                                                <FontAwesomeIcon icon={faBookmark} className={styles['icon']} />
                                                Save
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles['description-wrapper']}>
                                        <h5 className={styles['heading']}>Description</h5>
                                        <p className={styles['text']}>
                                            This place is meet with friends and family. If you are in district 1, don't
                                            forget to check out this place and try the best coffee we have :)
                                        </p>
                                    </div>
                                    <div className={styles['rating-wrapper']}>
                                        <span>8.5</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['post-section']}>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-upper']}>
                                        <img src={Cong} alt="Images" className={styles['post-image']} />
                                        <div className={styles['post-info']}>
                                            <h2 className={styles['post-name']}>Cộng cà phê</h2>
                                            <p className={styles['address']}>
                                                26 Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh
                                            </p>
                                            <p className={styles['address']}>26-10-2003</p>
                                            <Button variant="secondary" className={styles['btn']}>
                                                <FontAwesomeIcon icon={faBookmark} className={styles['icon']} />
                                                Save
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles['description-wrapper']}>
                                        <h5 className={styles['heading']}>Description</h5>
                                        <p className={styles['text']}>
                                            This place is meet with friends and family. If you are in district 1, don't
                                            forget to check out this place and try the best coffee we have :)
                                        </p>
                                    </div>
                                    <div className={styles['rating-wrapper']}>
                                        <span>8.5</span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles['post-section']}>
                                <div className={styles['post-wrapper']}>
                                    <div className={styles['post-upper']}>
                                        <img src={Cong} alt="Images" className={styles['post-image']} />
                                        <div className={styles['post-info']}>
                                            <h2 className={styles['post-name']}>Cộng cà phê</h2>
                                            <p className={styles['address']}>
                                                26 Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh
                                            </p>
                                            <p className={styles['address']}>26-10-2003</p>
                                            <Button variant="secondary" className={styles['btn']}>
                                                <FontAwesomeIcon icon={faBookmark} className={styles['icon']} />
                                                Save
                                            </Button>
                                        </div>
                                    </div>
                                    <div className={styles['description-wrapper']}>
                                        <h5 className={styles['heading']}>Description</h5>
                                        <p className={styles['text']}>
                                            This place is meet with friends and family. If you are in district 1, don't
                                            forget to check out this place and try the best coffee we have :)
                                        </p>
                                    </div>
                                    <div className={styles['rating-wrapper']}>
                                        <span>8.5</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>Map section</Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Post;
