import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import image from "./image.jpg";
import { useState } from "react";
import Recipe from "../../components/Recipe/Recipe";

function Home() {
  const [meal, setMeal] = useState("");
  const [searched, setSearched] = useState(false);
  const [randomSearch, setRandomSearch] = useState(false);
  const [mealArray, setMealArray] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [showPicture, setShowPicture] = useState(true);
  const forbidden = ["", " ", "", " ", null];

  async function handleSearch() {
    setSearched(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    console.log(response);
    const data = await response.json();
    setMealArray(data.meals);
    setShowPicture(false);
    setRandomSearch(false);
    console.log(mealArray);
  }

  async function handleRandom() {
    setRandomSearch(true);
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    console.log("data ", data);
    setRandomMeal(data.meals);
    setShowPicture(false);
    setSearched(false);
    console.log("randomMeal ", randomMeal[0]);
    console.log(data.meals[0]);
  }

  function handleChange(event) {
    setMeal(event.target.value);
  }

  function getMealInfo(propString, meal) {
    const props = Object.getOwnPropertyNames(meal);
    const array = [];
    const propArray = [];

    for (const p of props) {
      if (p.includes(propString)) {
        propArray.push(p);
      }
    }

    for (let prop of propArray) {
      if (meal[prop] !== null) {
        if (!meal[prop].includes(forbidden)) {
          array.push(meal[prop]);
        }
      }
    }
    console.log(array);
    return array;
  }

  function isRandomMeal() {
    if (randomSearch && randomMeal.length > 0) {
      return true;
    }
    return false;
  }

  function isMeal() {
    if (searched && mealArray.length >= 0) {
      return true;
    }
    return false;
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
              <Button
                className="random-button"
                variant="secondary"
                onClick={handleRandom}
              >
                {" "}
                random meal
              </Button>
            </Col>
          </Row>

          {searched ? (
            meal === "" ? (
              <Alert variant="danger">Please enter a meal</Alert>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}

          <Row>
            {isMeal() ? (
              <Container className="recipes">
                <Row xs={2} md={2} lg={3}>
                  {mealArray.map((mealObj) => (
                    <Col className="single-recipe" key={mealObj.idMeal}>
                      {console.log(getMealInfo("strMeasure", mealObj))}
                      <Recipe
                        id={mealObj.id}
                        name={mealObj.strMeal}
                        area={mealObj.strArea}
                        category={mealObj.strCategory}
                        image={mealObj.strMealThumb}
                        introduction={mealObj.strInstructions}
                        ingredients={getMealInfo("strIngredient", mealObj)}
                        measure={getMealInfo("strMeasure", mealObj)}
                      ></Recipe>
                    </Col>
                  ))}
                </Row>
              </Container>
            ) : (
              <></>
            )}

            {showPicture ? (
              <Col>
                <img className="image" src={image} alt="illustration"></img>
              </Col>
            ) : (
              <></>
            )}

            {isRandomMeal() ? (
              <Container className="recipes">
                <Row>
                  <Col className="single-recipe">
                    <Recipe
                      name={randomMeal[0].strMeal}
                      area={randomMeal[0].strArea}
                      category={randomMeal[0].strCategory}
                      image={randomMeal[0].strMealThumb}
                      introduction={randomMeal[0].strInstructions}
                      ingredients={getMealInfo("strIngredient", randomMeal[0])}
                      measure={getMealInfo("strMeasure", randomMeal[0])}
                    ></Recipe>
                  </Col>
                </Row>
              </Container>
            ) : (
              <></>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;
