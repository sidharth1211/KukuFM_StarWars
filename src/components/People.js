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
     var id =1;
     
  return <div>
    <Row>
    {
      people.map((person)=>{
        console.log(person);
        id = person.url.replace(/[\D]/g, '');
        console.log(id);
        return(
          
          <Col sm={12} md={6} lg={4}>
          <div key={id}> 
          
          <Card className="my-3 p-3 rounded">
          <Link to = {`/people/${id}`}>
  <Card.Img variant="top" src={SWpin} />
  </Link>
  <Link to = {`/people/${id}`}>
  <Card.Body>
    <Card.Title>{person.name}</Card.Title>
    <Card.Text>
      {person.name}
    </Card.Text>
    
  </Card.Body>
  </Link>
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
