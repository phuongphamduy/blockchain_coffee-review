// import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import styles from './Map.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Map() {
    //Google map

    // const center = useMemo(() => {
    //     return { lat: 10.81344, lng: 106.6205184 };
    // }, []);
    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: 'AIzaSyAvO0DHfxQd-GNgthlZd15ACPt1DrNkwBA',
    //     libraries: ['places'],
    // });

    // if (!isLoaded) {
    //     return <div>Loading...</div>;
    // }

    // mapbox

    const coordinate = useSelector((state) => state.searchAddress.value);
    console.log(coordinate);

    const Map = ReactMapboxGl({
        accessToken: 'pk.eyJ1IjoicGh1b25ncGhhbSIsImEiOiJjbG43azZsbGQwczl6MmtwOW8xZjN5ZDF1In0.X92d8OJ0kj2x4iYvkziY_A',
    });

    return (
        <>
            <Map
                // eslint-disable-next-line
                style="mapbox://styles/mapbox/streets-v9"
                containerStyle={{
                    height: '100%',
                    width: '100%',
                }}
                center={coordinate}
                zoom={[10]}
            >
                <Marker coordinates={[coordinate.lng, coordinate.lat]} anchor="bottom">
                    <FontAwesomeIcon icon={faLocationDot} className={styles['icon']} />
                </Marker>
            </Map>
            ;
        </>
    );
}

export default Map;
