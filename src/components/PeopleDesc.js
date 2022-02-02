import React, {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import SWpin from './SWpin.jpg'
import axios from 'axios';
const PeopleDesc = () => {
    const params = useParams();
    console.log(params.id);
let starmovies =[];
const [character,setCharacter]= useState([]);
var [movies, setMovies]= useState([]);
useEffect(() => {
    async function fetchCharacter(){
    
    
      let res = await fetch(`https://swapi.dev/api/people/${params.id}/?format=json`);
      
      let data = await res.json();
      let films = data.films;
      let featured_films = await get_movies(films);
      console.log(data);
      console.log(films);

      
      setMovies(starmovies);
      console.log(movies);
      setCharacter(data);
    }
   
    fetchCharacter();
     },[]);
     let get_movies = async (movies)=>{
        return movies.map(movie => {   
        axios
        .get(movie)
        .then((res) => {
            const newRes = JSON.stringify(res)
            //  console.log(newRes);
            showMovies(res);
        })
    
        })
    }
    
    // show each movie from the api array 
    let showMovies = async (movies ) =>{
        let eachMovie = movies.data.title
        console.log(eachMovie)
        
        return eachMovie;
      
        }
  return <div>
      <h1>{movies[0]}</h1>
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
