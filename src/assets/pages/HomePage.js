import styled from "styled-components"
import FeaturedTab from "../components/FeaturedTab"
import MyBitsList from "../components/MyBitsList"
import PageContainer from "../components/styled/PageContainer"
import SearchBar from "../components/styled/SearchBar"
import Tabs from "../components/styled/Tabs"
import { Colors } from "../Theme"

const Logo = styled.h1`
   font-family: "Poppins", sans-serif;
   font-weight: 800;
   letter-spacing: 3px;
   font-size: 1.8rem;
   text-align: center;
   margin-bottom: 2rem;
   opacity: 0.7;

   span {
      color: ${Colors.Primary};
   }
`

const tabs = [
   { id: 1, title: "Featured", content: <FeaturedTab /> },
   { id: 2, title: "Collections", content: "tab 2" },
   { id: 3, title: "Artists", content: "tab 3" },
   { id: 4, title: "Tags", content: "tab 4" },
]

export default function HomePage() {
   return (
      <PageContainer>
         <Logo>
            Free <span>V</span>
         </Logo>

         <SearchBar />

         <Tabs tabs={tabs} />

         <MyBitsList />
      </PageContainer>
   )
}
