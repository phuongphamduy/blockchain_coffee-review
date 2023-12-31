import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import styles from './Post.module.scss';
import Cong from '~/statics/images/cong.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import Map from '~/components/Map';
import { useEffect, useState } from 'react';
import httpRequest from '~/utils/httpRequest';
import { Link } from 'react-router-dom';
function Post() {
    const [listPost, setListPost] = useState([]);
    const [listAddress, setListAddress] = useState([]);
    useEffect(() => {
        httpRequest
            .get('/rest/post')
            .then((res) => {
                var data = res.data;
                var array = [];
                for (var i = 0; i < data.length; i++) {
                    array.push({ id: data[i].id, lat: data[i].lat, lng: data[i].lng });
                }
                setListAddress(array);
                setListPost(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleChangeSelect(e) {
        let order = e.target.value;
        httpRequest
            .get('/rest/post/ordersByDate', { params: { order: order } })
            .then((res) => {
                setListPost(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className={styles['post-section-background-color']}>
                <Container>
                    <Row>
                        <Col>
                            <div className={styles['posts-section']}>
                                <div className={styles['suggestion-secton']}>
                                    <h4 className={styles['text']}>
                                        Suggestions for Coffee near{' '}
                                        <span className={styles['place']}>Ho Chi Minh City</span>
                                    </h4>
                                </div>
                                <div className={styles['filter-section']}>
                                    <label>Filter</label>
                                    <Form.Select
                                        aria-label="Default select example"
                                        className={styles['select-input']}
                                        onChange={(e) => handleChangeSelect(e)}
                                    >
                                        <option>Open filter menu</option>
                                        <option value="desc">Newest to oldest</option>
                                        <option value="asc">Oldest to newest</option>
                                    </Form.Select>
                                </div>
                                {listPost.map((item) => {
                                    return (
                                        <Link to={`/post/${item.id}`} key={item.id} className={styles['post-section']}>
                                            <div className={styles['post-wrapper']}>
                                                <div className={styles['post-upper']}>
                                                    <img
                                                        src={item.images[0].url}
                                                        alt="Images"
                                                        className={styles['post-image']}
                                                    />
                                                    <div className={styles['post-info']}>
                                                        <h2 className={styles['post-name']}>
                                                            {item.id}. {item.name}
                                                        </h2>
                                                        <p className={styles['address']}>{item.address}</p>
                                                        <p className={styles['address']}>{item.createdate}</p>
                                                        <Button variant="secondary" className={styles['btn']}>
                                                            <FontAwesomeIcon
                                                                icon={faBookmark}
                                                                className={styles['icon']}
                                                            />
                                                            Save
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className={styles['description-wrapper']}>
                                                    <h5 className={styles['heading']}>Description</h5>
                                                    <p className={styles['text']}>{item.description}</p>
                                                </div>
                                                {/* {item.reviews.length > 0 ? (
                                                    <div className={styles['rating-wrapper']}>
                                                        <span>8.5</span>
                                                    </div>
                                                ) : (
                                                    <></>
                                                )} */}
                                            </div>
                                        </Link>
                                    );
                                })}

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
                                                This place is meet with friends and family. If you are in district 1,
                                                don't forget to check out this place and try the best coffee we have :)
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
                                                This place is meet with friends and family. If you are in district 1,
                                                don't forget to check out this place and try the best coffee we have :)
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
                                                This place is meet with friends and family. If you are in district 1,
                                                don't forget to check out this place and try the best coffee we have :)
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
                                                This place is meet with friends and family. If you are in district 1,
                                                don't forget to check out this place and try the best coffee we have :)
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
                                                This place is meet with friends and family. If you are in district 1,
                                                don't forget to check out this place and try the best coffee we have :)
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
                                                This place is meet with friends and family. If you are in district 1,
                                                don't forget to check out this place and try the best coffee we have :)
                                            </p>
                                        </div>
                                        <div className={styles['rating-wrapper']}>
                                            <span>8.5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Map listAddress={listAddress} />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Post;
