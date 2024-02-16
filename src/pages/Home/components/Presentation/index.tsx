import { Benefits, PresentationContainer, PresentationText, ShoppingCartBenefit, TimerBenefit, PackageBenefit, CoffeeBenefit } from "./styles";
import { Coffee, Package, ShoppingCartSimple, Timer } from "@phosphor-icons/react";

export function Presentation() {
    return (
        <PresentationContainer>
            <PresentationText>
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>

                <Benefits>
                    <article>
                        <ShoppingCartBenefit>
                            <div><ShoppingCartSimple size={16} weight="fill" /></div>
                            <span>Compra simples e segura</span>
                        </ShoppingCartBenefit>
                        <TimerBenefit>
                            <div><Timer size={16} weight="fill" /></div>
                            <span>Entrega rápida e rastreada</span>
                        </TimerBenefit>

                    </article>
                    <article>
                        <PackageBenefit>
                            <div><Package size={16} weight="fill" /></div>
                            <span>Embalagem mantém o café intacto</span>
                        </PackageBenefit>
                        <CoffeeBenefit>
                            <div><Coffee size={16} weight="fill" /></div>
                            <span>O café chega fresquinho até você</span>
                        </CoffeeBenefit>
                    </article>
                </Benefits>
            </PresentationText>

            <img src={`/assets/coffee-delivery.svg`} alt="Cup of coffee" />


        </PresentationContainer>
    )
}
