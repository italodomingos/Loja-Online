import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./ProductCard.module.css";
import ListGroup from "react-bootstrap/ListGroup";
import { ListGroupItem } from "react-bootstrap";
import StarRating from "../util/StarRating";

export default function ProductCard({ description, value, imgSrc }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} className={styles.img} />
      <Card.Body>
        <Card.Title>{description}</Card.Title>
        <Card.Text></Card.Text>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            <StarRating />
          </ListGroupItem>
          <ListGroup.Item>
            <p>
              A partir de{" "}
              <span className="bold fs-4 text-danger"> R$ {value}</span>
            </p>
          </ListGroup.Item>

          <Button variant="primary" href="/">
            Detalhes
          </Button>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
