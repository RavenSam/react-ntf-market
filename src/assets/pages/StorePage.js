import styled from "styled-components"
import Tabs from "../components/styled/Tabs"
import { RiSearchLine } from "react-icons/ri"
import { BsThreeDots } from "react-icons/bs"
import { FiArrowLeft } from "react-icons/fi"
import storeImage2 from "../images/shopImage2.png"
import Img from "../components/styled/Img"
import { useNavigate } from "react-router-dom"
import StoreHero from "../components/StoreHero"
import PageContainer from "../components/styled/PageContainer"

const TopMenu = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 1rem;
   font-size: 1.5rem;
`

const tabs = [
   { id: 1, title: "Artworks", content: <Img src={storeImage2} /> },
   { id: 2, title: "Collections", content: "tab 2" },
   { id: 3, title: "About", content: "tab 3" },
]

export default function StorePage() {
   const nav = useNavigate()

   return (
      <PageContainer>
         <TopMenu>
            <FiArrowLeft onClick={() => nav(-1)} />

            <span>
               <RiSearchLine style={{ marginRight: "1.5rem" }} />
               <BsThreeDots />
            </span>
         </TopMenu>

         <StoreHero />

         <Tabs tabs={tabs} />
      </PageContainer>
   )
}
