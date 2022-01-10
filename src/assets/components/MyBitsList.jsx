import styled from "styled-components"
import bidImage from "../images/bidImage.png"
import { Colors } from "../Theme"
import Img from "../components/styled/Img"

const MyBidsListEl = styled.div`
   padding: 0 1rem;
   margin-top: 1rem;
`

const Title = styled.h3`
   font-weight: 600;
   margin-bottom: 1rem;
`

const ItemList = styled.div`
   display: flex;
   flex-direction: column;
   row-gap: 1rem;
`

const BidItem = styled.div`
   display: flex;
   padding: 0.5rem;
   cursor: pointer;
   width: 100%;
   align-items: center;
   transition-property: background-color, border-radius;
   transition-duration: 0.5s;

   :hover {
      background-color: ${Colors.GrayBorder};
      border-radius: 12px;
   }
`

const BidData = styled.span`
   display: flex;
   flex-direction: column;
   flex: 1;
   gap: 0.5rem;
   margin-left: 1rem;
   justify-content: center;
`

const BTitle = styled.span`
   font-weight: 500;
`

const BDes = styled.span`
   color: ${Colors.Gray};
   font-size: 0.9rem;
`

const BidAmount = styled.span`
   font-weight: 600;
   font-size: 0.9rem;
`

export default function MyBitsList() {
   return (
      <MyBidsListEl>
         <Title>Your bids</Title>
         <ItemList>
            {[...Array(3)].map((el) => (
               <BidItem key={el}>
                  <Img src={bidImage} width="4rem" height="4rem" borderRadius="12px" />

                  <BidData>
                     <BTitle>Clay boyz 178</BTitle>
                     <BDes>Waldo</BDes>
                  </BidData>

                  <BidAmount>1.4 ETH </BidAmount>
               </BidItem>
            ))}
         </ItemList>
      </MyBidsListEl>
   )
}
