import { useEffect, useState } from 'react';
import styles from './Account.module.scss';
import { Button, Table } from 'react-bootstrap';
import httpRequest from '~/utils/httpRequest';
import { useNavigate } from 'react-router-dom';
function Account() {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        httpRequest
            .get(`/rest/account`)
            .then((res) => {
                console.log(res);
                setAccounts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function giveAdmin(e) {
        const id = e.target.getAttribute('data');
        httpRequest
            .patch('/rest/account/giveAdmin', { id: id })
            .then((res) => {
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function removeAdmin(e) {
        const id = e.target.getAttribute('data');
        httpRequest
            .patch('/rest/account/removeAdmin', { id: id })
            .then((res) => {
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
    }
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
                            <th>Full name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Birthday</th>
                            <th>Phone</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts &&
                            accounts.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.fullname}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.birthday || 'empty'}</td>
                                        <td>{item.phone || 'empty'}</td>
                                        <td>
                                            {item.isadmin ? (
                                                <Button variant="danger" onClick={removeAdmin} data={item.id}>
                                                    Remove permission
                                                </Button>
                                            ) : (
                                                <Button variant="success" onClick={giveAdmin} data={item.id}>
                                                    Give permission
                                                </Button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
                <br></br>
            </div>
        </>
    );
}

export default Account;
