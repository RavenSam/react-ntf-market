import styled from "styled-components"
import { Colors } from "../../Theme"

const Button = styled.button`
   background-color: ${(p) => (p.bgColor ? p.bgColor : p.np ? Colors.CardBackground : Colors.Primary)};
   color: ${(p) => (p.color ? p.color : p.np ? "" : Colors.CardBackground)};
   border-radius: 12px;
   border: ${(p) => (p.np ? `1px solid ${Colors.GrayBorder}` : "none")};
   ${(p) => !p.np && "box-shadow: 0px 15px 23px rgba(0,0,0,0.4) ;"}
   padding:.5rem 1.5rem;
   font-size: 1.1rem;
   cursor: pointer;
   ${(p) => p.fw && "width:100%;"}
   ${(p) => p.flex && `display:flex; align-items:center; justify-content:center;column-gap:.4rem;`}
   ${(p) => p.disabled && "opacity:0.5 !important; cursor:default;"}
   opacity: 1;

   :hover {
      opacity: 0.8;
   }
`

export default Button
