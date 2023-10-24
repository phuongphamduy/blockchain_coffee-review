import styles from './AllowPost.module.scss';

function AllowPost() {
    return (
        <>
            <div className={styles['wrapper']}>
                <h1>Post confirmation</h1>
            </div>

            {/* <div className="box-container" style={{ backgroundColor: 'white', height: '100%', marginTop: '30px' }}>
                <div className="row" style={{ position: 'relative', top: '30px' }}>
                    <div className="container-image col-md-6" style={{ paddingRight: '0' }}>
                        <div
                            className="box-image"
                            style={{ backgroundColor: 'red', height: '80%', width: '95%', margin: 'auto' }}
                        >
                            <img
                                style={{ width: '100%', height: '100%' }}
                                src="https://th.bing.com/th/id/R.1abee17234dca9feaf9d0064bf491f6e?rik=Gs1TTKs9hDMyHg&pid=ImgRaw&r=0"
                                alt=""
                            ></img>
                        </div>
                    </div>
                    <div className="container-image col-md-6" style={{ paddingLeft: '0' }}>
                        <div
                            className="box-image"
                            style={{ backgroundColor: 'red', height: '80%', width: '95%', margin: 'auto' }}
                        >
                            <img
                                style={{ width: '100%', height: '100%' }}
                                src="https://th.bing.com/th/id/R.1abee17234dca9feaf9d0064bf491f6e?rik=Gs1TTKs9hDMyHg&pid=ImgRaw&r=0"
                                alt=""
                            ></img>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="box-account">
                        <div className="container-account" style={{ width: '95%', margin: 'auto' }}>
                            <div className="row" style={{ display: 'inline' }}>
                                <img
                                    src="https://th.bing.com/th/id/OIP.qBks8TKpCJCW3vQSKK2ScwHaGy?pid=ImgDet&rs=1"
                                    alt=""
                                    className="avartar-account"
                                    style={{ width: '70px', height: '50px' }}
                                />
                                <span style={{ fontSize: '20px' }}>Name Account</span>
                                <p style={{ marginTop: '20px', padding: '0', fontSize: '15px' }}>Comments</p>
                            </div>
                            <div className="box-button-status-post row" style={{ textAlign: 'center' }}>
                                <div className="col-md-3">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        style={{ width: '160px', height: '45px', fontSize: '15px' }}
                                    >
                                        Xem chi tiết
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button
                                        type="button"
                                        class="btn btn-success"
                                        style={{ width: '160px', height: '45px', fontSize: '15px' }}
                                    >
                                        Chấp nhận bài đăng
                                    </button>
                                </div>
                                <div className="col-md-3">
                                    <button
                                        type="button"
                                        class="btn btn-danger"
                                        style={{ width: '160px', height: '45px', fontSize: '15px' }}
                                    >
                                        Hủy bài đăng
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
}

export default AllowPost;
