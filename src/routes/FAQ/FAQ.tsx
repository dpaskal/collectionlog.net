import { Col, Container, Row } from 'react-bootstrap';

import './FAQ.scss';

const FAQ = () => (
  <Container className='faq-container'>
    <Row>
      <h1 className='text-center'>Frequently Asked Questions</h1>
    </Row>
    <Row>
      <Col md={4}>
        <h3 className='text-yellow'>Why is my log data incorrect/not updating?</h3>
        <ul>
          <li>Make sure you have the "Upload collection log data" config enabled in the Runelite Plugin.</li>
          <li>Click through your collection log in game to ensure the plugin has updated collection log data</li>
        </ul>
      </Col>
    </Row>
  </Container>
);

export default FAQ;