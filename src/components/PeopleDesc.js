import React, {useState,useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
const PeopleDesc = ({match}) => {
const [character,setCharacter]= useState([]);
useEffect(() => {
    async function fetchCharacter(){
      const id = match.params.id;
      let res = await fetch(`https://swapi.dev/api/people/${id}/?format=json`);
      let data = await res.json();
      console.log(data);
      setCharacter(data);
    }
   
    fetchCharacter();
     },[]);
  return <div>
      {character.name}
  </div>;
};

export default PeopleDesc;
