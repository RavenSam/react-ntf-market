import styled from "styled-components"
import { FiHome } from "react-icons/fi"
import { AiOutlineUser } from "react-icons/ai"
import { BiStore } from "react-icons/bi"
import { Colors } from "../Theme"
import { useNavigate, useLocation } from "react-router-dom"

const NavMenuEl = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   background-color: rgba(255, 255, 255, 0.7);
   position: absolute;
   bottom: 0;
   height: 10%;
   width: 100%;
   backdrop-filter: blur(50px);
`

const Link = styled.a`
   font-size: 1.7rem;
   ${(p) => (p.active ? `color:${Colors.Primary}` : "")};
   position: relative;
   cursor: pointer;

   ::before {
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

const navLinks = [
   { title: "Home", icon: FiHome, href: "/" },
   { title: "Store", icon: BiStore, href: "/store" },
   { title: "User", icon: AiOutlineUser, href: "/user" },
]

export default function NavMenu() {
   const navigate = useNavigate()
   const { pathname } = useLocation()

   return (
      <NavMenuEl>
         {navLinks.map((el) => (
            <Link key={el.title} title={el.title} onClick={() => navigate(el.href)} active={pathname === el.href}>
               <el.icon />
            </Link>
         ))}
      </NavMenuEl>
   )
}
