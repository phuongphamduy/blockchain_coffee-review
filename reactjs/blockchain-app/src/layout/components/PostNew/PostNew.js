import SearchAddress from '~/components/SearchAddress';
import styles from './PostNew.module.scss';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '~/utils/firebase';
import { v4 as uuidv4 } from 'uuid';
import httpRequest from '~/utils/httpRequest';
import { useSelector } from 'react-redux';
import {
    Connection,
    SystemProgram,
    Transaction,
    clusterApiUrl,
    PublicKey,
    LAMPORTS_PER_SOL,
    Keypair,
} from '@solana/web3.js';
import bs58 from 'bs58';
import * as buffer from 'buffer';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
}

function PostNew({ close }) {
    const [ListImg, setListImg] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [show, setShow] = useState(false);
    const coordinate = useSelector((state) => state.coordinate.value);
    const user = getUser();
    var provider;
    const getProvider = () => {
        if ('phantom' in window) {
            const provider = window.phantom?.solana;

            if (provider?.isPhantom) {
                return provider;
            }
        }
    };
    window.Buffer = buffer.Buffer;
    function handleChange(e) {
        var fileList = e.target.files;
        var array = [];
        var id = ListImg.length > 0 ? ListImg[ListImg.length - 1].id : 0;
        for (var i = 0; i < fileList.length; i++) {
            id++;
            array.push({
                preview: URL.createObjectURL(fileList[i]),
                id: id,
                name: fileList[i].name,
                file: fileList[i],
            });
        }
        setListImg((prev) => {
            return [...prev, ...array];
        });
    }
    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }

    async function handleSend() {
        provider = getProvider();
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: provider.publicKey,
                toPubkey: Keypair.fromSecretKey(
                    bs58.decode(
                        '4PNT842b5QAFdDsfuorJVc4JRp5YcyW9yRcr4DgAZPYTQNMWtVvGFEJPrGxirpUs8LQSNnxmHpczduJKNypAAvKQ',
                    ),
                ).publicKey,
                lamports: 0.1 * LAMPORTS_PER_SOL,
            }),
        );
        let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = provider.publicKey;
        try {
            const { signature } = await provider.signAndSendTransaction(transaction);
            const res = await connection.getSignatureStatus(signature);
            alert('payment success!');
            return true;
        } catch (error) {
            return false;
        }
    }

    async function handlePost() {
        if (ListImg.length === 0) {
            alert('you not choose any images');
            return;
        }
        var isSend = await handleSend();
        console.log(isSend);
        if (isSend) {
            const imgUrls = [];
            for (var i = 0; i < ListImg.length; i++) {
                var imgRef = ref(storage, `images/${ListImg[i].name + uuidv4()}`);
                const snapshot = await uploadBytes(imgRef, ListImg[i].file);
                imgUrls.push(await getDownloadURL(snapshot.ref));
            }
            const post = {
                name: name,
                address: coordinate.address,
                lat: coordinate.lat,
                lng: coordinate.lng,
                description,
                createdate: new Date(),
                account: {
                    id: user.id,
                },
                get images() {
                    return imgUrls.map((item) => {
                        return {
                            url: item,
                        };
                    });
                },
            };
            httpRequest
                .post('/rest/post', post)
                .then((res) => {
                    alert('Post success');
                    close();
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            alert('post failed');
        }
    }

    function handleDelete(e) {
        var index = e.target.getAttribute('data-index');
        if (index == null) {
            index = e.target.parentElement.getAttribute('data_index');
        }
        setListImg((prev) => {
            return prev.filter((item) => {
                return item.id !== Number.parseInt(index);
            });
        });
    }
    return (
        <>
            <div className={styles['post-form-section']}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles['label']}>Name of coffee shop</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Name of the coffee shop"
                        className={styles['input']}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <div>
                    <Form.Label className={styles['label']}>Address</Form.Label>
                    <SearchAddress width="100%" portal={false} />
                </div>
                <div>
                    <Form.Label className={styles['label']}>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        style={{ height: '100px', fontSize: '1.4rem' }}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label className={styles['label']}>Default file input example</Form.Label>
                        <Form.Control type="file" multiple onChange={handleChange} />
                    </Form.Group>
                </div>
                <div className={styles['img-preview-wrapper']}>
                    {ListImg.map((item, index) => {
                        if (index >= 3) {
                            return <></>;
                        }
                        return <img key={item.id} src={item.preview} height="200px" width="230px" alt="img" />;
                    })}
                    {ListImg.length >= 4 ? (
                        <div style={{ height: '200px', width: '230px', backgroundColor: '#ccc', display: 'flex' }}>
                            <h4 className={styles['more-img']}>+ {ListImg.length - 3}</h4>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={styles['btn-group']}>
                    <Button variant="primary" className={styles['btn']} onClick={handlePost}>
                        Post
                    </Button>
                    <Button variant="danger" className={styles['btn']} onClick={handleShow}>
                        View image
                    </Button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>View Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className={styles['img-view-wrapper']}>
                        {ListImg.map((item, index) => {
                            return (
                                <div key={item.id} data_index={item.id} className={styles['img-wrapper']}>
                                    <img src={item.preview} height="100%" width="100%" alt="img" />
                                    <FontAwesomeIcon
                                        data_index={item.id}
                                        icon={faXmark}
                                        className={styles['icon']}
                                        onClick={handleDelete}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default PostNew;
