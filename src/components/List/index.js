// CSS
import "./List.css";
import { Container, Col, Row, ListGroupItem, ListGroup } from "reactstrap";
import {
  Container,
  Col,
  Row,
  ListGroupItem,
  ListGroup,
  Badge,
  Button,
} from "reactstrap";

const elements = [{ text: "Text 1" }, { text: "dinamic" }, { text: "Text 3" }];

// const elements = [];
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: true,
    };
    this.handleShowListClick = this.handleShowListClick.bind(this);
  }

  handleShowListClick() {
    const { activeList } = this.state;
    this.setState({
      activeList: !activeList,
    });
  }

  render() {
    const UIElements = elements.map(({ text }, index) => {
    const { activeList } = this.state;

    let UIElements = elements.map(({ text }, index) => {
      const upperText = text.toUpperCase();
      return (
        <ListGroupItem key={index} className="List-item">
        <ListGroupItem
          onClick={this.handleListItemClick}
          key={index}
          className="List-item"
        >
          {upperText}
        </ListGroupItem>
      );
    });

    /*
      UIElements -> [] -> have a length property
      if (!UIElements.length) -> if(!0) -> if(!false)
      if (!false) -> if (true)
    */

    if (!UIElements.length) {
      UIElements = (
        <h1>
          No hay <Badge color="danger">elementos</Badge>
        </h1>
      );
    }

    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {UIElements}
              {/* <ListGroupItem className="List-item">Text 1</ListGroupItem>
              <ListGroupItem className="List-item">Text 2</ListGroupItem>
              <ListGroupItem className="List-item">Text 3</ListGroupItem> */}
            </ListGroup>
          </Col>
          <Col>{activeList ? <ListGroup>{UIElements}</ListGroup> : null}</Col>
          <Button onClick={this.handleShowListClick}>
            {activeList ? "Hide list" : "Show List"}
          </Button>
        </Row>
      </Container>
    );