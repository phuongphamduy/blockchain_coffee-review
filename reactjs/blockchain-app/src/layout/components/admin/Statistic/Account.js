import { Button, Table } from 'react-bootstrap';
import styles from './Statistic.module.scss';
function Account({ handleShowPost, accounts }) {
    return (
        <>
            <div className={styles['wrapper-heading']}>
                <h2 className={styles['heading']}>Thống kê về tài khoản</h2>
                <Button onClick={() => handleShowPost()} variant="primary" className={styles['btn']}>
                    Bài đăng
                </Button>
            </div>
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Fullname</th>
                            <th>posts</th>
                            <th>comment</th>
                            <th>Like</th>
                            <th>Dislike</th>
                            <th>Saved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts &&
                            accounts.map((item) => {
                                return (
                                    <tr>
                                        <td>{item.fullname}</td>
                                        <td>{item.posts.length}</td>
                                        <td>{item.reviews.length}</td>
                                        <td>
                                            {item.interactions &&
                                                item.interactions.reduce((accum, item) => {
                                                    if (item.islike) {
                                                        return accum + 1;
                                                    } else {
                                                        return accum;
                                                    }
                                                }, 0)}
                                        </td>
                                        <td>
                                            {item.interactions &&
                                                item.interactions.reduce((accum, item) => {
                                                    if (!item.islike) {
                                                        return accum + 1;
                                                    } else {
                                                        return accum;
                                                    }
                                                }, 0)}
                                        </td>
                                        <td>{item.favorites.length}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Account;
