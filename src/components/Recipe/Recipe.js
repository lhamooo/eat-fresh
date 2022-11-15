import { useState } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Recipe.css";
import RecipeModal from "../RecipeModal/RecipeModal";

function Recipe({
  name,
  area,
  category,
  image,
  introduction,
  ingredients,
  measure,
}) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-title">{name}</Card.Title>
          <Card.Subtitle id="card-subtitle" className="mb-2 text-muted">
            {" "}
            {area}
            <br />
            {category}
          </Card.Subtitle>
          <Container>
            <Row>
              <Col>
                <Button
                  className="recipe-button"
                  variant="success"
                  onClick={() => setModalShow(true)}
                >
                  see recipe
                </Button>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>

          {modalShow && (
            <RecipeModal
              handleCloseModal={setModalShow}
              name={name}
              image={image}
              introduction={introduction}
              ingredients={ingredients}
              measure={measure}
            ></RecipeModal>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Recipe;
