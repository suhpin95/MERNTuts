import React, {Component} from 'react';
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
    state = { 
        items : [
            {
                id: uuidv4(),
                name : "Book"
            },
            {
                id: uuidv4(),
                name : "Pen"
            },
            {
                id: uuidv4(),
                name : "Pencil"
            },
            {
                id: uuidv4(),
                name : "Eraser"
            }
        ]
     }
    render() {
        const {items} = this.state; 
        return ( 
            <Container>
                <Button color="dark" style = {{marginBottom:'2'}} onClick= {()=>{
                    const name = prompt('Enter the Items');
                    if(name){
                        this.setState(state=>({
                            items : [...state.items, { id: uuidv4(), name }]
                        }))
                    }
                }} >
                    Add Item
                </Button>

                <ListGroup>
                    <TransitionGroup className="shoppingList">
                        { items.map( ( {id,name} ) => 
                            (
                            <CSSTransition key = {id} timeout= {500} classNames="fade" >
                                <ListGroupItem>
                                    <Button className="remove-btn" color="danger" size="sm"
                                    onClick = { ()=> {
                                        this.setState( state=>({
                                            items: state.items.filter(item => item.id !== id)
                                        }) )
                                    }}
                                    > &times; 
                                    </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                            )) 
                        }
                    </TransitionGroup>
                </ListGroup>
            </Container>
         );
    }
}
 
export default ShoppingList;