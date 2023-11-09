import { Button, Table } from 'react-bootstrap';
import styles from './Statistic.module.scss';
function Post({ handleShowAccount }) {
    return (
        <>
            <div className={styles['wrapper-heading']}>
                <h2 className={styles['heading']}>Thống kê về bài đăng</h2>
                <Button onClick={() => handleShowAccount()} variant="primary" className={styles['btn']}>
                    Tài khoản người dùng
                </Button>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Description</th>
                            <th>Create date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Post;
