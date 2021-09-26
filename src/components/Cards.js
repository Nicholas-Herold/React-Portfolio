import React from "react";
import {Card, Button} from "react-bootstrap";



function cards() {
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content. dfasdfsdaf dsfafsdf asd sadfasdfasd fsdafas dfsdaf asdfsad f asdfa sdfas dfasdfsdafasdf
            dsfasdf asdf afasd asdfasdfasdf asdf asdfsadfasdf adsf fdsaf asdf dsafasdfasdf asdsf asdfasdf asdfasdf
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    )

}

export default cards;