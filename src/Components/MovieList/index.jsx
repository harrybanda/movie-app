import React from "react";
import MoviePoster from "../MoviePoster";
import { Col } from "react-bootstrap";
import { MOVIES_IMAGE_BASE_URL } from "../../Constants";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <Col key={index}>
          <MoviePoster image={MOVIES_IMAGE_BASE_URL + movie.poster_path} />
        </Col>
      ))}
    </>
  );
};

export default MovieList;
