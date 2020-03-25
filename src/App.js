import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Card, CardGroup} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Container>
          <div className="world">
            <div>
              <Row>
                <Col>
                  <Card className="confirmed" style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </Card.Text>
                      <Card.Title>Card title</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col xs={6}>
                    <Card className="recovered" style={{ width: '18rem' }}>
                      <Card.Body>
                        <Card.Text>
                          This card has supporting text below as a natural lead-in to additional
                          content.{' '}
                        </Card.Text>
                      <Card.Title>Card title</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xs lg="6">
                  <div className="chart">
            
                  </div>
                </Col>
              </Row>
              <Card className="death" style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This card has even longer content than the first to
                    show that equal height action.
                  </Card.Text>
                  <Card.Title>Card title</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>

            <Card className="country">
              <Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
              </Card.Body>
            </Card>
        </Container>
      </header>
    </div>
  );
}

export default App;
