import React from 'react'
import './App.scss'
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import Header from './components/Header'
import ConvertCase from './components/ConvertCase'
import ConvertBigNumber from './components/ConvertBigNumber'

const App = (): JSX.Element => (
  <>
    <Header />
    <Container className="mt-5 mb-5">
      <Row>
        <Col xs={12}>
          <Tabs defaultActiveKey="convertCase" id="homepage-tabs" className="mb-3">
            <Tab eventKey="convertCase" title="Convert Case">
              <ConvertCase />
            </Tab>
            <Tab eventKey="bigNumber" title="Big Number">
              <ConvertBigNumber />
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  </>
)

export default App
