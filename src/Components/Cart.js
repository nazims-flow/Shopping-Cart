import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardHeader,
    Card, CardBody,
    CardFooter,
    Col,Row
} from "reactstrap"

import CartItem from "./CartItem";

const Cart =({cartItem , removeItem , buyNow})=>{
     let amount =0 ;

     cartItem.forEach(item=>{
         amount= parseFloat(amount) + parseFloat(item.productPrice)

     })


     return(
         <Container fluid> 
         <h1 className="text-success">Your Cart</h1>
         <ListGroup>
             {cartItem.map(item=>(
                 <ListGroupItem key={item.id}>
                     <Row>
                         <Col>
                          <img
                          height={80}
                          src={item.tinyImage}
                          alt="noimage"
                          />
                         </Col>
                         <Col className="text-center">
                          <div className="text-primary">
                              {
                                  item.productName
                              }
                              <span>price:- {item.productPrice}</span>
                              <Button color="danger" onClick={() => removeItem(item)}>
                                  Remove
                              </Button>
                          </div>
                         
                         </Col>


                     </Row>
                 </ListGroupItem>
             ))}
         </ListGroup>

         {
             cartItem.length>=1 ? (
                 <Card className="text-center mt-3">
                     <CardHeader>
                         GrandTotal
                     </CardHeader>
                     <CardBody>
                         Your amount for {cartItem.length} product is {amount}
                     </CardBody>
                     <CardFooter>
                         <Button className="success" onClick={buyNow}>Pay Here</Button>
                     </CardFooter>
                 </Card>
             ) : (
                 <h1 className="text-warning"> Cart is Empty</h1>
             )
         }
         
         
         </Container>
     )
}


export default  Cart;