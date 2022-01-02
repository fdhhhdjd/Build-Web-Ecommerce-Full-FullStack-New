import React, { useContext, useEffect, useState } from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../../Styles/responsive";
import { tai } from "../../imports/Image";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GlobalState } from "../../Contexts/GlobalState";
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

const Logo = styled.h1`
  font-weight: bold;
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
  const handleSearch = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/all/${keyword}`);
    } else {
      navigate("/products/all");
      setCallback(true);
    }
  };
  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveTab("Login");
    } else if (location.pathname === "/home") {
      setActiveTab("Home");
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
          <Logo>Shop Commerce Dev</Logo>
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
              to="/login"
              className="link"
              style={
                activeTab === "Login" ? { borderBottom: "5px solid green" } : {}
              }
              onClick={() => setActiveTab("Login")}
            >
              SIGN IN
            </Link>
          </MenuItem>
          <MenuItem>
            <ImgProfile src={tai} />
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to="/payment">
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
