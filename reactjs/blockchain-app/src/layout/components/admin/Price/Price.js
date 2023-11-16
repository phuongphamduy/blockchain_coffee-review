import styles from './Price.module.scss';
import { Button, Table } from 'react-bootstrap';

function Price() {
    return (
        <>
            <div className={styles['container']}>
                <br />
                <br />
                <h1 className={styles['heading']}>Danh sách tài khoản</h1>
                <br />
                <br />

                <Table className={styles['table-content']}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User name</th>
                            <th>Post name</th>
                            <th>Number of sols get</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td>1</td>
                        <td>Phạm Duy Phương</td>
                        <td>Coongj cà phê sdkfjldskfjdslfjdslkfjsdfljdslfk</td>
                        <td>0.001</td>
                        <td className={styles['btn-group']}>
                            <Button variant="success" className={styles['btn']}>
                                Send
                            </Button>
                            <Button variant="danger" className={styles['btn']}>
                                refuse
                            </Button>
                            <Button variant="primary" className={styles['btn']}>
                                check
                            </Button>
                        </td>
                    </tbody>
                </Table>
                <br></br>
            </div>
        </>
    );
}
export default Price;
