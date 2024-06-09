import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


interface Credentials {
    username: string;
    password: string;
}
interface BillInfor {
    billID: string;
    billCharge: number;
}

const LoginPage: React.FC = () => {
    const [credentials, setCredentials] = useState<Credentials>({
        username: '',
        password: '',
    });

    const [billInfor, setBillInfor] = useState<BillInfor>({
        billID: '',
        billCharge: 0,
    });

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    }

    const handleBill = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBillInfor({
            ...billInfor,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Provider Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" onChange={handleLogin} name="username" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={handleLogin} name="password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Bill Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter your bill number" onChange={handleBill} name="billID" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Charge Due</Form.Label>
                            <Form.Control type="password" placeholder="Enter amount due to find your bill" onChange={handleBill} name="billCharge" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>

        </Container>

    )
}

export default LoginPage;