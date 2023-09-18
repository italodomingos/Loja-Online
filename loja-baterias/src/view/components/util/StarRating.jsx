import React, { useState } from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import styles from "./StarRating.module.css";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  const stars = [1, 2, 3, 4, 5].map((value) => (
    <Button
      key={value}
      variant="light"
      onClick={() => handleRatingClick(value)}
    >
      <i
        class={
          value <= rating
            ? "bi bi-star-fill " + styles.starActive
            : "bi bi-star " + styles.star
        }
      ></i>
    </Button>
  ));

  return <ButtonGroup aria-label="Star Rating">{stars}</ButtonGroup>;
};

export default StarRating;
