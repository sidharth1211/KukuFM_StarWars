import SWpin from './SWpin.jpg'
import {Row, Col,Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"
const People = () => {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchCharacters(){
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      console.log(data);
      setPeople(data.results);
    }

    fetchCharacters();
     },[])
     console.log('people',people)
  return <div>
    <Row>
    {
      people.map((person)=>{
        console.log(person);
        return(
          <Col sm={12} md={6} lg={4}>
          <div key={person.url}> 
          
          <Card className="my-3 p-3 rounded">
          
  <Card.Img variant="top" src={SWpin} />
  
  <Card.Body>
    <Card.Title>{person.name}</Card.Title>
    <Card.Text>
      {person.name}
    </Card.Text>
    
  </Card.Body>
</Card>

          </div>
          </Col>
        )
      })
    }
    </Row>
  </div>;
};

export default People;
