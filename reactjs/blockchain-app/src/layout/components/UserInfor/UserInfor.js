import avt from '~/statics/images/noImg.png';
import Follow from '~/statics/images/plus.png';
import CancelFollow from '~/statics/images/cancel.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useMemo, useState } from 'react';
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
}
const ProductCard = () => {
    const userLogin = useMemo(() => {
        return getUser();
    }, []);
    const [user, setUser] = useState();
    const [account, setAccount] = useState({});
    const [favorites, setFavorites] = useState([]);
    const [liked, setLiked] = useState([]);
    const [posts, setPosts] = useState([]);
    const [following, setFollowing] = useState([]);
    const [follower, setFollower] = useState([]);
    const [showLike, setShowLike] = useState(false);
    const [showFollower, setShowFollower] = useState(false);
    const [showList, setShowList] = useState(true);
    const [showFollowing, setshowFollowing] = useState(false);
    const [showPost, setShowPost] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        httpRequest
            .get(`/rest/account/${id}`)
            .then((res) => {
                setUser(res.data);
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
                setFavorites(res.data.favorites);
                setPosts(res.data.posts);
            })
            .catch((error) => {
                console.log(error);
            });
        httpRequest
            .get(`/rest/interact/likedPost/${id}`)
            .then((res) => {
                setLiked(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        httpRequest
            .get(`/rest/follow/follower/${id}`)
            .then((res) => {
                setFollowing(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        httpRequest
            .get(`/rest/follow/following/${id}`)
            .then((res) => {
                setFollower(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    function handleShowLike() {
        setShowLike(true);
        setShowList(false);
        setShowFollower(false);
        setshowFollowing(false);
        setShowPost(false);
    }
    function handleShowList() {
        setShowList(true);
        setShowFollower(false);
        setshowFollowing(false);
        setShowLike(false);
        setShowPost(false);
    }

    function handleShowFollower() {
        setShowFollower(true);
        setShowList(false);
        setshowFollowing(false);
        setShowLike(false);
        setShowPost(false);
    }

    function handleShowFollowing() {
        setshowFollowing(true);
        setShowList(false);
        setShowFollower(false);
        setShowLike(false);
        setShowPost(false);
    }

    function handleShowPost() {
        setShowPost(true);
        setshowFollowing(false);
        setShowList(false);
        setShowFollower(false);
        setShowLike(false);
    }

    function handleFollow() {
        httpRequest
            .post('/rest/follow', { follower: { id: userLogin.id }, following: { id: user.id } })
            .then((res) => {
                console.log(res);
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function handleUnFollow() {
        httpRequest
            .delete('/rest/follow/delete', { params: { followerid: userLogin.id, followingid: user.id } })
            .then((res) => {
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
    }
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
                                <h2>{user && user.fullname}</h2>
                                {userLogin && user && userLogin.id === user.id && (
                                    <Link to={'/editProfile'}>
                                        <button className={styles.editButton}>Edit Profile</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSection}>
                        <div className={styles.stats}>
                            <div className={styles.stat} onClick={() => handleShowLike()}>
                                <span>{(account && account.countLike) || 0}</span>
                                <span>Likes</span>
                            </div>
                            <div className={styles.stat} onClick={() => handleShowFollower()}>
                                <span>{follower && follower.length}</span>
                                <span>Followers</span>
                            </div>
                            <div className={styles.stat} onClick={() => handleShowFollowing()}>
                                <span>{following && following.length}</span>
                                <span>Following</span>
                            </div>
                            <div className={styles.stat} onClick={() => handleShowPost()}>
                                <span>{(account && account.countPost) || 0}</span>
                                <span>Post</span>
                            </div>
                            <div className={styles.stat} onClick={() => handleShowList()}>
                                <span>2</span>
                                <span>List</span>
                            </div>
                        </div>

                        <div className={styles.follow}>
                            {userLogin &&
                                user &&
                                user.id !== userLogin.id &&
                                follower.every((item) => {
                                    return item.follower.id !== userLogin.id;
                                }) && (
                                    <button className={styles.followButton} onClick={() => handleFollow()}>
                                        <img src={Follow} alt="follow" /> Follow User
                                    </button>
                                )}
                            {userLogin &&
                                user &&
                                user.id !== userLogin.id &&
                                follower.some((item) => {
                                    return item.follower.id === userLogin.id;
                                }) && (
                                    <button className={styles.CancelfollowButton} onClick={() => handleUnFollow()}>
                                        <img src={CancelFollow} alt="cancelfollow" /> Unfollow User
                                    </button>
                                )}
                        </div>

                    </div>
                </div>
                {showFollowing && <Following following={following} />}
                {showFollower && <Followers follower={follower} />}
                {showPost && <Post posts={posts} />}
                {showLike && <Like liked={liked} />}
                {showList && <List saved={favorites} liked={liked} />}
            </Container>
        </div>
    );
};

export default ProductCard;
