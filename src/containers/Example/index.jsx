import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ExampleCard from './components/ExampleCard';
import SearchBar from "../Mark/SearchToys";
import ToyList from "../Mark/ShowToys";

const ExamplePage = () => (
    <div>

        <h1>Sample Action & Reducer </h1>
        <SearchBar/>
        <hr/>
        <ToyList/>
        <hr/>
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Example Page One</h3>
      </Col>
    </Row>
    <Row>
      <ExampleCard />
    </Row>
  </Container>
    </div>
);

export default ExamplePage;
