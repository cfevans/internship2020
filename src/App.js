import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Card} from 'react-bootstrap';


import Activity1 from './Activity1/index'








export default class App extends Component {
  render() {
    return (
      <Container>
        <Card>
          <Card.Header>
            <Card.Title>Sample Exercises</Card.Title>
          </Card.Header>
          <Card.Body>
            <Activity1 />

          </Card.Body>
        </Card>
      </Container>
    )
  }
}
