import React from 'react'
import styled from "styled-components"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div `
   height: 60px;
`;
const Wrapper = styled.div `
padding: 10px 20px;
display: flex;
align-items: Center;
justify-content: space-between;
`;
const Left = styled.div `
 flex: 1;
 display: flex;
 align-items: Center;
`;
const Language = styled.span ``
const SearchContainer = styled.div `
   border: 0.5px solid lightgray;
   display: flex;
   align-items: Center;
   margin-left: 25px;
   padding: 5;

`;
const Input = styled.input `
     border: none;
`
const Centre = styled.div `
flex: 1;
text-align: Center
`;
const Logo = styled.h1 `
   font-size: bold;
`
const Right = styled.div `
   flex:1;
   display: flex;
   align-items: Center;
   justify-content: flex-end;

`;
const MenuItem = styled.div`
   font-size: 14px;
   cursor: pointer;
   margin-left: 25px;
`;


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
       <Language>ENG</Language>
       <SearchContainer>
       <Input />
       <SearchIcon style={{color: "grey", fontSize: 16}} />
       </SearchContainer>
      </Left>
      <Centre>
        <Logo>MUHSHA.</Logo>
      </Centre>
      <Right>
      <MenuItem>Register</MenuItem>
      <MenuItem>Sign In</MenuItem>
      <MenuItem>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartOutlinedIcon color="action" />
        </Badge>
      </MenuItem>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
