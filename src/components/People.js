import React from 'react';
import {Row, Col,Card, Button } from 'react-bootstrap'
const People = ({people}) => {
  return <div>
    <Row>
    {
      people.map((person)=>{
        console.log(person);
        return(
          <Col sm={12} md={6} lg={4}>
          <div key={person.url}> 
          
          <Card className="my-3 p-3 rounded">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{person.name}</Card.Title>
    <Card.Text>
      {person.name}
    </Card.Text>
    
  </Card.Body>
</Card>
<h1>{person.name}</h1>
          </div>
          </Col>
        )
      })
    }
    </Row>
  </div>;
};

export default People;
