import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom'

import { TbSearch } from "react-icons/tb"
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search"
import Cart from "../Cart/Cart"
import { Context } from "../../utilis/context";

const Header = () => {
    const [scrolled,setScrolled] = useState(false)
    const [showCart,setShowCart] = useState(false)
    const [searched,setSearched] = useState(false)

    //to calculate the scroll percentage
    const handleScroll = ()=>{
        const offset = window.scrollY;
        console.log(offset);
        if (offset>200){
            setScrolled(true)
        } else{
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",handleScroll)
    }, [])
    return (
    <><header className={`main-header ${scrolled ? "sticky-header" : ""}`}>
        <div className="header-content">
            <ul className="left">
                <li>Home</li>
                <li>About</li>
                <li>Categories</li>
            </ul>
            <div className="center">Boat Store</div>
            <div className="right">
                <TbSearch  onClick={()=>setSearched(true)}/>
                <AiOutlineHeart />
                <span className="cart-icon" onClick={()=>setShowCart(true)} >
                    <FaShoppingCart />
                    <span>5</span>
                </span>
            </div>
        </div>
    </header>
    {showCart && <Cart setShowCart={setShowCart}/>}
    {searched && <Search setSearched = {setSearched}/>}
    </>
    );
};

export default Header;
