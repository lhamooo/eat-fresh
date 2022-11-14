import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Recipe.css";
import RecipeModal from "../RecipeModal/RecipeModal";

function Recipe({ name, area, category, image }) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {" "}
            {area}
            <br />
            {category}
          </Card.Subtitle>
          <Button
            className="recipe-button"
            variant="success"
            onClick={() => setModalShow(true)}
          >
            see recipe
          </Button>
          {modalShow && (
            <RecipeModal handleCloseModal={setModalShow}></RecipeModal>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Recipe;
