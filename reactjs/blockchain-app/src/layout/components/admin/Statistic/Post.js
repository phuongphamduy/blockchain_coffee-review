import { Button, Table } from 'react-bootstrap';
import styles from './Statistic.module.scss';
function Post({ handleShowAccount, posts }) {
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
                            <th>Name</th>
                            <th>Address</th>
                            <th>Comments</th>
                            <th>Like</th>
                            <th>Dislike</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts &&
                            posts.map((item) => {
                                return (
                                    <tr>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Post;
