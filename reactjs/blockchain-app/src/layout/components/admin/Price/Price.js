import styles from './Price.module.scss';
import { Button, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import httpRequest from '~/utils/httpRequest';
import { Connection, Keypair, LAMPORTS_PER_SOL, SystemProgram, Transaction, clusterApiUrl } from '@solana/web3.js';
import bs58 from 'bs58';
import * as buffer from 'buffer';
import { Link, useNavigate } from 'react-router-dom';
function Price() {
    const [requestPrice, setRequestPrice] = useState();
    const navigate = useNavigate();
    var provider;
    const getProvider = () => {
        if ('phantom' in window) {
            const provider = window.phantom?.solana;

            if (provider?.isPhantom) {
                return provider;
            }
        }
    };

    window.Buffer = buffer.Buffer;

    useEffect(() => {
        httpRequest
            .get('/rest/pricepost/getRequestPrice')
            .then((res) => {
                setRequestPrice(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    async function handleSend(wallet, sols) {
        provider = getProvider();
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: Keypair.fromSecretKey(
                    bs58.decode(
                        '6iodM6fLEZCFDkcCeGJCebVWTvDYqa7pr9amhsrRJuXZNm63tjpUDBzprWoLr4FqfCfdkqFy3Youpe8YPNk6LSp',
                    ),
                ).publicKey,
                toPubkey: wallet,
                lamports: sols * LAMPORTS_PER_SOL,
            }),
        );
        let blockhash = (await connection.getLatestBlockhash('finalized')).blockhash;
        transaction.recentBlockhash = blockhash;
        transaction.feePayer = Keypair.fromSecretKey(
            bs58.decode('6iodM6fLEZCFDkcCeGJCebVWTvDYqa7pr9amhsrRJuXZNm63tjpUDBzprWoLr4FqfCfdkqFy3Youpe8YPNk6LSp'),
        ).publicKey;
        try {
            const { signature } = await provider.signAndSendTransaction(transaction);
            await connection.getSignatureStatus(signature);
            alert('Send sols successfully');
            return true;
        } catch (error) {
            alert('send sols failed');
            return false;
        }
    }

    async function handleSendSol(wallet, sols, id) {
        if (await handleSend(wallet, sols)) {
            httpRequest
                .patch('rest/pricepost/updateSend', { id, issend: true })
                .then((res) => {
                    navigate(0);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    function handleRefuse(id) {
        httpRequest
            .delete(`/rest/pricepost/delete/${id}`)
            .then((res) => {
                navigate(0);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <div className={styles['container']}>
                <br />
                <br />
                <h1 className={styles['heading']}>Yêu cầu chuyển thưởng</h1>
                <br />
                <br />

                <Table className={styles['table-content']}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User name</th>
                            <th>Post name</th>
                            <th>Number of sols get</th>
                            <th>Wallet address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requestPrice &&
                            requestPrice.map((item) => {
                                return (
                                    <tr>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                        <td className={styles['btn-group']}>
                                            <Button
                                                variant="success"
                                                className={styles['btn']}
                                                onClick={() => handleSendSol(item[4], item[3], item[0])}
                                            >
                                                Send
                                            </Button>
                                            <Button
                                                variant="danger"
                                                className={styles['btn']}
                                                onClick={() => handleRefuse(item[0])}
                                            >
                                                refuse
                                            </Button>
                                            <Link to={`/post/${item[5]}`} className={styles['btn-link']}>
                                                Check
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </Table>
                <br></br>
            </div>
        </>
    );
}
export default Price;
