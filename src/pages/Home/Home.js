import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import image from "./image.jpg";
import { useState, useEffect } from "react";
import Recipe from "../../components/Recipe/Recipe";

function Home() {
  const [meal, setMeal] = useState("");
  const [searched, setSearched] = useState(false);
  const [mealArray, setMealArray] = useState([]);

  async function handleSearch() {
    setSearched(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    const data = await response.json();
    setMealArray(data.meals);
    console.log(data.meals);
  }

  function handleChange(event) {
    setMeal(event.target.value);
  }

  return (
    <div className="home">
      <Navbar />
      <div>
        <Container className="form">
          <Row className="row-title">
            <Col className="colum-title">
              <h1 className="title">EatFresh</h1>
            </Col>
          </Row>
          <Row className="row-search">
            <Col className="col-search">
              <Form.Control
                className="search"
                type="text"
                onChange={handleChange}
              ></Form.Control>
            </Col>
            <Col className="col-search-button">
              <Button
                className="search-button"
                variant="success"
                onClick={handleSearch}
              >
                {" "}
                <SearchIcon />{" "}
              </Button>
            </Col>
          </Row>
          <Row className="row-text">
            <Col className="col-text">
              <p className="text">don't know what to cook?</p>
            </Col>
          </Row>
          <Row className="row-random">
            <Col>
              <Button className="random-button" variant="secondary">
                {" "}
                random meal
              </Button>
            </Col>
          </Row>
          {searched ? (
            meal == "" ? (
              <Alert variant="danger">Please enter a meal</Alert>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          <Row>
            {searched ? (
              mealArray.length >= 0 ? (
                <Container className="recipes">
                  <Row xs={2} md={2} lg={3}>
                    {mealArray.map((mealObj) => (
                      <Col className="single-recipe" key={mealObj.idMeal}>
                        <Recipe
                          name={mealObj.strMeal}
                          area={mealObj.strArea}
                          category={mealObj.strCategory}
                          image={mealObj.strMealThumb}
                        ></Recipe>
                      </Col>
                    ))}
                  </Row>
                </Container>
              ) : (
                <Col>
                  <img className="image" src={image}></img>
                </Col>
              )
            ) : (
              <Col>
                <img className="image" src={image}></img>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;
