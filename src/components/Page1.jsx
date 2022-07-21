import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import MsgContext from '../context/MsgContext';

const Page1 = () => {

  const { msgState } = useContext(MsgContext);

  return (
    <Container>
      <hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem provident eos nostrum vero consectetur labore ratione ullam molestiae a architecto.</p>
      <h1>{ msgState }</h1>
    </Container>
  )
};

export default Page1;