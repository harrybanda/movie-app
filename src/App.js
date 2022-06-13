import "bootstrap/dist/css/bootstrap.min.css";
import { Fragment } from "react";
import MoviesPage from "./Pages/MoviesPage";
import LikedPage from "./Pages/LikedPage";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar";

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="liked" element={<LikedPage />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
