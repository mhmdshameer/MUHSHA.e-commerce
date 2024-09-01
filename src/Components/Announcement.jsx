import styled from "styled-components"

const Container = styled.div `
height: 30;
background-color: teal;
color: white;
display: flex;
justify-content: Center;
font-size: 14px;
font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
      Super Offer! If you buy now you can buy double!
    </Container>
  )
}

export default Announcement
