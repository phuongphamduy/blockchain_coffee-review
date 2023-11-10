import { useEffect, useState } from 'react';
import Post from './Post';
import Account from './Account';
import httpRequest from '~/utils/httpRequest';
function Statistic() {
    const [show, setShow] = useState(false);
    const [posts, setPosts] = useState();
    const [accounts, setAccounts] = useState();
    useEffect(() => {
        httpRequest
            .get('/rest/post/report')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        httpRequest
            .get('/rest/account')
            .then((res) => {
                setAccounts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    function handleShowPost() {
        setShow(false);
    }

    function handleShowAccount() {
        setShow(true);
    }

    return (
        <>
            {show ? (
                <Account handleShowPost={handleShowPost} accounts={accounts} />
            ) : (
                <Post handleShowAccount={handleShowAccount} posts={posts} />
            )}
        </>
    );
}

export default Statistic;
