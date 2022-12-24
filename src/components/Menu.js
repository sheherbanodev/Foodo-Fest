import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



class Menu extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
            "  http://localhost:5000/categories")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
            
    };
    
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div>;


        return (
            <div className="App">
                {
                    

                    items.map((item) => (
                        <ol key={item.id} >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                  
                                    {item.name}
                                    </Card.Text>
                                   
                                    { item.price }
                                    <br/>
                                    <Button variant="primary">Add To Cart</Button>
                                </Card.Body>
                            </Card>
                          
                          
                        </ol>
                    ))
                }
            </div>
        );
    }
}

export default Menu;

