import { CoffeeCard, CartButton, CoffeeCardContainer, CoffeeOptionsContainer, CoffeeType, CoffeeValue, CoffeeDescription, Currency, CardText, Tags, Price, Quantity } from "./styles";

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { useContext, useRef } from "react";
import { CartContext } from "../../../../context/CartContext";

export function CoffeeOptions() {
    const { coffeeItems, updateCoffeeQuantity, addItemToCart } = useContext(CartContext);

    function incrementCoffeeQuantity(type: string, quantity: number) {
        updateCoffeeQuantity(type, quantity + 1);
    }

    function decrementCoffeeQuantity(type: string, quantity: number) {
        updateCoffeeQuantity(type, quantity - 1);
    }

    function changeCoffeeQuantity(type: string, quantity: string) {
        updateCoffeeQuantity(type, parseInt(quantity));
    }

    return (<>
        <CoffeeOptionsContainer>
            <div>
                <h1>Nossos cafés</h1>
            </div>
            <CoffeeCardContainer>


                {coffeeItems && coffeeItems.map(coffee => {
                    return (
                        <form key={coffee.id}>
                            <CoffeeCard  >
                                <img src={coffee.img} alt="café americano" />

                                <CardText>
                                    <Tags>
                                        {coffee.tags.map(tag => <span key={coffee.id + tag}>{tag}</span>)}
                                    </Tags>
                                    <CoffeeType>{coffee.type}</CoffeeType>
                                    <CoffeeDescription>{coffee.description}</CoffeeDescription>

                                    <CoffeeValue>
                                        <Currency>R$</Currency><Price>{coffee.price.toLocaleString('pt-BR', { currency: 'BRL', minimumFractionDigits: 2 })}</Price>
                                        <Quantity>
                                            <button disabled={coffee.quantity === 0}><Minus size={14} onClick={(e) => {
                                                e.preventDefault();
                                                decrementCoffeeQuantity(coffee.type, coffee.quantity)
                                            }} /></button>
                                            <input type="number" onChange={(e) => {
                                                e.preventDefault();
                                                changeCoffeeQuantity(coffee.type, (e.target as HTMLInputElement).value)
                                            }} value={coffee.quantity} />
                                            <button ><Plus size={14} onClick={(e) => {
                                                e.preventDefault();
                                                incrementCoffeeQuantity(coffee.type, coffee.quantity)
                                            }} /></button>
                                        </Quantity>
                                        <CartButton disabled={coffee.quantity === 0} onClick={(e) => {
                                            e.preventDefault();
                                            if (coffee.quantity) {
                                                addItemToCart(coffee.type)
                                            }

                                        }}><ShoppingCartSimple size={22} weight="fill" /></CartButton>
                                    </CoffeeValue>
                                </CardText>

                            </CoffeeCard>
                        </form>
                    )

                })}


            </CoffeeCardContainer>

        </CoffeeOptionsContainer>
    </>
    )
}
