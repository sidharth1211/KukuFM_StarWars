import React, {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import SWpin from './SWpin.jpg'
const PeopleDesc = () => {
    const params = useParams();
    console.log(params.id);
const [character,setCharacter]= useState([]);
useEffect(() => {
    async function fetchCharacter(){
    
    
      let res = await fetch(`https://swapi.dev/api/people/${params.id}/?format=json`);
      let data = await res.json();
      console.log(data);
      setCharacter(data);
    }
   
    fetchCharacter();
     },[]);
  return <div>
      <Link className='btn btn-light my-3' to='/'>
            Go Back
            </Link>
            <Row>
            <Col md={7}>
                <Image src={SWpin} fluid></Image>



                <h1>{character.name}</h1>

                    </Col>
                    <Col md={3}>
        <ListGroup variant='flush'>
  <ListGroup.Item><h4>Height: {character.height}cm</h4></ListGroup.Item>
  <ListGroup.Item><h4>Gender: {character.gender}</h4></ListGroup.Item>
  <ListGroup.Item><h4>Mass : {character.mass} kg</h4></ListGroup.Item>
  <ListGroup.Item><h4>Eye Color : {character.eye_color}</h4></ListGroup.Item>
</ListGroup>


        </Col>
      
      </Row>
  </div>;
};

export default PeopleDesc;
