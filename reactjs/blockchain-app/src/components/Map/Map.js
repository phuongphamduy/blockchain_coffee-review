import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import styles from './Map.module.scss';
import { useMemo } from 'react';
function Map() {
    const center = useMemo(() => {
        return { lat: 10.81344, lng: 106.6205184 };
    }, []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAvO0DHfxQd-GNgthlZd15ACPt1DrNkwBA',
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <GoogleMap zoom={10} center={center} mapContainerClassName={styles['map-container']}>
                <MarkerF position={center} />
            </GoogleMap>
        </>
    );
}

export default Map;
