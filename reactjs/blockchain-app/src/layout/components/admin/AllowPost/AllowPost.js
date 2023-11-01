import { Button, Modal, Table } from 'react-bootstrap';
import styles from './AllowPost.module.scss';
import { useEffect, useState } from 'react';
import httpRequest from '~/utils/httpRequest';
import { useNavigate } from 'react-router-dom';
import * as buffer from 'buffer';
import { storage } from '~/utils/firebase';
import { deleteObject, ref } from 'firebase/storage';

function AllowPost() {
    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState([]);
    const [images, setImages] = useState([]);
    const [showComment, setShowComment] = useState(false);
    const [id, setId] = useState(null);
    const navigate = useNavigate();
    window.Buffer = buffer.Buffer;
    useEffect(() => {
        httpRequest
            .get('/rest/post/notConfirm')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    // hiển thị modal ảnh
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
        const post = posts.find((item) => {
            return item.id === id;
        });
        setImages(post.images);
        setShow(true);
    };

    // hiển thị modal nhận xét
    const handleShowComment = (id) => {
        setShowComment(true);
        setId(id);
    };
    const handleCloseComment = () => {
        setShowComment(false);
        setId(null);
    };

    function handleAccept(id) {
        httpRequest
            .patch(`/rest/post/accept/${id}`)
            .then((res) => {
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async function handleSend() {
        var myHeaders = new Headers();
        myHeaders.append('x-api-key', 'QeeLQ-Ia7f7LrP-M');
        myHeaders.append('Content-Type', 'application/json');
        var raw = JSON.stringify({
            network: 'devnet',
            from_address: '2P1EJ3W1TwUfQLJV9gBFSjZosEBhrz7iP8oJuH3PKxi2',
            to_address: 'DdKXs2bwZ4AvCPP3WVMz46JiGxUgGcKWFBCg4142h7Ng',
            amount: 0.1,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        const result = await fetch('https://api.shyft.to/sol/v1/wallet/send_sol', requestOptions);
        return result.json();
    }

    async function handleSign(encode) {
        var myHeaders = new Headers();
        myHeaders.append('x-api-key', 'QeeLQ-Ia7f7LrP-M');
        myHeaders.append('Content-Type', 'application/json');
        var raw = JSON.stringify({
            network: 'devnet',
            private_keys: ['4PNT842b5QAFdDsfuorJVc4JRp5YcyW9yRcr4DgAZPYTQNMWtVvGFEJPrGxirpUs8LQSNnxmHpczduJKNypAAvKQ'],
            encoded_transaction: encode,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
        };

        const result = await fetch('https://api.shyft.to/sol/v1/wallet/sign_transaction', requestOptions);
        return result.json();
    }

    async function handleRefuse() {
        var result = await handleSend();
        setTimeout(async () => {
            var encode = result.result.encoded_transaction;
            var resultSign = await handleSign(encode);
            if (resultSign.success) {
                httpRequest
                    .delete(`/rest/post/delete/${id}`)
                    .then((res) => {
                        var post = posts.find((item) => {
                            return item.id === id;
                        });
                        var images = post.images;
                        images.forEach((item) => {
                            const imgRef = ref(storage, `images/${item.name}`);
                            deleteObject(imgRef)
                                .then(() => {})
                                .catch((error) => {
                                    console.log(error);
                                });
                        });
                        alert('delete success');
                        navigate(0);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }, 1000);
    }
    return (
        <>
            <div className={styles['wrapper']}>
                <h1 className={styles['heading']}>Post confirmation</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th className={styles['text']}>Create date</th>
                            <th>Images</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td className={styles['block']}>{item.name}</td>
                                    <td className={styles['block']}>{item.address}</td>
                                    <td className={styles['block']}>{item.description}</td>
                                    <td className={styles['block']}>{item.createdate}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            className={styles['btn']}
                                            onClick={() => handleShow(item.id)}
                                        >
                                            View images
                                        </Button>
                                    </td>
                                    <td className={styles['group-action']}>
                                        <Button
                                            variant="success"
                                            className={styles['btn']}
                                            onClick={() => handleAccept(item.id)}
                                        >
                                            Accept
                                        </Button>
                                        <Button
                                            variant="danger"
                                            className={styles['btn']}
                                            onClick={() => handleShowComment(item.id)}
                                        >
                                            Refuse
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Images list</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles['wrapper-img']}>
                        <div className={styles['images']}>
                            {images.map((item) => {
                                return <img key={item.id} className={styles['img']} src={item.url} alt="img" />;
                            })}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal size="lg" show={showComment} onHide={handleCloseComment}>
                <Modal.Header closeButton>
                    <Modal.Title>Reason refuse</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <textarea className={styles['textarea']}></textarea>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseComment}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleRefuse}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* <div className="box-container" style={{ backgroundColor: 'white', height: '100%', marginTop: '30px' }}>
                <div className="row" style={{ position: 'relative', top: '30px' }}>
                    <div className="container-image col-md-6" style={{ paddingRight: '0' }}>
                        <div
                            className="box-image"
                            style={{ backgroundColor: 'red', height: '80%', width: '95%', margin: 'auto' }}
                        >
                            <img
                                style={{ width: '100%', height: '100%' }}
                                src="https://th.bing.com/th/id/R.1abee17234dca9feaf9d0064bf491f6e?rik=Gs1TTKs9hDMyHg&pid=ImgRaw&r=0"
                                alt=""
                            ></img>
                        </div>
                    </div>
                    <div className="container-image col-md-6" style={{ paddingLeft: '0' }}>
                        <div
                            className="box-image"
                            style={{ backgroundColor: 'red', height: '80%', width: '95%', margin: 'auto' }}
                        >
                            <img
                                style={{ width: '100%', height: '100%' }}
                                src="https://th.bing.com/th/id/R.1abee17234dca9feaf9d0064bf491f6e?rik=Gs1TTKs9hDMyHg&pid=ImgRaw&r=0"
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box-account">
                        <div className="container-account" style={{ width: '95%', margin: 'auto' }}>
                            <div className="row" style={{ display: 'inline' }}>
                                <img
                                    src="https://th.bing.com/th/id/OIP.qBks8TKpCJCW3vQSKK2ScwHaGy?pid=ImgDet&rs=1"
                                    alt=""
                                    className="avartar-account"
                                    style={{ width: '70px', height: '50px' }}
                                />
                                <span style={{ fontSize: '20px' }}>Name Account</span>
                                <p style={{ marginTop: '20px', padding: '0', fontSize: '15px' }}>Comments</p>
                            </div>
                            <div className="box-button-status-post row" style={{ textAlign: 'center' }}>
                                <div className="col-md-3">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        style={{ width: '160px', height: '45px', fontSize: '15px' }}
                                    >
                                        Xem chi tiết
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        style={{ width: '160px', height: '45px', fontSize: '15px' }}
                                    >
                                        Chấp nhận bài đăng
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        style={{ width: '160px', height: '45px', fontSize: '15px' }}
                                    >
                                        Hủy bài đăng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default AllowPost;
