import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import image from "./image.jpg";
import { useState } from "react";
import Recipe from "../../components/Recipe/Recipe";
import MenuButton from "../../components/MenuButton/MenuButton";

function Home() {
  const [meal, setMeal] = useState("");
  const [searched, setSearched] = useState(false);
  const [randomSearch, setRandomSearch] = useState(false);
  const [mealArray, setMealArray] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [showPicture, setShowPicture] = useState(true);
  const forbidden = ["", " ", "", " ", null];
  const newDate = new Date();
  const date = `${newDate.getDate()}.${
    newDate.getMonth() + 1
  }.${newDate.getFullYear()}.${newDate.getMilliseconds()}`;

  function hasFavoriteMeal(array) {
    const ids = Object.getOwnPropertyNames(localStorage);
    //console.log("HUHU", ids);
    for (let id of ids) {
      for (let mealObject of array) {
        if (mealObject.idMeal === id) {
          let index = array.indexOf(mealObject);
          let element = array.splice(index, 1)[0];
          array.splice(0, 0, element);
          // console.log("HEEEEELLOOO", array);
        }
      }
    }
  }

  async function handleSearch() {
    setSearched(true);
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`
    );
    localStorage.setItem(date, meal);
    //localStorage.clear();
    const data = await response.json();
    hasFavoriteMeal(data.meals);
    setMealArray(data.meals);
    setShowPicture(false);
    setRandomSearch(false);
    //console.log(date);
    //console.log(localStorage);
  }

  async function handleRandom() {
    setRandomSearch(true);
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    //console.log("data ", data);
    setRandomMeal(data.meals);
    setShowPicture(false);
    setSearched(false);
    //console.log(data.meals[0]);
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
                disabled={meal.length > 0 ? false : true}
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
                        id={mealObj.idMeal}
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
                      id={randomMeal[0].idMeal}
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
      <div className="menu-button">
        <MenuButton />
      </div>
    </div>
  );
}
export default Home;
