import styled from "styled-components"
import { RiSearchLine } from "react-icons/ri"
import { Colors } from "../../Theme"

const SearchBarEl = styled.div`
   background-color: ${Colors.CardBackground};
   display: flex;
   align-items: center;
   padding: 1rem;
   border-radius: 12px;
   margin: 0 1rem 2rem 1rem;
   border: 1px solid transparent;
   transition: border-color 0.3s ease-in-out;

   & > svg {
      font-size: 1.5rem;
      color: ${Colors.Gray};
      transition: color 0.3s ease-in-out;
   }

   &:focus-within {
      border-color: ${Colors.Primary};
   }

   &:focus-within > svg {
      color: ${Colors.Primary};
   }
`

const Input = styled.input`
   font-size: 1rem;
   flex: 1;
   border: none;

   :focus {
      outline: none;
   }
`

export default function SearchBar() {
   return (
      <SearchBarEl>
         <Input />
         <RiSearchLine />
      </SearchBarEl>
   )
}
