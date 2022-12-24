import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



import { useNavigate } from "react-router-dom";


function Mainpage() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem("User")
    navigate('/')

    

  };
  
  return (
    <div>
      <Navbar bg="ark" expand="lg" className='navbar'>
        <Container fluid>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/aboutus">About Us</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="success">Search</Button>
            </Form>

            <button
              type="button"
              className="btn btn-danger"
              onClick={handleClick}
            >
              Logout
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='300-px-wide'>
        <Carousel >
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Second slide"
            />

          </Carousel.Item>
          <Carousel.Item interval={700}>
            <img
              className="d-block w-100"
              src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
        <div class="fullwidth">
          <div class="bar-1">
            <div class="d-inline p-2  text-black" id='div'>FOODO-FEST </div>
            <div class="d-inline p-2 text-black" id='div'>PIA ROAD JOHAR TOWN LAHORE</div>
            <div class="d-inline p-2 text-black" id='div'>CONTACT US: 098-5376782</div>
            <div class="d-inline p-2 text-black" id='div'>Open timings: [10:00am-10:00pm]</div>
          </div>
        </div>
      <div>
        
      </div>










      </div>

    </div>


  );
}

export default Mainpage;
