import React from "react";
import "./Post.css";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Post({ title, subtitle, text, image }) {
  return (
    <Card className="ImageCard">
      <CardImg top width="25%" src={image} alt="Card image cap" />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText>{text}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}

export default Post;
