import styles from './ReportFeedback.module.scss'
import {Table} from 'react-bootstrap';


function ReportFeedback(){
    return (
        <>
     

        <div className={styles['container']}>
            <br/>
            <br/>
            <h1 className={styles['heading']}>Báo cáo & Phản hồi</h1>
            <br />
            <br />
            {/* <div className='table' > */}
               {/*  striped bordered hover */}
                <Table className={styles['table_content']}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bài bình luận</th>
                            <th>Ngày</th>
                            <th>Trạng thái</th>
                            <th>...</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>ID01</td>
                            <td>https://foursquare.com/v/starbucks/56a4f7a1498e3eaf7e0ab0dc</td>
                            <td>10/04/2023</td>
                            <td>chưa xử lý</td>
                            <td>edit</td>
                        </tr>
                        <tr>
                        <td>ID02</td>
                            <td>https://foursquare.com/v/starbucks/56a4f7a1498e3eaf7e0ab0dc</td>
                            <td>10/04/2023</td>
                            <td>Đã xử lý</td>
                            <td>edit</td>
                        </tr>
                        <tr>
                        <td>ID03</td>
                            <td>https://foursquare.com/v/starbucks/56a4f7a1498e3eaf7e0ab0dc</td>
                            <td>10/04/2023</td>
                            <td>chưa xử lý</td>
                            <td>edit</td>
                        </tr>
                        <tr>
                        <td>ID04</td>
                            <td>https://foursquare.com/v/starbucks/56a4f7a1498e3eaf7e0ab0dc</td>
                            <td>10/04/2023</td>
                            <td>chưa xử lý</td>
                            <td>edit</td>
                        </tr>
                        <tr>
                        <td>ID05</td>
                            <td>https://foursquare.com/v/starbucks/56a4f7a1498e3eaf7e0ab0dc</td>
                            <td>10/04/2023</td>
                            <td>chưa xử lý</td>
                            <td>edit</td>
                        </tr>
                        <tr>
                        <td>ID06</td>
                            <td>https://foursquare.com/v/starbucks/56a4f7a1498e3eaf7e0ab0dc</td>
                            <td>10/04/2023</td>
                            <td>chưa xử lý</td>
                            <td>edit</td>
                        </tr>
                    </tbody>
                </Table>
                <br></br>
            {/* </div> */}
        </div>

    </>
    )
}
export default ReportFeedback;