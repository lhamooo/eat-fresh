import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import image from "./image.jpg";

function Home() {
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
              <Form.Control className="search" type="text"></Form.Control>
            </Col>
            <Col className="col-search-button">
              <Button className="search-button" variant="success">
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
                random recipe
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <img className="image" src={image}></img>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export default Home;
