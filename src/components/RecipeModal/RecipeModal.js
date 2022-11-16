import "./RecipeModal.css";
import { Container, Modal, Row, Col } from "react-bootstrap";

function RecipeModal({
  handleCloseModal,
  name,
  image,
  introduction,
  ingredients,
  measure,
}) {
  return (
    <div>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={true}
        onHide={() => handleCloseModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="title-modal"
          >
            {name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col>
                <img className="meal-image" src={image} alt="meal"></img>
              </Col>
              <Col>
                {measure.map((m) => (
                  <li className="li-mesure">{m}</li>
                ))}
              </Col>
              <Col className="col-ingrediens">
                {ingredients.map((i) => (
                  <li className="li-ingrediens">{i}</li>
                ))}
                <br />
                <br />
              </Col>
            </Row>

            <Row>
              <Col className="col-introduction-title">
                <h4>Introductions:</h4>
              </Col>
            </Row>
            <Row>
              <p className="inrtoduction">{introduction}</p>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}
export default RecipeModal;
