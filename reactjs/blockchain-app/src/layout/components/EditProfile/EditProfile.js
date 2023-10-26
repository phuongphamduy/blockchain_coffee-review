import React, { useState } from 'react';
import styles from './EditProfile.module.scss';
import httpRequest from '~/utils/httpRequest';
import { useNavigate } from 'react-router-dom';

function getUser() {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
    return null;
}

const EditProfile = () => {
    const user = getUser();
    const [accountData, setAccountData] = useState({
        Fullname: user && user.fullname,
        Password: user && user.password,
        Birthday: user && user.birthday,
        Phone: user && user.phone,
        Wallet: user && user.wallet,
    });
    const [error, setError] = useState({
        fullname: '',
        password: '',
        phone: '',
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAccountData({
            ...accountData,
            [name]: value,
        });
    };

    function validate() {
        let error = { fullname: '', password: '', phone: '' };
        if (accountData.Fullname === '') {
            error.fullname = 'Fullname is required!';
            setError(error);
            return false;
        }
        if (accountData.Password === '') {
            error.password = 'Password is required!';
            setError(error);
            return false;
        }
        if (accountData.Phone.length < 10 && accountData.Phone.length !== 0) {
            error.phone = 'Phone number is atleast 10 number!';
            setError(error);
            return false;
        }
        if (accountData.Phone.length > 10 && accountData.Phone.length !== 0) {
            error.phone = 'Phone number is only 10 number!';
            setError(error);
            return false;
        }

        return true;
    }
    // date format
    function getFormattedDate(date) {
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return year + '-' + month + '-' + day;
    }

    const handleSave = async () => {
        const isValidate = validate();
        if (isValidate) {
            console.log(accountData);
            httpRequest
                .put('/rest/account/updateProfile', { id: user.id, ...accountData })
                .then((res) => {
                    var date = new Date(res.data.birthday);
                    let obj = {
                        ...res.data,
                        birthday: getFormattedDate(date),
                    };
                    sessionStorage.setItem('user', JSON.stringify(obj));
                    console.log(sessionStorage.getItem('user'));
                    alert('update success!');
                    navigate(0);
                })
                .catch((error) => {
                    alert('update failed');
                    console.log(error);
                });
        }
    };

    return (
        <div className={styles['editProfile-wrapper']}>
            <div className={styles.editProfile}>
                <h2>Edit Profile</h2>
                <form onSubmit={handleSave}>
                    <label>Fullname:</label>
                    <input type="text" name="Fullname" value={accountData.Fullname} onChange={handleInputChange} />
                    {error && error.fullname && <p className={styles['error-text']}>{error.fullname}</p>}
                    <label>Password:</label>
                    <input type="password" name="Password" value={accountData.Password} onChange={handleInputChange} />
                    {error && error.password && <p className={styles['error-text']}>{error.password}</p>}
                    <label>Birthday:</label>
                    <input type="date" name="Birthday" value={accountData.Birthday} onChange={handleInputChange} />
                    <label>Phone:</label>
                    <input type="text" name="Phone" value={accountData.Phone} onChange={handleInputChange} />
                    {error && error.phone && <p className={styles['error-text']}>{error.phone}</p>}
                    <label>Wallet address:</label>
                    <input type="text" name="Wallet" value={accountData.Wallet} onChange={handleInputChange} />
                    <button type="button" onClick={() => handleSave()}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
