import styled from "styled-components";
import { mobile } from "../../Styles/responsive";
import { useLocation, useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { Header, Footer, Newsletter, Products } from "../../imports/index";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProductInitiate } from "../../redux/Action/ActionProduct";
import { GlobalState } from "../../Contexts/GlobalState";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { MetaData } from "../../imports/index";
const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;
const Pagi = styled.div`
  .paginationBox {
    display: flex;
    justify-content: center;
    margin: 6vmax;
  }

  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .page-item {
    background-color: rgb(255, 255, 255);
    list-style: none;
    border: 1px solid rgba(0, 0, 0, 0.178);
    padding: 1vmax 1.5vmax;
    transition: all 0.3s;
    cursor: pointer;
  }
  .page-item:first-child {
    border-radius: 5px 0 0 5px;
  }

  .page-item:last-child {
    border-radius: 0 5px 5px 0;
  }
  .page-link {
    text-decoration: none;
    font: 300 0.7vmax "Roboto";
    color: rgb(80, 80, 80);
    transition: all 0.3s;
  }

  .page-item:hover {
    background-color: rgb(230, 230, 230);
  }

  .page-item:hover .page-link {
    color: rgb(0, 0, 0);
  }

  .pageItemActive {
    background-color: tomato;
  }

  .pageLinkActive {
    color: white;
  }

  .filterBox {
    width: 10vmax;
    position: absolute;
    top: 10vmax;
    left: 4vmax;
  }

  .categoryBox {
    padding: 0%;
  }

  .category-link {
    list-style: none;
    color: rgba(0, 0, 0, 0.61);
    font: 400 0.8vmax "Roboto";
    margin: 0.4vmax;
    cursor: pointer;
    transition: all 0.5s;
  }
  .category-link:hover {
    color: tomato;
  }

  .filterBox > fieldset {
    border: 1px solid rgba(0, 0, 0, 0.329);
  }

  @media screen and (max-width: 600px) {
    .filterBox {
      width: 20vmax;
      position: static;
      margin: auto;
    }

    .page-link {
      font: 300 1.7vmax "Roboto";
    }
    .category-link {
      font: 400 1.8vmax "Roboto";
    }
  }
`;
const categories = [
  "",
  "lap top",
  "machine",
  "ro bot",
  "All",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = () => {};
  const dispatch = useDispatch();
  const { keyword } = useParams();
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const {
    productDetail,
    productCount,
    resultPerPage,
    filteredProductsCount,
    loading,
  } = useSelector((state) => state.product);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };
  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setCategory(e.target.value);
  };
  useEffect(() => {
    dispatch(
      GetAllProductInitiate(keyword, currentPage, price, category, ratings)
    );
  }, [keyword, dispatch, callback, currentPage, price, category, ratings]);
  console.log(category, "category");
  return (
    <Container>
      <MetaData title="Product-- Web" />
      <Header />
      <Title>Hello</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select onChange={handleChangeInput} name="category">
            {categories.map((category) => (
              <Option value={category}>
                {(category == "" && `ALL`) || category}
              </Option>
            ))}
          </Select>
          <Typography>Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={25000}
          />
        </Filter>
        <Filter>
          <FilterText>Ratings Above:</FilterText>
          <Slider
            value={ratings}
            onChange={(e, newRating) => {
              setRatings(newRating);
            }}
            aria-labelledby="continuous-slider"
            valueLabelDisplay="auto"
            min={0}
            max={5}
          />
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Pagi>
        {resultPerPage <= count && (
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        )}
      </Pagi>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
