import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox';
import styles from './SearchAddress.module.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { chooseAddress } from '~/redux/coodinate';
import _ from 'lodash';
function SearchAddress({ width, select, portal }) {
    const [address, setAddress] = useState('');
    const [listAddress, setListAddress] = useState([]);
    // const user = useSelector((state) => state.user);
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
        setAddress(e);
        if (select) {
            axios
                .get(`https://rsapi.goong.io/geocode?address=${e}&api_key=${api}`)
                .then((res) => {
                    const cordinate = res.data.results[0].geometry.location;
                    dispatch(chooseAddress(cordinate));
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
    return (
        <>
            <Combobox openOnFocus={true} onSelect={handleSelect} style={{ zIndex: 9999999 }}>
                <ComboboxInput
                    aria-labelledby="demo"
                    className={styles['input']}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    style={{ width: width }}
                />
                <ComboboxPopover style={{ zIndex: 99999999 }} portal={portal}>
                    <ComboboxList aria-labelledby="demo" style={{ zIndex: 999999999 }}>
                        {listAddress && listAddress.length > 0 ? (
                            listAddress.map((item, index) => {
                                return (
                                    <ComboboxOption
                                        key={item.place_id}
                                        value={item.description}
                                        style={{ zIndex: 99999999 }}
                                    />
                                );
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
        </>
    );
}

export default SearchAddress;
