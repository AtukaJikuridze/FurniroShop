import "./Navbar.css";
import logo from "../../../assets/Logo.png";
import search from "../../../assets/icons/search.png";
import cart from "../../../assets/icons/cart.png";
import profile from "../../../assets/icons/profile.png";
import heart from "../../../assets/icons/heart.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className={`${isOpen ? "active" : ""}`}>
      {isOpen ? (
        <AiOutlineClose onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
      )}
      <div className="navbar-container container">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>
            <a href="" className="p-bold">
              Home
            </a>
          </li>
          <li>
            <a href="" className="p-bold">
              Shop
            </a>
          </li>
          <li>
            <a href="" className="p-bold">
              About
            </a>
          </li>
          <li>
            <a href="" className="p-bold">
              Contact
            </a>
          </li>
        </ul>
        <div className="icons">
          <div className="icon">
            <img src={profile} alt="" />
          </div>
          <div className="icon">
            <img src={search} alt="" />
          </div>
          <div className="icon">
            <img src={heart} alt="" />
          </div>
          <div className="icon">
            <img src={cart} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
}
