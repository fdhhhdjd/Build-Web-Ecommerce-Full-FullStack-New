import React, { useContext, useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../Styles/responsive";
import { tai } from "../../imports/Image";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
import { useSelector, useDispatch } from "react-redux";
import { LogoutInitiate } from "../../redux/Action/ActionAdmin";
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  :focus {
    outline: none;
  }

  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.span`
  font-size: 2rem;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  .link {
    text-decoration: none;
    color: black;
  }
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
const MenuItem1 = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  .link {
    text-decoration: none;
    color: black;
  }

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;
const ImgProfile = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -6px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Header = () => {
  const [native, setNative] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const state = useContext(GlobalState);
  const [callback, setCallback] = state.callback;
  const { isAuthenticated, auth } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/all/${keyword}`);
    } else {
      navigate("/products/all");
      setCallback(true);
    }
  };
  const handleLogout = () => {
    dispatch(LogoutInitiate());
  };
  useEffect(() => {
    if (location.pathname === "/products/all") {
      setActiveTab("Product");
    } else if (location.pathname === "/home") {
      setActiveTab("Home");
    } else if (location.pathname === "/cart") {
      setActiveTab("Cart");
    }
  }, [location]);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <form onSubmit={handleSearch}>
              <Input
                placeholder="Search"
                onChange={(e) => setKeyword(e.target.value)}
              />
              <Search
                style={{ color: "gray", fontSize: 16 }}
                onClick={handleSearch}
              />
            </form>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Hello 😊,{auth.name}</Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link
              to="/home"
              className="link"
              style={
                activeTab === "Home" ? { borderBottom: "5px solid green" } : {}
              }
              onClick={() => setActiveTab("Home")}
            >
              HOME
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/products/all"
              className="link"
              style={
                activeTab === "Product"
                  ? { borderBottom: "5px solid green" }
                  : {}
              }
              onClick={() => setActiveTab("Product")}
            >
              PRODUCT
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              to="/cart"
              className="link"
              style={
                activeTab === "Cart" ? { borderBottom: "5px solid green" } : {}
              }
              onClick={() => setActiveTab("Cart")}
            >
              CART
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/login" className="link" onClick={handleLogout}>
              LOGOUT
            </Link>
          </MenuItem>

          <MenuItem>
            <Link to="/profile">
              <ImgProfile src={auth.avatar.url} />
            </Link>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/cart">
                <ShoppingCartOutlined />
              </Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Header;
