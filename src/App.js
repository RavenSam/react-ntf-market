import styled from "styled-components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavMenu from "./assets/components/NavMenu"

// PAGES
import StorePage from "./assets/pages/StorePage"
import HomePage from "./assets/pages/HomePage"
import ProductPage from "./assets/pages/ProductPage"
// import UserPage from "./assets/pages/UserPage"

const AppEl = styled.div`
   display: flex;
   flex-direction: column;
   position: absolute;
   left: 0;
   right: 0;
   width: 100vw;
   height: 100vh;
   overflow: hidden;

   max-width: 600px;
   margin: 0 auto;
`

const Pages = styled.div`
   flex: 1;
   display: flex;
   overflow: hidden;
`

export default function App() {
   return (
      <>
         <Router>
            <AppEl>
               <Pages>
                  <Routes>
                     <Route exact path="/store" element={<StorePage />} />
                     <Route exact path="/product" element={<ProductPage />} />
                     <Route exact path="/user" element={<HomePage />} />
                     <Route exact path="/" element={<HomePage />} />
                  </Routes>
               </Pages>

               <NavMenu />
            </AppEl>
         </Router>
      </>
   )
}
