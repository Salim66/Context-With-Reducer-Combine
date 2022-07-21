import React, { useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import MsgContext from '../context/MsgContext';


const Home = () => {

    const { msgState, dispatch } = useContext(MsgContext);

  return (
    <Container className='my-5'>
        <Row className='justify-content-center'>
            <Col md={5}>
                <Card>
                    <Card.Body>
                        <input type="text" className='form-control' value={ msgState } onChange={ e => dispatch({ type: 'MSG_UPDATE', payload: e.target.value }) } />
                        <hr />
                        <h1>{ msgState }</h1>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
};

export default Home;