import SearchAddress from '~/components/SearchAddress';
import styles from './PostNew.module.scss';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from 'react';

function PostNew() {
    const [ListImg, setListImg] = useState([]);
    function handleChange(e) {
        var imgUrl = URL.createObjectURL(e.target.files[0]);
        console.log(imgUrl);
        setListImg((prev) => [...prev, imgUrl]);
    }

    useEffect(() => {
        return () => {
            ListImg.forEach((item) => {
                URL.revokeObjectURL(item);
            });
        };
    });
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
                        <Form.Control type="file" onChange={handleChange} />
                    </Form.Group>
                </div>
                <div className={styles['img-preview-wrapper']}>
                    {ListImg.map((item, index) => {
                        if (index >= 3) {
                            return <></>;
                        }
                        return <img key={index} src={item} height="200px" width="230px" alt="img" />;
                    })}
                    {ListImg.length >= 4 ? (
                        <div style={{ height: '200px', width: '230px', backgroundColor: '#ccc', display: 'flex' }}>
                            <h4 className={styles['more-img']}>+ {ListImg.length - 3}</h4>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </>
    );
}

export default PostNew;
