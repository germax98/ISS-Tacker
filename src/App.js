import { HeaderTest } from './components/Header/header.component';
import IssData from './components/IssData/IssData.component';
import { MapIss } from './components/MapIss/MapIss.component';
import { Country } from './components/Country/country.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';

function App() {
  return (
    //row laengs
    // col vertical
      <Container fluid>
        <Row>Title</Row>
        <Row>
          <Col xl={9} className='colone'>
            <Row>
              <MapIss/>
            </Row>
            {/* <Row>
              
              <Col>Data1</Col>
              <Col>Data2</Col>
            </Row>*/}
          </Col>
          <Col className='coltwo'>
            <Row><HeaderTest/></Row>
            <Row><IssData/></Row>
            <Row><Country/></Row>
          </Col>
        </Row>
      </Container>
      
    
  );
}

export default App;
