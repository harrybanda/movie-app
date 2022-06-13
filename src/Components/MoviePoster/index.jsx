import "./movie-poster-styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HandThumbsUpFill, XLg } from "react-bootstrap-icons";

const MoviePoster = (props) => {
  return (
    <Card className="movie-poster my-4 p-1 image-container" bg="dark">
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Container>
          <Row>
            <Col className="text-center">
              {props.isAllMovies ? (
                props.isLiked === "true" ? (
                  <h5>Added to liked</h5>
                ) : (
                  <Button
                    variant="secondary"
                    onClick={() => props.handleLikeMovie()}
                  >
                    Like <HandThumbsUpFill />
                  </Button>
                )
              ) : (
                <Button
                  variant="danger"
                  onClick={() => props.handleRemoveMovie()}
                >
                  Unlike <XLg />
                </Button>
              )}
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default MoviePoster;
