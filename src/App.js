import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container,Row, Col } from 'react-bootstrap';

import React, { useEffect, useState } from "react"
import People from "./components/People.js"

function App() {
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
  return (
    <>
    <Header/>
    <main>
      {/* <Container>
      <Character people={people}/>
    </Container> */}
    {/* <Container>
                <Row>

                        <People people={people}/>

                </Row> 

            </Container> */}
            <Container>
            <People people={people}/>
            </Container>
    </main>
    
    <Footer/>
    </>
  );
}

export default App;
