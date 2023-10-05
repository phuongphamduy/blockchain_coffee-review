

// import { Container, Col, Row, Image } from 'react-bootstrap';
import  './Account.module.scss';
import { Table } from 'react-bootstrap';
function Account() {
    return (
        <>

            <div className="Container" style={{ backgroundColor: 'aqua', textAlign: 'center' }}>
                <br/>
                <br/>
                <h1 style={{ color:'red'}}>Danh sách tài khoản</h1>
                <br />
                <br />
                <div className='Tablestyle' >
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Password</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Birthday</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Pham</td>
                                <td>Duy Phuong</td>
                                <td>phuong123</td>
                                <td>0123456789</td>
                                <td>phuongpd@fpt.edu.vn</td>
                                <td>17-3-2003</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Huynh</td>
                                <td>Van Truong</td>
                                <td>truong123</td>
                                <td>0123456789</td>
                                <td>truonghv@fpt.edu.vn</td>
                                <td>17-3-2003</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Vo</td>
                                <td>Minh Tam</td>
                                <td>tam123</td>
                                <td>0123456789</td>
                                <td>tamvm@fpt.edu.vn</td>
                                <td>17-9-2003</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Phan Hoang</td>
                                <td>Hoai Bao</td>
                                <td>bao123</td>
                                <td>0123456789</td>
                                <td>baoph@fpt.edu.vn</td>
                                <td>17-3-2003</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Ho</td>
                                <td>Thanh Dien</td>
                                <td>dien123</td>
                                <td>0123456789</td>
                                <td>dienht@fpt.edu.vn</td>
                                <td>17-3-2003</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Pham</td>
                                <td>Duy Phuong</td>
                                <td>phuong123</td>
                                <td>0123456789</td>
                                <td>phuongpd@fpt.edu.vn</td>
                                <td>17-3-2003</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>

        </>
    );
}

export default Account;
