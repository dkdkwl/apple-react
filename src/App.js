import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element ={
          <div className="container">
            <div className='row'>
              {shoes.map( (a,i)=>{
                  return(
                    <Items i={i+1} shoes={shoes[i]} />
                  )
                })}
            </div>
          </div>
        }/>
        <Route path="/detail" element ={<Detail/>}/>
        <Route path="/abput" element={<div>어바웃페이지임</div>}/>
      </Routes>

      <Link to="/">HOME</Link>
      <Link to="/detail">상세페이지</Link>
    </div>
  );
}


function Items(props){
  return(
    <div className='col-md-4'>
      <img src={process.env.PUBLIC_URL + '/shoes'+(props.i)+'.jpg'} width="80%"/>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
  </div>
  )
}


function Detail(){
  return(
    <>

  </>
  )
}
export default App;
