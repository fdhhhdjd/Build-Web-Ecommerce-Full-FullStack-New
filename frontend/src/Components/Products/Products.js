import styled from "styled-components";
import { Product } from "../../imports/index";
import { useSelector } from "react-redux";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  const { product, loading } = useSelector((state) => state.product);
  console.log(product);
  return (
    <Container>
      {product.map((item, index) => (
        <Product item={item} key={index} />
      ))}
    </Container>
  );
};

export default Products;
