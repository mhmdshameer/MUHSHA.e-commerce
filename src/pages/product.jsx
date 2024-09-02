import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;

const ImageContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    padding: 20px 0px;
`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px
`;

const FilterContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
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
    background: ${props=> props.color};
    margin: 0px 3px;
    cursor: pointer;
`;

const FilterSize = styled.select`
    margin: 10px;
    padding: 5px;
`;


const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Quantity = styled.span`
    width: 35px;
    height: 30px;
    border: 1px solid teal;
    border-radius: 10px;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover{
        transform: scale(1.1);
    }
`;


const product = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <ImageContainer>
            <Image src="/img/jean.jpg"/>
        </ImageContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>This order progresses from foundational understanding of the human mind and behavior, through critical thinking and communication skills, to practical aspects like productivity, creativity, and innovation. </Desc>
            <Price>$ 20</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="Black" />
                    <FilterColor color="Blue" />
                    <FilterColor color="Gray" />
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption >XS</FilterSizeOption>
                        <FilterSizeOption >S</FilterSizeOption>
                        <FilterSizeOption >M</FilterSizeOption>
                        <FilterSizeOption >L</FilterSizeOption>
                        <FilterSizeOption >Xl</FilterSizeOption>
                        <FilterSizeOption >XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Quantity>1</Quantity>
                    <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter/>
      <Footer/>
    </Container>
  )
}

export default product
