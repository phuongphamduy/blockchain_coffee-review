import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import styles from './Map.module.scss';
function Map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAvO0DHfxQd-GNgthlZd15ACPt1DrNkwBA',
    });

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    return (
        <GoogleMap zoom={10} center={{ lat: 40, lng: -83 }} mapContainerClassName={styles['map']}>
            <MarkerF position={{ lat: 40, lng: -83 }} />
        </GoogleMap>
    );
}

export default Map;
