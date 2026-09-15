// creating pagination pages
import React, { useMemo, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";

const sorters = {
    ascending: (a, b) => a.title.localeCompare(b.title),
    descending: (a, b) => b.title.localeCompare(a.title),
    "high-price": (a, b) => b.price - a.price,
    "low-price": (a, b) => a.price - b.price,
};

const productPerPage = 12;

const AllFoods = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();
        const found = products.filter((item) =>
            item.title.toLowerCase().includes(term)
        );
        return sorters[sortBy] ? [...found].sort(sorters[sortBy]) : found;
    }, [searchTerm, sortBy]);

    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
    const changePage = ({ selected }) => {
        setPageNumber(selected);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

return (
<Helmet title="All-Foods">
    <CommonSection title="All Foods" />
    <section>
        <Container>
            <Row className="align-items-center mb-4 gy-3">
            <Col md="6">
                <div className="search__widget d-flex align-items-center justify-content-between">
                <input
                type="text"
                placeholder="I'm looking for...."
                aria-label="Search foods"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPageNumber(0);
                }}
                />
                {searchTerm ? (
                    <button type="button" aria-label="Clear search" onClick={() => setSearchTerm("")}>
                        <i className="ri-close-line"></i>
                    </button>
                ) : (
                    <span>
                        <i className="ri-search-line"></i>
                    </span>
                )}
                </div>
            </Col>
            <Col md="6">
                <div className="sorting__widget text-md-end">
                <select
                    aria-label="Sort foods"
                    value={sortBy}
                    onChange={(e) => {
                        setSortBy(e.target.value);
                        setPageNumber(0);
                    }}
                >
                    <option value="default">Default</option>
                    <option value="ascending">Alphabetically, A-Z</option>
                    <option value="descending">Alphabetically, Z-A</option>
                    <option value="high-price">High Price</option>
                    <option value="low-price">Low Price</option>
                </select>
                </div>
            </Col>
            </Row>

            <p className="foods__count">
                Showing {searchedProduct.length} {searchedProduct.length === 1 ? "dish" : "dishes"}
            </p>

            <Row>
            {displayPage.length === 0 && (
                <Col xs="12">
                    <div className="empty__state">
                        <i className="ri-restaurant-line"></i>
                        <h6>No food matches "{searchTerm}"</h6>
                    </div>
                </Col>
            )}

            {displayPage.map((item, index) => (
            <Col
                lg="3"
                md="4"
                xs="6"
                key={`${sortBy}-${pageNumber}-${item.id}`}
                className="mb-4 card-anim"
                style={{ animationDelay: `${index * 40}ms` }}
            >
                <ProductCard item={item} />
            </Col>
            ))}
            </Row>

            {pageCount > 1 && (
                <ReactPaginate
                pageCount={pageCount}
                forcePage={pageNumber}
                onPageChange={changePage}
                pageRangeDisplayed={2}
                marginPagesDisplayed={1}
                previousLabel={"Prev"}
                nextLabel={"Next"}
                containerClassName="paginationBttns"
                activeClassName="paginationActive"
                disabledClassName="paginationDisabled"
                />
            )}
        </Container>
    </section>
    </Helmet>
    );
};

export default AllFoods;
