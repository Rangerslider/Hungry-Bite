import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { useDispatch } from "react-redux";
import logo from "../../assets/images/res1-logo.png";
import { showToast } from "../../store/ui/toastSlice";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const subscribe = (e) => {
    e.preventDefault();
    dispatch(showToast("Thanks for subscribing!"));
    setEmail("");
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="gy-4">
          <Col lg="3" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Hungry Bite</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" sm="6">
            <h5 className="footer__title">Opening Time</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sunday - Thursday</span>
                <p>10:00am - 12:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" sm="6">
            <h5 className="footer__title">Contact</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>Location: Mirpur-2, Bangladesh</p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Phone: 01715555774</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>Subscribe our </p>
            <form className="newsletter" onSubmit={subscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" aria-label="Subscribe">
                <i className="ri-send-plane-line"></i>
              </button>
            </form>
          </Col>
        </Row>

        <Row className="mt-5 align-items-center gy-3">
          <Col md="6">
            <p className="copyright__text mb-0">
              Copyright - 2023, website made by Ishmoth Ura Nuri. All Rights
              Reserved.
            </p>
          </Col>
          {/* social media links for contact details */}
          <Col md="6">
            <div className="social__links">
              <Link to="" aria-label="Facebook">
                <i className="ri-facebook-line"></i>
              </Link>
              <Link to="" aria-label="GitHub">
                <i className="ri-github-line"></i>
              </Link>
              <Link to="" aria-label="YouTube">
                <i className="ri-youtube-line"></i>
              </Link>
              <Link to="" aria-label="LinkedIn">
                <i className="ri-linkedin-line"></i>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
