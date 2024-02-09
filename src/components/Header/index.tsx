import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { ActionButtons, Cart, HeaderContainer, Locale, } from "./styles";
import logo from "../../assets/logo-coffee-delivery.svg";

export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <NavLink to="/" title="Home">
                    <img src={logo} alt="" />
                </NavLink>

                <ActionButtons>
                    <NavLink to="/" title="Locale">
                        <Locale><MapPin size={22} weight="fill" />Porto Alegre, RS</Locale>
                    </NavLink>
                    <NavLink to="/cart" title="Cart">
                        <Cart><ShoppingCart size={22} weight="fill" /></Cart>
                    </NavLink>
                </ActionButtons>

            </nav>
        </HeaderContainer>
    )
}                                                               