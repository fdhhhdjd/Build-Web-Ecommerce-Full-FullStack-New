import styled from "styled-components";
import { categories } from "../../utils/Data/CategoryData";
import { mobile } from "../../Styles/responsive";
import { CategoryItem } from "../../imports/index";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <>
      <Container>
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </Container>
    </>
  );
};

export default Categories;
