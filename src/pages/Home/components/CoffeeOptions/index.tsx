import { CoffeeCard, CartButton, CoffeeCardContainer, CoffeeOptionsContainer, CoffeeType, CoffeeValue, CoffeeDescription, Currency, CardText, Tags, Price, Quantity } from "./styles";
import { CoffeeTypes } from "./data";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

export function CoffeeOptions() {
    return (<>
        <CoffeeOptionsContainer>
            <div>
                <h1>Nossos cafés</h1>
            </div>
            <CoffeeCardContainer>

                {CoffeeTypes.map(coffee => {
                    return (
                        <CoffeeCard>
                            <img key={coffee.img} src={coffee.img} alt="café americano" />

                            <CardText>
                                <Tags>
                                    {coffee.tags.map(tag => <span key={coffee.img + tag}>{tag}</span>)}
                                </Tags>
                                <CoffeeType>{coffee.type}</CoffeeType>
                                <CoffeeDescription>{coffee.description}</CoffeeDescription>

                                <CoffeeValue>
                                    <Currency>R$</Currency><Price>{coffee.price}</Price>
                                    <Quantity>
                                        <button><Plus size={14} /></button>
                                        <input type="number" />
                                        <button><Minus size={14} /></button>
                                    </Quantity>
                                    <CartButton><ShoppingCartSimple size={22} weight="fill" /></CartButton>
                                </CoffeeValue>
                            </CardText>

                        </CoffeeCard>
                    )
                })}

            </CoffeeCardContainer>

        </CoffeeOptionsContainer>
    </>
    )
}
