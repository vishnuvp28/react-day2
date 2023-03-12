import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';

function App() {
const data=[

{
  image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSbi3dgI35bzGHypZE2x4KYH8DCGtTYnP6gmgb8wNp7d5CzHHqIz2mNtctF-WpijzVh6G6Uut24rpYRMNrNiErQs2RGXjJtVEH-EvP-MKcOLAOvIn5DZWEK9g",
  name:"Nykaa So Creme! Cream Lipstick",
  price:"Rs.276.00",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTzHapLDithh_kqrQLW0t_g17TS_5IFEJGzH9tUbCyAZ4UAQCUNtJFTjOBeafatKbYoi-cT5YBWHIbcweiOcLHfFvzpZYtEtkz5xDI5ajxdPX6NVhbi2uF07Q",
  name:"Mac csometics-Matte Lipstick",
  price:"Rs.1,950.00",
  rating:"⭐⭐⭐⭐",
},
{
  image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS9wnlyCZLcYG9CPxgKhwECXCFttVEmXjXjEGva4_fUaw1KnzRSA8mDSqVguQuE5lTbrX7Ohz0uRAiqJbztWa03zNIkRxVYyC-iGcTpXou0K8mFWmkDBGg87w",
  name:"Mamaearth Moisture Matte Longstay Lipstick With Avocado Oil & Vitamin E",
  price:"Rs.499.00",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmCBs5gq17djUyfiqxGVJQYN2ARvX2bssoDRluH6mOtUavNWNDRLKeZw-H13JP_j9VFhYNKDbnwd5z6qLqjHdFxah8FIR6qxhxr_RH1zk0QtkzkTH4qD_BXA",
  name:"Maybelline New York Color Sensational Creamy Matte Lipstick - Craving Coral",
  price:"Rs 207.00",
  rating:"⭐⭐⭐⭐",
},
{
  image:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRWRF_mxs2lKrJnmHc6kqtUMxgHgN2oiCm97lMdvu4SjO4VuSGBJJyB71Bb-Uhvco_ffe6Tr3y6rnPdQEvFvyDG8z1W7MCsodHdFjVx0lBVx3vbHwpDuA7-XA",
  name:"RENEE Fab 5 5-In-1 Lipstick",
  price:" Rs.499.00",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSKTTTpp_aC9xPmL2LIM2fii5ASocyOat6ysde8epPNRBiYsgD2V4fXjKMvhcCkxqH8dv6BoYeCW9rQzvc20vzzqczqtb513NYUvEC-slC-_cN_I52drKYrbu4",
  name:"Mamaearth Naturally Matte Lip Serum Matte Liquid Lipstick with Vitamin C & E",
  price:"Rs.599.00",
  rating:"⭐⭐⭐⭐",
},
{
  image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-DySDcpy3eMHrM2tiOY683YNH8QRY_MyQzJdspJDYIDoNqt2PTNi5UqqJa40iLQttSSrpsssjBZEatP6NWl0BxsDLjSH5hi9t16Pz9tCJqyDfa2P6eg0U1A",
  name:"Charlotte Tilbury K.I.S.S.I.N.G Lipstick #Nude Kate",
  price:" Rs.3,150.00",
  rating:"⭐⭐⭐⭐⭐",
},
{
  image:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ2nsS-jmXMykMJfT7ChaeshhS69C-JopQSpsZ3FPaXrDb8-Lil7yEruwLRl9Ikh79I9Fwh6srAu8GvpY22hSkKlqMcdxIYa1BbVE69h4__qS4En6cU-vLpqw",
  name:"Colorbar Kissproof Lipstick",
  price:"Rs.1,200.00",
  rating:"⭐⭐⭐⭐⭐",
}
]

const [count,setCount] =useState(0)

  return (
    <div className="App">
        <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">New Arrivals</NavDropdown.Item>
            
      
 
            </NavDropdown>
            
          </Nav>
          <Badge  bg="dark">
             CART {count}
         </Badge>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    

    <div class="div1">
      <h1 class="topic"><b>Shop Trendy Lipsticks</b></h1>
      <h5>With this shop homepage template</h5>

    </div>


<div className="card-container">
  {data.map((value,index)=> <Cards
  index={index}
  value={value}
  setCount={setCount}
  count={count}
  />

  )}
     
    </div>
    </div>
  );
}

export default App;

function Cards({value ,index ,setCount ,count}){
const[show,setShow] =useState(false);
function addToCart(){
  setShow(!show)
  setCount(count + 1)
}
function removeToCart(){
  setShow(!show)
  setCount(count - 1)
}

return(
  <Card key={index} style={{ width: '18rem' }}>
  <Card.Img class="vp" variant="top" src={value.image} />
  <Card.Body>
    <Card.Title>{value.name}</Card.Title>
    <Card.Text>{value.price}</Card.Text>
    <Card.Text>{value.rating}</Card.Text>
    


    {!show ? <Button variant="outline-dark" onClick={addToCart}>Add to cart</Button> : ""}

    {show ? <Button variant="danger" onClick={removeToCart}>Remove cart</Button> : ""}

  </Card.Body>
 </Card>

)
}