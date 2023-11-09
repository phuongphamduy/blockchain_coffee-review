import { useState } from 'react';
import Post from './Post';
import Account from './Account';
function Statistic() {
    const [show, setShow] = useState(false);

    function handleShowPost() {
        setShow(false);
    }

    function handleShowAccount() {
        setShow(true);
    }

    return <>{show ? <Account handleShowPost={handleShowPost} /> : <Post handleShowAccount={handleShowAccount} />}</>;
}

export default Statistic;
