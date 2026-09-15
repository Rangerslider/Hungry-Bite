import React from "react";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/fast-food.png";
import categoryImg02 from "../../../assets/images/pizza-color.png";
import categoryImg03 from "../../../assets/images/asian-food.png";
import categoryImg04 from "../../../assets/images/chicken.png";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Fastfood",
    imgUrl: categoryImg01,
  },
  {
    display: "Pizza",
    imgUrl: categoryImg02,
  },

  {
    display: "Asian Food",
    imgUrl: categoryImg03,
  },

  {
    display: "Row Meat",
    imgUrl: categoryImg04,
  },
];

const Category = () => {
  return (
    <Container>
      <Row className="g-3 g-md-4">
        {categoryData.map((item, index) => (
          <Col lg="3" xs="6" key={index}>
            <Link
              to="/foods"
              className="category__item d-flex align-items-center gap-3 reveal"
              style={{ "--reveal-delay": `${index * 100}ms` }}
            >
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" />
              </div>
              <h6>{item.display}</h6>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
