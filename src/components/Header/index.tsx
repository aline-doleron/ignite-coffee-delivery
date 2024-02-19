import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { ActionButtons, Cart, HeaderContainer, Locale, Quantity, } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
export function Header() {
    const { cartItems } = useContext(CartContext);

    const coffeeQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);


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
                        <Cart><ShoppingCart size={22} weight="fill" /><Quantity>{coffeeQuantity}</Quantity></Cart>
                    </NavLink>
                </ActionButtons>

            </nav>
        </HeaderContainer>
    )
}                                                               