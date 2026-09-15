import React, { useMemo, useState } from "react";
import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category.jsx";
import "../styles/home.css";
import featureImg01 from "../assets/images/delivery-man.png";
import featureImg02 from "../assets/images/food-service.png";
import featureImg03 from "../assets/images/food-serving.png";
import products from "../assets/fake-data/products.js";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import foodCategoryImg04 from "../assets/pic/6.png";
import foodCategoryImg05 from "../assets/pic/bt4.jpg";
import ProductCard from "../components/UI/product-card/ProductCard.jsx";
import whyImg from "../assets/images/banner-02.jpg";
import networkImg from "../assets/images/img-5.png";
import aboutImg from "../assets/pic/bt1.jpg";
import style from "../assets/pic/11.png";
import style1 from "../assets/pic/sushi.png";
import TestimonialSlider from "../components/UI/hero-slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: featureImg01,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },

  {
    title: "Super Dine In",
    imgUrl: featureImg02,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
  {
    title: "Easy Pick Up",
    imgUrl: featureImg03,
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
  },
];

// menu filter buttons; `value` matches products[].category
const menuFilters = [
  { label: "All", value: "ALL" },
  { label: "Breakfast", value: "Breakfast", img: foodCategoryImg05 },
  { label: "Burger", value: "Burger", img: foodCategoryImg01 },
  { label: "Pizza", value: "Pizza", img: foodCategoryImg02 },
  { label: "Lunch", value: "Lunch", img: foodCategoryImg04 },
  { label: "Bread", value: "Bread", img: foodCategoryImg03 },
];

const hotPizza = products.filter((item) => item.category === "Pizza").slice(0, 4);

const Home = () => {
  const [category, setCategory] = useState("ALL");

  const allProducts = useMemo(
    () =>
      category === "ALL"
        ? products
        : products.filter((item) => item.category === category),
    [category]
  );

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Helmet title="Home">
      <section className="hero">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="hero__content">
                <h4 className="mb-3 hero__eyebrow">Easy way to make an order</h4>
                <h1 className="mb-4 hero__title">
                  <span>HUNGRY?</span> Just wait <br />Order food
                  <span> at here</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center mt-4">
                  <button
                    type="button"
                    className="order__btn d-flex align-items-center justify-content-between"
                    onClick={scrollToMenu}
                  >
                    Order now <i className="ri-arrow-right-s-line"></i>
                  </button>

                  <Link to="/foods" className="all__foods-btn">
                    See all foods
                  </Link>
                </div>

                <div className="hero__service d-flex align-items-center mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    No shipping charge
                  </p>

                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6">
              <div className="hero__img reveal reveal-zoom" role="img" aria-label="Breakfast plate"></div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center reveal">
              <h3 className="feature__subtitle mb-4">What we serve</h3>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span>take care</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div
                  className="feature__item text-center px-4 py-3 reveal"
                  style={{ "--reveal-delay": `${index * 120}ms` }}
                >
                  <img src={item.imgUrl} alt="feature-img" className="mb-3" />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center reveal">
              <h3 className="about-btn mb-4">ABOUT US</h3>
              <h2 className="feature__title">Discover Our</h2>
              <h2 className="feature__title">
                Awsome <span> Restaurant Story</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                officiis?
              </p>
              <p className="feature__text mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.
              </p>
            </Col>
            <Col lg="12">
              <div className="about__img reveal reveal-zoom">
                <img src={aboutImg} alt="about-img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="menu">
        <Container>
          <Row>
            <Col lg="12" className="text-center reveal">
              <h3 className="about-btn mb-4">Our Menu</h3>
              <h2 className="feature__title">Wake Up Early,</h2>
              <h2 className="feature__title mb-5">
                Eat Fresh <span> & Healthy</span>
              </h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center">
                {menuFilters.map((filter) => (
                  <button
                    type="button"
                    key={filter.value}
                    className={`d-flex align-items-center gap-2 ${
                      category === filter.value ? "foodBtnActive" : ""
                    }`}
                    aria-pressed={category === filter.value}
                    onClick={() => setCategory(filter.value)}
                  >
                    {filter.img && <img src={filter.img} alt="" />}
                    {filter.label}
                  </button>
                ))}
              </div>
            </Col>

            {allProducts.map((item, index) => (
              <Col
                lg="3"
                md="4"
                xs="6"
                key={`${category}-${item.id}`}
                className="mt-4 card-anim"
                style={{ animationDelay: `${Math.min(index, 11) * 50}ms` }}
              >
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="two-col-sec section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="sec-img reveal reveal-left">
                <img src={style} alt="style-img" className="w-100" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="sec-text reveal reveal-right">
                <h2 className="xxl-title">Chicken Pepperoni</h2>
                <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores
                  eligendi earum eveniet soluta officiis asperiores repellat, eum praesentium nihil
                  totam. Non ipsa expedita repellat atque mollitia praesentium assumenda quo
                  distinctio excepturi nobis tenetur, cum ab vitae fugiat hic aspernatur? Quos
                  laboriosam, repudiandae exercitationem atque a excepturi vel. Voluptas, ipsa.</p>
                <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum
                  voluptas magnam sed ad illum? Minus officiis quod deserunt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="two-col-sec section pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2">
              <div className="sec-text reveal reveal-left">
                <h2 className="xxl-title">Shushi Soseges</h2>
                <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolores
                  eligendi earum eveniet soluta officiis asperiores repellat, eum praesentium nihil
                  totam. Non ipsa expedita repellat atque mollitia praesentium assumenda quo
                  distinctio excepturi nobis tenetur, cum ab vitae fugiat hic aspernatur? Quos
                  laboriosam, repudiandae exercitationem atque a excepturi vel. Voluptas, ipsa.</p>
                <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit. At fugit laborum
                  voluptas magnam sed ad illum? Minus officiis quod deserunt.</p>
              </div>
            </div>
            <div className="col-lg-6 order-lg-2 order-1">
              <div className="sec-img reveal reveal-right">
                <img src={style1} alt="style1-img" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="why__img reveal reveal-left">
                <img src={whyImg} alt="why-tasty-treat" className="w-100" />
              </div>
            </Col>

            <Col lg="6">
              <div className="why__tasty-treat reveal reveal-right">
                <h2 className="tasty__treat-title mb-4">
                  Why <span>Tasty Treat?</span>
                </h2>
                <p className="tasty__treat-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum, minus. Tempora reprehenderit a corporis velit,
                  laboriosam vitae ullam, repellat illo sequi odio esse iste
                  fugiat dolor, optio incidunt eligendi deleniti!
                </p>

                <ListGroup className="mt-4">
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Fresh and tasty
                      foods
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quia, voluptatibus.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i> Quality support
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2">
                      <i className="ri-checkbox-circle-line"></i>Order from any
                      location
                    </p>
                    <p className="choose__us-desc">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Qui, earum.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-2 reveal">
              <h2>Hot Pizza</h2>
            </Col>

            {hotPizza.map((item, index) => (
              <Col lg="3" md="4" xs="6" key={item.id}>
                <div className="reveal" style={{ "--reveal-delay": `${index * 100}ms` }}>
                  <ProductCard item={item} />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div className="testimonial reveal reveal-left">
                <h5 className="testimonial__subtitle mb-4">Review</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying
                </h2>
                <p className="testimonial__desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Distinctio quasi qui minus quos sit perspiciatis inventore
                  quis provident placeat fugiat!
                </p>
                <TestimonialSlider />
              </div>
            </Col>
            <Col lg="6">
              <div className="why__img testimonial__img reveal reveal-right">
                <img src={networkImg} alt="testimonial-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
