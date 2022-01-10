import styled from "styled-components"
import Img from "../components/styled/Img"
import storeImage1 from "../images/shopImage1.png"
import { Colors } from "../Theme"
import Button from "./styled/Button"

const StoreHeroEl = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   row-gap: 1rem;
   margin-top: 1rem;
   margin-bottom: 1.5rem;
`

const Title = styled.span`
   font-size: 1.5rem;
`

const Subtitle = styled.span`
   color: ${Colors.Gray};
`

const InfoContainer = styled.span`
   display: flex;
   flex-direction: column;
   align-items: center;
   column-gap: 1rem;
`

const ButtonContainer = styled.span`
   display: flex;
   column-gap: 1rem;
`

export default function StoreHero() {
   return (
      <StoreHeroEl>
         <Img width="20vw" src={storeImage1} style={{ maxWidth: "200px" }} />

         <InfoContainer>
            <Title>Cristals</Title>
            <Subtitle>Verified artist</Subtitle>
         </InfoContainer>

         <ButtonContainer>
            <Button>Follow</Button>
            <Button np>Contact</Button>
         </ButtonContainer>
      </StoreHeroEl>
   )
}
