import { CoffeeCard, CartButton, CoffeeCardContainer, CoffeeOptionsContainer, CoffeeType, CoffeeValue, CoffeeDescription, Currency, CardText, Tags, Price, Quantity } from "./styles";
import americano from "../../../../assets/americano.svg";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

export function CoffeeOptions() {
    return (<>
        <CoffeeOptionsContainer>
            <div>
                <h1>Nossos cafés</h1>
            </div>
            <CoffeeCardContainer>
                <CoffeeCard>
                    <img src={americano} alt="café americano" />

                    <CardText>
                        <Tags>
                            <span>Tradicional</span>
                            <span>Gelado</span>
                        </Tags>
                        <CoffeeType>Expresso tradicional</CoffeeType>
                        <CoffeeDescription>O tradicional café feito com água quente e grãos moídos</CoffeeDescription>

                        <CoffeeValue>
                            <Currency>R$</Currency><Price> 9,90</Price>
                            <Quantity>
                                <button><Plus size={14} /></button>
                                <input type="number" />
                                <button><Minus size={14} /></button>
                            </Quantity>
                            <CartButton><ShoppingCartSimple size={22} weight="fill" /></CartButton>
                        </CoffeeValue>
                    </CardText>

                </CoffeeCard>
            </CoffeeCardContainer>

        </CoffeeOptionsContainer>
    </>
    )
}
