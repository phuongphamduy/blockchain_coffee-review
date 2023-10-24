import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './EditProfile.module.scss';
import httpRequest from '~/utils/httpRequest';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

const EditProfile = () => {
    const { accountId } = useParams();
    const [accountData, setAccountData] = useState({
        Fullname: '',
        Password: '',
        Birthday: '',
        Phone: '',
    });
    const user = getUser();

    useEffect(() => {
        // Define a function to fetch data from an API (replace this with your actual API endpoint)
        // const fetchDataFromAPI = async () => {
        //   try {
        //     const response = await fetch(`/api/accounts/${accountId}`);
        //     if (response.ok) {
        //       const data = await response.json();
        //       setAccountData(data);
        //     } else {
        //       throw new Error('Không thể lấy dữ liệu tài khoản.');
        //     }
        //   } catch (error) {
        //     console.error('Lỗi khi lấy dữ liệu:', error);
        //   }
        // };
        // fetchDataFromAPI();
    }, [accountId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountData({
            ...accountData,
            [name]: value,
        });
    };

    const handleSave = async () => {
        try {
            // Gửi yêu cầu PUT để cập nhật thông tin tài khoản
            // const response = await fetch(`/api/accounts/${accountId}`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(accountData),
            // });
            // if (response.ok) {
            //     // Dữ liệu đã được cập nhật thành công
            //     alert('Dữ liệu đã được cập nhật!');
            // } else {
            //     // Xảy ra lỗi trong quá trình cập nhật
            //     alert('Lỗi khi cập nhật dữ liệu.');
            // }
        } catch (error) {
            // Xử lý lỗi trong trường hợp có lỗi khi gửi yêu cầu
            alert('Lỗi khi gửi yêu cầu cập nhật.');
            console.error('Lỗi:', error);
        }

        httpRequest
            .put('/rest/account/exm', { id: user.id, ...accountData })
            .then((res) => {})
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={styles.editProfile}>
            <h2>Edit Profile</h2>
            <form>
                <label>Fullname:</label>
                <input type="text" name="Fullname" value={accountData.Fullname} onChange={handleInputChange} />
                <label>Password:</label>
                <input type="password" name="Password" value={accountData.Password} onChange={handleInputChange} />
                <label>Birthday:</label>
                <input type="date" name="Birthday" value={accountData.Birthday} onChange={handleInputChange} />
                <label>Phone:</label>
                <input type="text" name="Phone" value={accountData.Phone} onChange={handleInputChange} />
                <button type="button" onClick={handleSave}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
