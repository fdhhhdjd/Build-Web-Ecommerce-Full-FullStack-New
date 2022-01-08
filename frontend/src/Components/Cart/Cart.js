import { Add, Remove } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { mobile } from "../../Styles/responsive";
import { Header, Footer, Newsletter, Products } from "../../imports/index";
import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux/Action/ActionCart";
import swal from "sweetalert";
import EmptyCart from "../EmptyCart/EmptyCart";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;
const Buttons = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid var(--secondary-color);
  border-radius: 50%;
  cursor: pointer;
  transition: all ease-in-out 0.7s;
  outline: none;

  :hover {
    transform: scale(1.2) rotate(360deg);
    background-color: rgb(209, 15, 15);
  }

  img {
    width: 25px;
    height: 25px;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return swal(`The item is only ${stock} pieces 😥`, {
        icon: "warning",
      });
    }
    dispatch(addItemsToCart(id, newQty));
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return swal(` couldn't be any smaller😥`, {
        icon: "warning",
      });
    }
    dispatch(addItemsToCart(id, newQty));
  };
  const handleDeleteCart = (id) => {
    dispatch(removeItemsFromCart(id));
  };
  const checkoutHandler = () => {
    navigate("/shipping");
  };
  return (
    <Container>
      <Header />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={() => navigate("/products/all")}>
            CONTINUE SHOPPING
          </TopButton>
          <TopTexts>
            <TopText>
              Shopping Bag(
              {cartItems.reduce((acc, item) => acc + item.quantity, 0)})
            </TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <Bottom>
            <Info>
              {cartItems &&
                cartItems.map((item, i) => {
                  return (
                    <Fragment key={i}>
                      <Product>
                        <ProductDetail>
                          <Image src={item.image} />
                          <Details>
                            <ProductName>
                              <b>Product:</b> {item.name}
                            </ProductName>
                            <ProductId>
                              <b>ID:</b> {item.product}
                            </ProductId>
                            <ProductColor color="red" />
                            <ProductSize>
                              <b>Stock:</b> {item.stock}
                            </ProductSize>
                          </Details>
                        </ProductDetail>
                        <PriceDetail>
                          <ProductAmountContainer>
                            <Add
                              onClick={() =>
                                increaseQuantity(
                                  item.product,
                                  item.quantity,
                                  item.stock
                                )
                              }
                            />
                            <ProductAmount>{item.quantity}</ProductAmount>
                            <Remove
                              onClick={() =>
                                decreaseQuantity(item.product, item.quantity)
                              }
                            />
                          </ProductAmountContainer>
                          <Buttons
                            className="actions__deleteItemBtn"
                            onClick={() => handleDeleteCart(item.product)}
                          >
                            <img
                              src="https://img.icons8.com/ios-glyphs/30/000000/filled-trash.png"
                              alt=""
                            />
                          </Buttons>
                          <br />
                          <ProductPrice>$ {item.price}</ProductPrice>
                        </PriceDetail>
                      </Product>
                      <br />
                      <Hr />
                      <br />
                    </Fragment>
                  );
                })}
            </Info>

            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal Product</SummaryItemText>
                <SummaryItemPrice>
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                  &nbsp;
                  {`(
                  Item)`}
                </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>$ 5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>$ -5.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>
                  {`$ ${cartItems.reduce(
                    (acc, item) => acc + item.quantity * item.price,
                    0
                  )}`}
                </SummaryItemPrice>
              </SummaryItem>
              <Button onClick={checkoutHandler}>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        )}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
