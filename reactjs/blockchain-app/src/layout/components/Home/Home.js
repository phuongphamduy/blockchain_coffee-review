import { useLocation } from 'react-router-dom';

import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { setDefaults, geocode, RequestType } from 'react-geocode';
import { useDispatch } from 'react-redux';
import { chooseAddress } from '~/redux/coodinate';
import backgroundImage from '~/statics/images/back_map.png';
import styles from './Home.module.scss';

const Home = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',

    };
    const location = useLocation();
    const [address, setAddress] = useState('');
    const [listAddress, setListAddress] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (address.trim().length === 0) {
            return;
        }

        let debounceF = _.debounce(function () {
            geocode(RequestType.ADDRESS, address)
                .then((response) => {
                    console.log(response);
                    setListAddress(response.results);
                })
                .catch((error) => {
                    console.log(error);
                    setListAddress([]);
                });
        }, 500);
        debounceF();

        return () => {
            debounceF.cancel();
        };
    }, [address]);

    // using geocoding
    setDefaults({
        key: 'AIzaSyAvO0DHfxQd-GNgthlZd15ACPt1DrNkwBA', // Your API key here.
        language: 'vi', // Default language for responses.
        region: 'vi', // Default region for responses.
    });

    function handleSelect(e) {
        setAddress(e);

        geocode(RequestType.ADDRESS, e)
            .then(({ results }) => {
                const coordinate = results[0].geometry.location;
                dispatch(chooseAddress(coordinate));
            })
            .catch(console.error);
    }
    return (
        <div className={styles['home-background']} style={divStyle}>
            <p>Má nó ko hiện ra</p>
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
                                return (
                                    <ComboboxOption
                                        key={item.place_id}
                                        value={item.formatted_address}
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
        </div>
    );

}

export default Home;