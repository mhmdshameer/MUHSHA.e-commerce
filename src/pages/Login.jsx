import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5) ), url("/img/login1.webp");
    background-size:     cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.8);
    ${mobile ({width: "75%"})}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex:1;
    min-width: 40%;
    margin: 10px 0px ;
    padding: 10px;
`;

const Button = styled.button`
    width: 40%;
    padding: 15px 20px;
    border: none;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Link = styled.a`
    margin: 10px 0px;
    font-size: 12px;
    color: teal;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
        <Form>
        <Input placeholder="username" />
        <Input placeholder="password" />
      <Button>LOGIN</Button>
      <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
      <Link>CREATE A NEW ACCOUNT</Link>
      </Form>
    </Wrapper>
    </Container>
  )
}

export default Login
