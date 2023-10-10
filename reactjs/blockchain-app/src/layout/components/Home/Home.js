import '@reach/combobox/styles.css';
import backgroundImage from '~/statics/images/back_map.png';
import styles from './Home.module.scss';
import SearchAddress from '~/components/SearchAddress';

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

                    <div>
                        <SearchAddress />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
