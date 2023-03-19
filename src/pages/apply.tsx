import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import { useWindowSize } from '@/hooks/useWindowSize'
import { BrowserWallet } from '@meshsdk/core'
import { useWallet } from '@meshsdk/react'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { Transaction } from '@meshsdk/core';

const Apply = () => {
    const viewport = useWindowSize()
    const viewportWidth = viewport?.width

    const [modalShow, setModalShow] = useState(false)
    const [addTokenModalShow, setAddTokenModalShow] = useState(false)

    const [installedWallets, setInstalledWallets] = useState<any[]>([]);

    const { name, wallet, connect, disconnect, connected, error, connecting } = useWallet();

    const [balance, setBalance] = useState<any>([]);
    const [amount, setAmount] = useState<any>(0);
    const [selectedToken, setSelectedToken] = useState<any>('lovelace');

    console.log({ name, wallet, connect, disconnect, connected, error, connecting });

    const getInstalledWallets = () => {
        const wallets = BrowserWallet.getInstalledWallets();
        console.log({ wallets });
        setInstalledWallets(wallets);
    }

    const connectWallet = async (name: string) => {
        await connect(name);
    }

    const handleDeposit = async () => {
        if (wallet) {
            if (selectedToken === 'lovelace') {
                try {
                    // DEPOSIT ADDRESS from Backend Address
                    const depositAddress = 'addr_test1qr7d7f2k5cfklygj9ys3zr53prx5jlx8shyz8xm44pz8g9rqqm8m2wrqmmshtflxqym2u05hv27gn0agyel5cp7f8f8qrjhzhc';
                    const tx = new Transaction({ initiator: wallet })
                    tx.sendLovelace(depositAddress, (amount * 1000000).toString());
                    const unsignedTx = await tx.build();
                    const signedTx = await wallet.signTx(unsignedTx);
                    const txHash = await wallet.submitTx(signedTx);
                    console.log({ txHash })

                    if (txHash) {
                        alert('Tokens sent successfully');
                        setAddTokenModalShow(false)
                    }

                    //TODO: Send txHash and amount to backend to save in database
                } catch (error) {
                    console.log({ error })
                    alert('Error while sending tokens');
                }
            } else {
                // Send selected tokens
                alert("Sending tokens is not implemented yet. Please send ADA for now. Thanks! :)")
            }
        }
    }

    useEffect(() => {
        if (connected) {
            console.log('connected')
            wallet.getBalance().then((balance) => {
                setBalance(balance)
            })
        }
    }, [connected])

    return (
        <main id='main'>
            <Header />
            <Container id='create-account' style={{ paddingTop: '30px' }}>
                <Row>
                    <div className='section-title apply-div'>
                        <h3 id='first-header'>To Apply, Create an Account here</h3>
                    </div>
                </Row>
                <Row>
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
                                    <div>
                                        Balance : {(balance?.find((b: any) => b.unit === 'lovelace')?.quantity / 1000000).toFixed(6)} ADA
                                    </div>
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
                    <Col>
                        <Button>Apply for Sirus</Button>
                    </Col>

                    {viewportWidth > 800 ? (
                        // display this HTML above 800px
                        <Col></Col>
                    ) : (
                        <React.Fragment></React.Fragment>
                    )}
                </Row>
            </Container>
            <Container id='apply-process'>
                <div className='section-title apply-div'>
                    <h3 id='second-heading'>Featured Tweets</h3>
                </div>
                <div className='apply-div special-div'>Step 1</div>
                <div className='apply-div'>Start by creating a project.</div>

                <div className='apply-div special-div'>Step 2</div>
                <div className='apply-div'>Through the manage tokens page, add tokens.</div>

                {
                    connected ? (
                        <Row className='my-4'>
                            <Col lg="4">
                                <Row>
                                    <Row>
                                        <select onChange={(e) => setSelectedToken(e.target.value)}>
                                            <option value='lovelace'>ADA</option>
                                        </select>
                                    </Row>

                                    <Button onClick={() => setAddTokenModalShow(true)}>
                                        Add Token
                                    </Button>
                                </Row>
                            </Col>

                        </Row>
                    ) : (<></>)
                }

                <Modal
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={addTokenModalShow}
                    onHide={() => setAddTokenModalShow(false)}
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Token
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder='Amount' />
                        <Button onClick={handleDeposit}>Deposit</Button>
                    </Modal.Body>
                </Modal>


                <div className='apply-div special-div'>Step 3</div>
                <div className='apply-div'>From the manage tweets page, send a tweet</div>

                <div className='apply-div special-div'>Step 4</div>
                <div className='apply-div'>
                    tell your users to go on a raid and get rewards!
                </div>
            </Container>

            <Footer />
        </main>
    )
}

export default Apply