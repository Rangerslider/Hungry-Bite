// ekhane cart product jeta parent page cart sei cart product er reviwe or details infoirmation er jonne ai child page create
import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { showToast } from "../store/ui/toastSlice";
import "../styles/product-details.css";
import ProductCard from "../components/UI/product-card/ProductCard";


const FoodDetails = () => {
    const [tab, setTab] = useState("desc");
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");
    const { id } = useParams();
    const dispatch = useDispatch();

    const product = products.find((product) => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01);
    const { title, price, category, desc, image01 } = product;

    const relatedProduct = products.filter(
        (item) => category === item.category && item.id !== id
    );

    const addItem = () => {
    dispatch(
        cartActions.addItem({
        id,
        title,
        price,
        image01,
    })
    );
    dispatch(showToast(`${title} added to cart`));
};

const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
    dispatch(showToast("Thanks for your review!"));
    setEnteredName("");
    setEnteredEmail("");
    setReviewMsg("");
};//for review part

useEffect(() => {
    setPreviewImg(product.image01);
    setTab("desc");
    window.scrollTo(0, 0);
}, [product]);//img fuction

const images = [product.image01, product.image02, product.image03];

return (
    <Helmet title="Product-details">
        <CommonSection title={title} />
        <section>
        <Container>
        <Row>
            <Col lg="2" md="2">
                <div className="product__images">
                {images.map((img, index) => (
                    <button
                        type="button"
                        key={index}
                        className={`img__item ${previewImg === img ? "img__item--active" : ""}`}
                        aria-label={`Show image ${index + 1}`}
                        onClick={() => setPreviewImg(img)}
                    >
                        <img src={img} alt="" />
                    </button>
                ))}
            </div>
            </Col>

            <Col lg="4" md="4">
                <div className="product__main-img">
                <img src={previewImg} alt={title} className="w-100" key={previewImg} />
                </div>
            </Col>

            <Col lg="6" md="6">
                <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p className="product__price">
                    Price: <span>${price}</span>
                </p>
                <p className="category mb-5">
                    Category: <span>{category}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                    <i className="ri-shopping-basket-line me-2"></i> Add to cart
                </button>
                </div>
            </Col>

            <Col lg="12">
                <div className="tabs d-flex align-items-center gap-5 py-3" role="tablist">
                <button
                type="button"
                role="tab"
                aria-selected={tab === "desc"}
                className={tab === "desc" ? "tab__active" : ""}
                onClick={() => setTab("desc")}
                >
                    Description
                </button>
                <button
                type="button"
                role="tab"
                aria-selected={tab === "rev"}
                className={tab === "rev" ? "tab__active" : ""}
                onClick={() => setTab("rev")}
                >
                    Review
                </button>
                </div>

                {tab === "desc" ? (
                <div className="tab__content tab__panel" key="desc">
                    <p>{desc}</p>
                </div>
                ) : (
                <div className="tab__form tab__panel mb-3" key="rev">
                    <div className="review pt-5">
                    <p className="user__name mb-0">Ishmoth Ura Nuri</p>
                    <p className="user__email">nuri@gmail.com</p>
                    <p className="feedback__text">Tasty food</p>
                    </div>

                    <div className="review">
                    <p className="user__name mb-0">Joy Adhikary</p>
                    <p className="user__email">joy@gmail.com</p>
                    <p className="feedback__text">Food was awsome</p>
                    </div>

                    <form className="form" onSubmit={submitHandler}>
                    <div className="form__group">
                        <input
                        type="text"
                        placeholder="Enter your name"
                        value={enteredName}
                        onChange={(e) => setEnteredName(e.target.value)}
                        required
                        />
                    </div>

                    <div className="form__group">
                        <input
                        type="email"
                        placeholder="Enter your email"
                        value={enteredEmail}
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                        />
                    </div>

                    <div className="form__group">
                        <textarea
                        rows={5}
                        placeholder="Write your review"
                        value={reviewMsg}
                        onChange={(e) => setReviewMsg(e.target.value)}
                        required
                        />
                    </div>

                    <button type="submit" className="addTOCart__btn">
                        Submit
                    </button>
                    </form>
                </div>
                )}
            </Col>

            {relatedProduct.length > 0 && (
            <Col lg="12" className="mb-2 mt-4">
                <h2 className="related__Product-title">You might also like</h2>
            </Col>
            )}

            {relatedProduct.map((item) => (
            <Col lg="3" md="4" xs="6" className="mb-4" key={item.id}>
                <div className="reveal">
                    <ProductCard item={item} />
                </div>
            </Col>
            ))}
            </Row>
        </Container>
        </section>
    </Helmet>
    );
};

export default FoodDetails;
