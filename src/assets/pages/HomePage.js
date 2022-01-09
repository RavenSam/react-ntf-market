import styled from "styled-components"
import FeaturedTab from "../components/FeaturedTab"
import SearchBar from "../components/styled/SearchBar"
import Tabs from "../components/styled/Tabs"
import { Colors } from "../Theme"

const PageEl = styled.div`
   background-color: ${Colors.Background};
   flex: 1;
   padding-bottom: 10vh;
   overflow-x: hidden;
   min-height: min-content;
   padding-top: 1rem;
   scrollbar-width: 0;
   ::-webkit-scrollbar {
      display: none;
   }
`

const Title1 = styled.h1`
   font-family: "Poppins", sans-serif;
   font-weight: 600;
   font-size: 1.5rem;
   text-align: center;
   margin-bottom: 2rem;
`

const tabs = [
   { id: 1, title: "Featured", content: <FeaturedTab /> },
   { id: 2, title: "Collections", content: "tab 2" },
   { id: 3, title: "Artists", content: "tab 3" },
   { id: 4, title: "Tags", content: "tab 4" },
]

export default function HomePage() {
   return (
      <PageEl>
         <Title1>Home</Title1>

         <SearchBar />

         <Tabs tabs={tabs} />
      </PageEl>
   )
}
