import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import { Container, Row } from "react-bootstrap";

export default function Profile() {
    return (<main id="main">
        <Header />
        <Container>
            <Row class="main-section">
                <h2>Your Wallets</h2>
                <p>
                    You currently have no wallets added to your account. They will displayed here once
                    added
                </p>
            </Row>
            <Row>This is the wallet section</Row>
        </Container>
        <Footer />
    </main>)

}