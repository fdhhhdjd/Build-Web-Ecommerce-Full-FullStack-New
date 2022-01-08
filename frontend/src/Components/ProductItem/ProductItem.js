import React, { useState, useContext, useEffect } from "react";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../Styles/responsive";
import { Header, Footer, Newsletter, Products } from "../../imports/index";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import { GetDetailProductInitiate } from "../../redux/Action/ActionProduct";
import MetaData from "../Layout/MetaData";
import { addItemsToCart } from "../../redux/Action/ActionCart";
import swal from "sweetalert";
import { toast } from "react-toastify";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;
const Solid = styled.p`
  margin: 20px 0px;
  font-size: 20px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const { productDetail } = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const AddToCartSuccess = () => {
    dispatch(
      addItemsToCart(id, quantity),
      toast.success("Add Product Successfully 😉 !!")
    );
  };
  const HandleIncreaseAmount = () => {
    if (productDetail.Stock <= quantity)
      return swal(`The item is only ${productDetail.Stock} pieces 😥`, {
        icon: "warning",
      });
    const qty = quantity + 1;
    setQuantity(qty);
  };
  const HandleDecreaseAmount = () => {
    if (1 >= quantity)
      return swal(` couldn't be any smaller😥`, {
        icon: "warning",
      });

    const qty = quantity - 1;
    setQuantity(qty);
  };
  useEffect(() => {
    dispatch(GetDetailProductInitiate(id));
  }, [callback]);

  return (
    <Container>
      <MetaData title={`${productDetail.name} -- Web`} />
      <Header />
      <Wrapper>
        <ImgContainer>
          {productDetail.images &&
            productDetail.images.map((item, index) => (
              <Image src={item.url} key={item.url} alt={`${index}`} />
            ))}
        </ImgContainer>
        <InfoContainer>
          <Title>{productDetail.name}</Title>
          <Desc>{productDetail.description}</Desc>
          <Price>$ {productDetail.price}</Price>
          <Solid>Solid: {productDetail.Stock}</Solid>
          <FilterContainer>
            <Filter>
              <FilterTitle>Star : </FilterTitle>
              &nbsp;
              {(productDetail.ratings === 0 && "Chưa đánh giá") ||
                Array(productDetail.ratings)
                  .fill()
                  .map((_, index) => (
                    <FilterTitle>⭐{console.log(_, "haha")}</FilterTitle>
                  ))}
              {/* <FilterColor color="red" /> */}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={HandleDecreaseAmount} />
              <Amount readOnly>{quantity}</Amount>
              <Add onClick={HandleIncreaseAmount} />
            </AmountContainer>
            <Button onClick={AddToCartSuccess}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductItem;
