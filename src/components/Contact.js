import React from "react";
import {Form} from 'react-bootstrap';

function Contact ( ) {
    <Form>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Comments</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

}

export default Contact