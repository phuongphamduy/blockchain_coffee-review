import SearchAddress from '~/components/SearchAddress';
import styles from './PostNew.module.scss';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function PostNew() {
    const [ListImg, setListImg] = useState([]);
    const [show, setShow] = useState(false);
    function handleChange(e) {
        var fileList = e.target.files;
        var array = [];
        var id = ListImg.length > 0 ? ListImg[ListImg.length - 1].id : 0;
        for (var i = 0; i < fileList.length; i++) {
            id++;
            array.push({ preview: URL.createObjectURL(fileList[i]), id: id });
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

    function handleDelete(e) {
        var index = e.target.getAttribute('data-index');
        if (index == null) {
            index = e.target.parentElement.getAttribute('data_index');
        }
        setListImg((prev) => {
            return prev.filter((item) => {
                if (item.id !== Number.parseInt(index)) {
                    URL.revokeObjectURL(item.preview);
                }
                return item.id !== Number.parseInt(index);
            });
        });
    }
    return (
        <>
            <div className={styles['post-form-section']}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles['label']}>Name of coffee shop</Form.Label>
                    <Form.Control type="text" placeholder="Name of the coffee shop" className={styles['input']} />
                </Form.Group>
                <div>
                    <Form.Label className={styles['label']}>Address</Form.Label>
                    <SearchAddress width="100%" select={false} portal={false} />
                </div>
                <div>
                    <Form.Label className={styles['label']}>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        style={{ height: '100px', fontSize: '1.4rem' }}
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
                    <Button variant="primary" className={styles['btn']}>
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
