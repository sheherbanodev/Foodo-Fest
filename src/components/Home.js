import React, { useState } from "react";
// import UserDetail from "./UserDetail";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useEffect } from "react";
import { json, Link, useNavigate } from "react-router-dom";


const Home = () => {
  //for login
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");
  //for signup
  
  const signMeUp = () => navigate("/signup");

  return (
    <div className="home-main">
      <div className="home-card-design">
        {[

          'Dark'

        ].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>IT'S THE BRIGHT ONE,IT'S THE RIGHT ONE, THAT'S FAST FOOD</Card.Header>
            <Card.Body>
              <Card.Title>FOODO-FEST "WHEN THERE'S NOTHING ELSE"</Card.Title>
              <Card.Text>
                <Button type="button" className="btn btn-danger mb-3" id="login-button"  onClick={handleClick}>Login</Button>
                <Button type="button" className="btn btn-danger mb-3" id="signup-button" onClick={signMeUp} >SignUp</Button>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

    </div>
  );
};

export default Home;
