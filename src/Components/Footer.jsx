import styled from "styled-components"
import { Facebook as FacebookIcon, Instagram as InstagramIcon, X as XIcon, Pinterest as PinterestIcon, Place, Call, Mail} from '@mui/icons-material';
import { mobile } from "../responsive";


const Container = styled.div`
   display: flex;
   ${mobile ({flexDirection: "column"})}
`;
const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   padding: 20px;
`;
const Logo = styled.h1`
   margin-bottom: 20px;
`;
const Desc = styled.p`
   margin-bottom: 20px;
`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile ({display: "none"})}
`;

const Title = styled.h3`
   margin-bottom: 30px;
`;

const List = styled.ul`
   margin: 0;
   padding: 0;
   list-style: none;
   display: flex;
   flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;
const Right = styled.div`
   flex: 1;
   padding: 20px;
   ${mobile ({backgroundColor: "#fff8f8"})}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;  
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>MUHSHA.</Logo>
        <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut hendrerit feugiat dolor, commodo sollicitudin urna. Duis ipsum libero, egestas vel eros sit amet, vehicula maximus urna. Aenean sit amet diam nunc. Donec et varius enim, a consequat urna. Mauris eu tortor ullamcorper, pulvinar augue vitae, pellentesque nisl</Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
                <FacebookIcon/>
            </SocialIcon>
            <SocialIcon color="E4405F">
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="000000">
                <XIcon/>
            </SocialIcon>
            <SocialIcon color="E60023">
                <PinterestIcon />
            </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem> <Place style={{marginRight:"10px"}} /> Pandikkad(PO), Malappuram, Kerala  </ContactItem>
        <ContactItem> <Call style={{marginRight:"10px"}}/>  +91 9898 777 666</ContactItem>
        <ContactItem> <Mail style={{marginRight:"10px"}}/> contact@muhsha.dev </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  )
}

export default Footer
