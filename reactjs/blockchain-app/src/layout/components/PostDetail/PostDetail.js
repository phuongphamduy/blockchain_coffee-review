import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'tippy.js/dist/tippy.css';
import Slider from 'react-slick';
import styles from './PostDetail.module.scss';
import { Alert, Button, Col, Container, Row } from 'react-bootstrap';
import HighLand from '~/statics/images/highland.jpg';
import NoLogin from '~/statics/images/noLogin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBookmark,
    faCamera,
    faEllipsis,
    faHeart,
    faThumbsDown,
    faThumbsUp,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';
import Map from '~/components/Map';
import { createRef, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import httpRequest from '~/utils/httpRequest';
import CommentUser1 from '~/statics/images/noImg.png';
import Tippy from '@tippyjs/react/headless';
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '~/utils/firebase';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

function PostDetail() {
    const [postDetail, setPostDetail] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [preview, setPreview] = useState('');
    const [input, setInput] = useState('');
    const [imageFile, setImageFile] = useState({});
    const [isLike, setIsLike] = useState(null);
    const [favorite, setFavorite] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const user = getUser();
    useEffect(() => {
        const id = location.pathname.charAt(location.pathname.length - 1);
        httpRequest
            .get(`/rest/post/${id}`)
            .then((res) => {
                setPostDetail(res.data);
                const favorites = res.data.favorites;
                const interactions = res.data.interactions;
                interactions.forEach((item) => {
                    if (item.account.id === user.id) {
                        setIsLike(item);
                        return;
                    }
                });
                favorites.forEach((item) => {
                    if (item.account.id === user.id) {
                        setFavorite(item);
                        return;
                    }
                });
            })
            .catch((error) => {
                console.log(error);
            });
        httpRequest
            .get(`/rest/review/${id}`)
            .then((res) => {
                setReviews(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [location]);

    useEffect(() => {
        return () => {
            URL.revokeObjectURL(preview);
        };
    }, [preview]);
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

    function handleChangeImg(e) {
        var image = {};
        image.file = e.target.files[0];
        image.name = e.target.files[0].name;
        setImageFile(image);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    function handleDeleteFileChange() {
        setImageFile({});
        setPreview('');
    }

    async function handlePostComment() {
        if (input.trim().length > 0) {
            var imageUrl;
            const obj = {
                comment: input.trim(),
                account: { id: user.id },
                post: { id: postDetail.id },
            };
            if (JSON.stringify(imageFile) !== '{}') {
                var imageRef = ref(storage, `images/${imageFile.name + uuidv4()}`);
                const snapshot = await uploadBytes(imageRef, imageFile.file);
                imageUrl = await getDownloadURL(snapshot.ref);
                obj.image = { url: imageUrl, post: { id: postDetail.id }, name: imageFile.name };
            }
            httpRequest
                .post('/rest/review', obj)
                .then((res) => {
                    navigate(0);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function handleSavePost() {
        httpRequest
            .post('/rest/favorites', { account: { id: user.id }, post: { id: postDetail.id } })
            .then((res) => {
                setFavorite(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleRemoveSavePost() {
        httpRequest
            .delete(`/rest/favorites/remove/${favorite.id}`)
            .then((res) => {
                setFavorite(null);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleLike() {
        httpRequest
            .post('/rest/interact', { islike: true, post: { id: postDetail.id }, account: { id: user.id } })
            .then((res) => {
                setIsLike(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleRemoveLike(e) {
        const id = e.target.getAttribute('data');
        httpRequest
            .delete(`/rest/interact/removeLike/${id}`)
            .then((res) => {
                setIsLike(null);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleDislike() {
        httpRequest
            .post('/rest/interact', { islike: false, post: { id: postDetail.id }, account: { id: user.id } })
            .then((res) => {
                setIsLike(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleRemoveDislike(e) {
        const id = e.target.getAttribute('data');
        httpRequest
            .delete(`/rest/interact/removeLike/${id}`)
            .then((res) => {
                setIsLike(null);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleDeleteComment(e) {
        const id = e.target.getAttribute('data');
        httpRequest
            .delete(`/rest/review/delete/${id}`)
            .then((res) => {
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
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
                                <img src={postDetail && postDetail.images && postDetail.images[0].url} alt="img" />
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
                                {favorite ? (
                                    <Button variant="warning" className={styles['btn']} onClick={handleRemoveSavePost}>
                                        <FontAwesomeIcon icon={faBookmark} className={styles['icon']} />
                                        Saved
                                    </Button>
                                ) : (
                                    <Button variant="secondary" className={styles['btn']} onClick={handleSavePost}>
                                        <FontAwesomeIcon icon={faBookmark} className={styles['icon']} />
                                        Saved
                                    </Button>
                                )}
                                {isLike && isLike.islike ? (
                                    <>
                                        <Button
                                            variant="success"
                                            data={isLike && isLike.id}
                                            className={styles['btn']}
                                            onClick={handleRemoveLike}
                                        >
                                            <FontAwesomeIcon icon={faHeart} className={styles['icon']} />
                                            Liked
                                        </Button>
                                    </>
                                ) : (
                                    <Button variant="secondary" className={styles['btn']} onClick={handleLike}>
                                        <FontAwesomeIcon icon={faHeart} className={styles['icon']} />
                                        Liked
                                    </Button>
                                )}
                                {isLike && !isLike.islike ? (
                                    <Button
                                        variant="danger"
                                        className={styles['btn']}
                                        data={isLike && isLike.id}
                                        onClick={handleRemoveDislike}
                                    >
                                        <FontAwesomeIcon icon={faThumbsDown} className={styles['icon']} />
                                        Disliked
                                    </Button>
                                ) : (
                                    <Button variant="secondary" className={styles['btn']} onClick={handleDislike}>
                                        <FontAwesomeIcon icon={faThumbsDown} className={styles['icon']} />
                                        Disliked
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                    <Row className={styles['comment-more-info-wrapper']}>
                        <Col sm={9}>
                            <div className={styles['comment-section']}>
                                <div className={styles['comment-input-section']}>
                                    <div className={styles['comment-input-flex']}>
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
                                                value={input}
                                                onChange={(e) => setInput(e.target.value)}
                                            ></textarea>
                                            <FontAwesomeIcon
                                                icon={faCamera}
                                                className={styles['icon']}
                                                onClick={(e) => IconClick(e)}
                                            />
                                            <input
                                                ref={inputRef}
                                                type="file"
                                                hidden
                                                id="file"
                                                onChange={handleChangeImg}
                                            />
                                        </div>
                                        {user ? (
                                            <Button
                                                variant="secondary"
                                                className={styles['post-btn']}
                                                onClick={handlePostComment}
                                            >
                                                Post
                                            </Button>
                                        ) : (
                                            <Button variant="secondary" disabled className={styles['post-btn']}>
                                                Post
                                            </Button>
                                        )}
                                    </div>
                                    {imageFile && imageFile.file ? (
                                        <div className={styles['img-wrapper']}>
                                            <FontAwesomeIcon
                                                icon={faXmark}
                                                className={styles['icon']}
                                                onClick={handleDeleteFileChange}
                                            />
                                            <img src={preview} className={styles['img']} alt="Ảnh tham khảo" />
                                        </div>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div className={styles['comment-list']}>
                                    <div className={styles['no-comment']}>
                                        {reviews && reviews.length > 0 ? (
                                            reviews.map((item) => {
                                                return (
                                                    <div key={item[0].id} className={styles['comment-item']}>
                                                        <img src={CommentUser1} alt="img" />
                                                        <div className={styles['comment-content']}>
                                                            <div className={styles['comment-info']}>
                                                                <h4>{item[1].fullname}</h4>
                                                                <p>
                                                                    {new Date(item[0].createdate).getDate() +
                                                                        '-' +
                                                                        (new Date(item[0].createdate).getMonth() + 1) +
                                                                        '-' +
                                                                        new Date(item[0].createdate).getFullYear()}
                                                                </p>
                                                            </div>
                                                            <div className={styles['comment-text']}>
                                                                <p>{item[0].comment}</p>
                                                            </div>
                                                            {item[0].image && item[0].image.url && (
                                                                <img src={item[0].image.url} alt="img" />
                                                            )}

                                                            <div className={styles['btn-group']}>
                                                                <Button
                                                                    variant="outline-primary"
                                                                    className={styles['btn']}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={faThumbsUp}
                                                                        className={styles['icon']}
                                                                    />
                                                                    Like
                                                                </Button>
                                                                <Button
                                                                    variant="outline-danger"
                                                                    className={styles['btn']}
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={faThumbsDown}
                                                                        className={styles['icon']}
                                                                    />
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
                                                                                    <span
                                                                                        href="#"
                                                                                        className={styles['menu-link']}
                                                                                    >
                                                                                        Span
                                                                                    </span>
                                                                                </li>
                                                                                <li className={styles['menu-item']}>
                                                                                    <span
                                                                                        href="#"
                                                                                        className={styles['menu-link']}
                                                                                    >
                                                                                        Offensive
                                                                                    </span>
                                                                                </li>
                                                                                <li className={styles['menu-item']}>
                                                                                    <span
                                                                                        href="#"
                                                                                        className={styles['menu-link']}
                                                                                    >
                                                                                        No longer relevant
                                                                                    </span>
                                                                                </li>
                                                                                {item.account &&
                                                                                user &&
                                                                                item.account.id === user.id ? (
                                                                                    <li className={styles['menu-item']}>
                                                                                        <span
                                                                                            className={
                                                                                                styles['menu-link']
                                                                                            }
                                                                                            onClick={
                                                                                                handleDeleteComment
                                                                                            }
                                                                                            data={item.id}
                                                                                        >
                                                                                            Delete comment
                                                                                        </span>
                                                                                    </li>
                                                                                ) : (
                                                                                    <></>
                                                                                )}
                                                                            </ul>
                                                                        </div>
                                                                    )}
                                                                >
                                                                    <Button
                                                                        variant="outline-secondary"
                                                                        className={styles['btn']}
                                                                    >
                                                                        <FontAwesomeIcon
                                                                            icon={faEllipsis}
                                                                            className={styles['icon']}
                                                                        />
                                                                        More
                                                                    </Button>
                                                                </Tippy>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <Alert variant="light">
                                                There are no comments here. Let be the first one!
                                            </Alert>
                                        )}
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
