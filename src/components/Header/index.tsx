import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { ActionButtons, Cart, HeaderContainer, Locale, Quantity, } from "./styles";
export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <NavLink to="/" title="Home">
                    <img src={"/assets/logo-coffee-delivery.svg"} alt="" />
                </NavLink>

                <ActionButtons>
                    <NavLink to="/" title="Locale">
                        <Locale><MapPin size={22} weight="fill" />Porto Alegre, RS</Locale>
                    </NavLink>
                    <NavLink to="/cart" title="Cart">
                        <Cart><ShoppingCart size={22} weight="fill" /><Quantity>3</Quantity></Cart>
                    </NavLink>
                </ActionButtons>

            </nav>
        </HeaderContainer>
    )
}                                                               