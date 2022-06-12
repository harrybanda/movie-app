import "./movie-poster-styles.css";
import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HandThumbsUp, HandThumbsDown } from "react-bootstrap-icons";

const MoviePoster = (props) => {
  return (
    <Card className="movie-poster my-4 p-1" bg="dark">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Container>
          <Row>
            <Col className="text-center">
              <ButtonGroup>
                <Button variant="secondary" className="mx-1">
                  <HandThumbsUp />
                </Button>
                <Button variant="secondary" className="mx-1">
                  <HandThumbsDown />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MoviePoster;

// #212529
