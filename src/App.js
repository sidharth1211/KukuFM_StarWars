import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container,Row, Col } from 'react-bootstrap';

import React, { useEffect, useState } from "react"
import People from "./components/People.js"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  
  return (
    <>
    <BrowserRouter>
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
              <Routes>
              <Route path="/" element={<People/>} exact/>
                </Routes>
            
            
            </Container>
    </main>
    
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
