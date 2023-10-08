import styles from './Header.module.scss';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import Logo from '~/statics/images/Logo_Coffe.png';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { chooseAddress } from '~/redux/coodinate';
import httpRequest from '~/utils/httpRequest';
import axios from 'axios';
function Header() {
    const location = useLocation();
    const [address, setAddress] = useState('');
    const [listAddress, setListAddress] = useState([]);
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    // goong map api key
    const api = 'a8onfs2eztyTAudonkL8ParEypAAEu3eRlu29b1N';

    useEffect(() => {
        if (address.trim().length === 0) {
            return;
        }

        let debounceF = _.debounce(function () {
            axios
                .get(
                    `https://rsapi.goong.io/Place/AutoComplete?api_key=${api}&location=21.013715429594125,%20105.79829597455202&input=${address}`,
                )
                .then((res) => {
                    setListAddress(res.data.predictions);
                })
                .catch((error) => {
                    console.log(error);
                });
        }, 500);
        debounceF();

        return () => {
            debounceF.cancel();
        };
    }, [address]);

    // hàm xử lý khi chọn địa chỉ trên ô tìm kiếm
    function handleSelect(e) {
        axios
            .get(`https://rsapi.goong.io/geocode?address=${e}&api_key=${api}`)
            .then((res) => {
                const cordinate = res.data.results[0].geometry.location;
                dispatch(chooseAddress(cordinate));
            })
            .catch((error) => {
                console.log(error);
            });
        setAddress(e);
    }

    // hàm xử lý đăng nhập
    function handleLogin() {
        httpRequest
            .get('/rest/account')
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Col className={styles['d-flex']}>
                <div className={styles['logo-section']}>
                    <img src={Logo} className={styles['header-logo']} alt="Logo" />
                    <h1>Coffee Review</h1>
                </div>
                {location.pathname.includes('/post') ? (
                    <div className={styles['search-section']}>
                        <InputGroup className="" size="lg">
                            <Form.Control className={styles['input']} placeholder="I'm looking for..." />
                        </InputGroup>
                        <div>
                            <Combobox onSelect={handleSelect}>
                                <ComboboxInput
                                    aria-labelledby="demo"
                                    className={styles['input']}
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Address"
                                />
                                <ComboboxPopover>
                                    <ComboboxList aria-labelledby="demo">
                                        {listAddress && listAddress.length > 0 ? (
                                            listAddress.map((item, index) => {
                                                return <ComboboxOption key={item.place_id} value={item.description} />;
                                            })
                                        ) : (
                                            <p
                                                style={{
                                                    margin: 0,
                                                    color: '#454545',
                                                    padding: '0.25rem 1rem 0.75rem 1rem',
                                                    fontStyle: 'italic',
                                                }}
                                            >
                                                No results :(
                                            </p>
                                        )}
                                    </ComboboxList>
                                </ComboboxPopover>
                            </Combobox>
                        </div>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} />
                    </div>
                ) : (
                    <></>
                )}
            </Col>
            <Col>
                <div className={styles['account-section']}>
                    <Button variant="outline-primary" className={styles['btn']} onClick={handleLogin}>
                        Login
                    </Button>
                    <Button variant="outline-warning" className={styles['btn']}>
                        Sign up
                    </Button>
                </div>
            </Col>
        </>
    );
}

export default Header;
