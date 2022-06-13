import MoviePoster from "../MoviePoster";
import { Col } from "react-bootstrap";
import { MOVIES_IMAGE_BASE_URL } from "../../Constants";

const MovieList = (props) => {
  return props.movies.map((movie, index) => (
    <Col key={index} md="auto">
      <MoviePoster
        isLiked={movie.liked}
        image={MOVIES_IMAGE_BASE_URL + movie.poster_path}
        isAllMovies={props.isAllMovies}
        handleLikeMovie={() => props.handleLikeMovie(movie)}
        handleRemoveMovie={() => props.handleRemoveMovie(movie)}
      />
    </Col>
  ));
};

export default MovieList;
