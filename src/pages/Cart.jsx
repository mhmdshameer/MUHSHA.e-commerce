import styled from "styled-components"
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
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
    border: ${(props)=> props.type === "filled" && "none"};
    background-color: ${(props)=> props.type === "filled" ? "black" : "transparent"};
    color: ${(props)=> props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    
`;

const TopText = styled.span`
    margin: 0px 10px;
    text-decoration: underline;
    cursor: pointer;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ProductDetails = styled.div`
    flex:2;
    display: flex;
`;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props)=> props.color}
`;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const Quantity = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const Price = styled.span`
    font-size: 30px;
    font-weight: 200;
`;

const Hr = styled.hr`
    border: none;
    height: 1px; 
    background-color: #eee; 
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgrey;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px;
    display:flex;
    justify-content: space-between;
    font-weight: ${(props)=> props.type ==="total" && "500"};
    font-size: ${(props)=> props.type ==="total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;


const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
              <Product>
                <ProductDetails>
                    <Image src="/img/cart1.avif"/>
                    <Details>
                        <ProductName><b>Product:</b> JESSIE THUNDER SHOE</ProductName>     
                        <ProductId><b>Id:</b> JESSIE THUNDER SHOE</ProductId>     
                        <ProductColor color="black" />                       
                        <ProductSize><b>Size:</b> 38.5</ProductSize>     
                    </Details>                    
                </ProductDetails>
                <PriceDetail>
                    <QuantityContainer>
                        <Add/>
                           <Quantity>1</Quantity>
                        <Remove/>
                    </QuantityContainer>
                    <Price>$ 30</Price>
                </PriceDetail>
              </Product>
              <Hr/>
              <Product>
                <ProductDetails>
                    <Image src="/img/cart2.jpg"/>
                    <Details>
                        <ProductName><b>Product:</b> JESSIE THUNDER SHOE</ProductName>     
                        <ProductId><b>Id:</b> JESSIE THUNDER SHOE</ProductId>     
                        <ProductColor color="rgba(11,156,49,0.8)" />                       
                        <ProductSize><b>Size:</b> M</ProductSize>     
                    </Details>                    
                </ProductDetails>
                <PriceDetail>
                    <QuantityContainer>
                        <Add/>
                           <Quantity>1</Quantity>
                        <Remove/>
                    </QuantityContainer>
                    <Price>$ 20</Price>
                </PriceDetail>
              </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>$ 50</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>ESTIMATED SHIPPING</SummaryItemText>
                    <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>SHIPPING DISCOUNT</SummaryItemText>
                    <SummaryItemPrice>$ 5.9</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText  >Total</SummaryItemText>
                    <SummaryItemPrice>$ 50</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
      </Wrapper>
      
      <Footer />
    </Container>
  )
}

export default Cart
