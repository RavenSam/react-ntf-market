import styled from "styled-components"
import { BiChevronDown } from "react-icons/bi"
import { useNavigate } from "react-router-dom"
import image1 from "../images/image1.png"
import image2 from "../images/image2.png"
import image3 from "../images/image3.png"
import image4 from "../images/image4.png"
import { Colors } from "../Theme"
import Img from "../components/styled/Img"

const FeaturedTabEl = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   gap: 0.5rem;
   position: relative;
   overflow: hidden;
`

const Item = styled.div`
   background-color: ${Colors.CardBackground};
   padding: 0 0.4rem;
   border-radius: 12px;
   display: flex;
   flex-direction: column;
   cursor: pointer;
`

const Title = styled.span`
   font-size: 1.1rem;
   margin-top: 0.5rem;
`

const Subtitle = styled.span`
   color: ${Colors.Gray};
   font-size: 1rem;
`

const BottomFade = styled.span`
   text-align: center;
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 25%;
   cursor: pointer;
   background-image: linear-gradient(rgba(255, 255, 255, 0.1), ${Colors.Background});
`

const ShowMore = styled.span`
   text-align: center;
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   font-weight: 500;
   background: rgba(255, 255, 255, 0.32);
   padding: 1rem;
   /* border: 1px solid ${Colors.GrayBorder}; */
   /* border-radius: 12px; */
   backdrop-filter: blur(17px);
`

const items = [
   { id: 1, title: "Universe 34", subtitle: "Marketi", image: image1 },
   { id: 2, title: "Holy", subtitle: "Lea Kovaseva", image: image2 },
   { id: 3, title: "Title 3", subtitle: "Marketi", image: image3 },
   { id: 4, title: "Title 4", subtitle: "Marketi", image: image4 },
]

export default function FeaturedTab() {
   const nav = useNavigate()

   return (
      <FeaturedTabEl>
         {items.map((el) => (
            <Item key={el.id} onClick={() => nav(`/product`)}>
               <Img src={el.image} />
               <Title>{el.title}</Title>
               <Subtitle>{el.subtitle}</Subtitle>
            </Item>
         ))}

         <BottomFade>
            <ShowMore>
               <BiChevronDown /> Show More
            </ShowMore>
         </BottomFade>
      </FeaturedTabEl>
   )
}
