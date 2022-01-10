import styled from "styled-components"
import { Colors } from "../Theme"
import { BsThreeDots } from "react-icons/bs"
import { FiArrowLeft } from "react-icons/fi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import Button from "../components/styled/Button"
import PageContainer from "../components/styled/PageContainer"
import ProductCard from "../components/styled/ProductCard"

const TopMenu = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 1rem;
   margin-bottom: 1rem;
   font-size: 1.5rem;
`

const Title = styled.span`
   font-size: 1.2rem;
   margin-top: 0.5rem;
   font-weight: 600;
`

const HoldBid = styled.div`
   display: flex;
   align-items: center;
   font-size: 1.1rem;
   padding: 1rem;
   background-color: ${Colors.Primary};
   color: ${Colors.CardBackground};
   border-radius: 12px;
   margin: 0 0.5rem;
   column-gap: 0.5rem;
   margin-top: 1rem;

   > svg {
      font-size: 1.5rem;
   }
`

const HoldBidText = styled.span`
   flex: 1;
`

export default function ProductPage() {
   const nav = useNavigate()

   return (
      <PageContainer>
         <TopMenu>
            <FiArrowLeft onClick={() => nav(-1)} />

            <Title>Artwork</Title>

            <BsThreeDots />
         </TopMenu>

         <ProductCard />

         <HoldBid>
            <AiOutlineShoppingCart />

            <HoldBidText>Confirm 4.0 ETH bid</HoldBidText>

            <Button np bgColor={Colors.CardBackground} color={Colors.Primary}>
               Hold Bid
            </Button>
         </HoldBid>
      </PageContainer>
   )
}
