import styled from "styled-components"
import { Colors } from "../../Theme"
import { useState } from "react"

const TabsEl = styled.div`
   width: 100%;
`
const BtnsContainer = styled.div`
   display: flex;
   justify-content: space-around;
   margin: 0 1rem;
   padding: 0 1rem;
`

const TabsBtn = styled.span`
   cursor: pointer;
   padding: 0.5rem 0;
   position: relative;

   ${(p) => (p.active ? "font-weight: 500;" : `color:${Colors.Gray};`)}

   ::after {
      ${(p) => (!p.active ? "display:none;" : "")}
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0.3rem;
      height: 0.3rem;
      border-radius: 100%;
      background-color: ${Colors.Primary};
      margin-left: 50%;
      transform: translateX(-50%);
   }
`

const Content = styled.div`
   margin: 0 0.5rem;
   margin-top: 1rem;
`

export default function Tabs({ tabs }) {
   const [currentTab, setCurrentTab] = useState(tabs[0])

   return (
      <TabsEl>
         <BtnsContainer>
            {tabs.map((el) => (
               <TabsBtn key={el.id} onClick={() => setCurrentTab(el)} active={el.id === currentTab.id}>
                  {el.title}
               </TabsBtn>
            ))}
         </BtnsContainer>

         <Content>{currentTab.content}</Content>
      </TabsEl>
   )
}
