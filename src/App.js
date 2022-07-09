import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Detail from './routes/Detail.js';
import { Routes, Route, Link , useNavigate, Outlet} from 'react-router-dom';

function App() {

  let [shoes] = useState(data)
  let navigate = useNavigate();

   return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=>{ navigate('/')} }>Home</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate(1)} }>앞으로</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate(-1)} }>뒤로</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('detail')} }>detail</Nav.Link>
          <Link to="/">HOME</Link>
          <Link to="/detail">상세페이지</Link>
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
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버임</div>}/>
          <Route path="location" element={<div>위치정보임</div>}/>
        </Route>
        <Route path="/event" element={<EventPage/>}>
            <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}></Route>
            <Route path="two" element={<p>생일기념 쿠폰받기</p>}></Route>
          </Route>
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}


function EventPage(){
  return(
    <div>
      <h4>이벤트페이지</h4>
      <Outlet></Outlet>
    </div>
  )
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


export default App;
