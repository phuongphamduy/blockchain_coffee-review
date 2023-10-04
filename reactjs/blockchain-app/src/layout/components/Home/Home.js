import { Button } from 'react-bootstrap';
import styles from '.Home.module.scss';
function Home() {
    return (
        <>
            <Button variant="primary">Hello</Button>
            <div className={styles['red']}>hello</div>
        </>
    );
}

export default Home;
