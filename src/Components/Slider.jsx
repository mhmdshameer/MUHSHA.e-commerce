import styled from "styled-components"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from "../data.js";
import  {useState} from "react"


const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  position: relative;
  overflow: hidden;  
` 
const Arrow = styled.div  `
   height: 50px;
   width: 50px;
   background-color: #fff7f7;
   border-radius: 50%;
   display: flex;
   align-items: Center;
   justify-content: Center;
   position: absolute;
   top:0;
   bottom: 0;
   right: ${props=> props.direction === "right" && "10px"};
   left: ${props=> props.direction === "left" && "10px"};
   margin: auto;
   cursor: pointer;
   opacity: 0.5;
   z-index: 2;
`;

const Wrapper = styled.div `
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw)
`;
const Slide = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${props=> props.bg}
`;
const ImgContainer = styled.div `
 height: 100%;
  flex: 1;
`;
const Image = styled.img `
   height: 80%;
`
const InfoContainer = styled.div `
  flex: 1;
  margin-right: 50px;
`;

const Title = styled.h1 `
   font-size: 70px;
`;
const Desc = styled.p `
   margin: 50px 0px;
   font-size: 20px;
   font-weight: 500;
   letter-spacing: 3px;
`;
const Button = styled.button `
   padding: 10px;
   font-size: 20px;
   background-color: transparent;
   cursor: pointer;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
    if (direction==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 3)
    }else{
        setSlideIndex(slideIndex < 3 ? slideIndex+1 : 0)
    }
    }

  return (
    <Container>
       <Arrow direction="left" onClick={()=> handleClick("left")}>
         <ArrowLeftIcon/>
       </Arrow>
       <Wrapper slideIndex={slideIndex}>
       {sliderItems.map((item) => (
         <Slide bg={item.bg} key={item.id} >
            <ImgContainer>
                <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
                <Button>SHOP NOW</Button>
            </InfoContainer>
         </Slide>
        ))}
       </Wrapper>
       <Arrow direction="right" onClick={()=> handleClick("right")}>
         <ArrowRightIcon/>
       </Arrow>
    </Container>
  )
}

export default Slider
