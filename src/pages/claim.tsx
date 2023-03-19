import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Modal } from "react-bootstrap";
import axios from 'axios'
import { useAddress, useWallet } from "@meshsdk/react";
import { BrowserWallet } from "@meshsdk/core";

const Claim = () => {
    const [amount, setAmount] = useState<any>(0);
    const [modalShow, setModalShow] = useState(false)
    const [installedWallets, setInstalledWallets] = useState<any[]>([]);
    const { name, wallet, connect, disconnect, connected, error, connecting } = useWallet();
    const address = useAddress(0)

    console.log({ address })

    const getInstalledWallets = () => {
        const wallets = BrowserWallet.getInstalledWallets();
        console.log({ wallets });
        setInstalledWallets(wallets);
    }

    const connectWallet = async (name: string) => {
        await connect(name);
    }

    const claim = async () => {
        console.log(amount);
        try {
            const data = await axios.post("http://localhost:4000/withdraw", {
                amount: amount,
                address: address
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(data);
            alert("Claimed Successfully");
        }
        catch (err) {
            console.log(err);
            alert("Claim Failed");
        }
    };
    return (
        <React.Fragment>
            <main id="main">
                <Header />
                <Container className="d-flex h-screen justify-content-center align-items-center">

                    <div>

                        <Row className="mb-2">
                            <Col>
                                {
                                    connected ? (
                                        <>
                                            <Button
                                                variant='danger'
                                                onClick={
                                                    () => {
                                                        disconnect()
                                                        setModalShow(false)
                                                    }
                                                }
                                            >Disconnect</Button>

                                        </>
                                    ) : (
                                        <>
                                            <Button
                                                onClick={
                                                    () => {
                                                        getInstalledWallets()
                                                        setModalShow(true)
                                                    }
                                                }
                                            >Connect Wallet</Button>
                                            <Modal
                                                size="sm"
                                                aria-labelledby="contained-modal-title-vcenter"
                                                centered
                                                show={modalShow}
                                                onHide={() => setModalShow(false)}
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title id="contained-modal-title-vcenter">
                                                        Connect Cardano Wallet
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    {
                                                        installedWallets.map((wallet, index) => {
                                                            return (
                                                                <Button
                                                                    variant='outline-primary'
                                                                    key={index}
                                                                    onClick={() => { connectWallet(wallet.name); setModalShow(false) }}
                                                                > <img style={{
                                                                    width: '20px',
                                                                    height: '20px',
                                                                }} src={wallet.icon} alt="" /> {wallet.name}</Button>
                                                            )
                                                        })
                                                    }
                                                </Modal.Body>

                                            </Modal>
                                        </>
                                    )
                                }

                            </Col>
                        </Row>

                        {/* <Row>There are currently no Claim, your Claims will be displayed here</Row> */}
                        {
                            connected && address && (
                                <>
                                    <input className="mb-2" type="number" placeholder="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                                    <Button onClick={claim}>
                                        Claim / Withdraw
                                    </Button>

                                </>
                            )
                        }
                    </div>



                </Container>
                <Footer />
            </main>
        </React.Fragment>
    );
}

export default Claim;
