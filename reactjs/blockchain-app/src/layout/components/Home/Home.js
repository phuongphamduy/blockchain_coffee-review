import '@reach/combobox/styles.css';
import backgroundImage from '~/statics/images/back_map.png';
import styles from './Home.module.scss';
import SearchAddress from '~/components/SearchAddress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    const divStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
    };

    return (
        <div className={styles['home-background']} style={divStyle}>
            <div className={styles['background-color']}>
                <div className={styles['flex']}>
                    <div className={styles['intro_text']}>
                        <p>COFFEE REVIEW</p>
                    </div>

                    <div>
                        <p className={styles['text_1']}>Xem đánh giá các quán cà phê ở khu vực Hồ Chí Minh</p>
                    </div>
                    <br />
                    <br />

                    <div className={styles['group-search']}>
                        <SearchAddress width="500px" portal={true} />
                        <Link to="/post" className={styles['btn']}>
                            <FontAwesomeIcon className={styles['icon']} icon={faSearch} />
                            Search
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
