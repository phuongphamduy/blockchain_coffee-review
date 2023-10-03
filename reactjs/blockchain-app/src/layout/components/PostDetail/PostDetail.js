import { Button } from 'react-bootstrap';
import styles from './PostDetail.module.scss';
function PostDetail() {
    return (
        <>
            <Button variant="primary">Hello</Button>
            <div className={styles['red']}>hello</div>
        </>
    );
}

export default PostDetail;
