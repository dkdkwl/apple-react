import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {


  let [shoes] = useState(data)
  
   return (
    <div className="App">

        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <div className='row'>
          {
            shoes.map( (i,index)=>{
              return(
                <Items key={index} title={shoes[index].title} price={shoes[index].price} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}


function Items({title,price}){
  return(
    <div className='col-md-4'>
      <img src={process.env.PUBLIC_URL + '/shoes1.jpg'} width="80%"/>
      <h4>{title}</h4>
      <p>{price}</p>
  </div>
  )
}

export default App;
