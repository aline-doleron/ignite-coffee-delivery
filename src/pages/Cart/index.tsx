
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { Address, CartContainer, FormGroup, Input10, Input100, Input40, Input50, Input60, BaseContainer, Payment, PaymentMethods, Coffees, Coffee, Quantity, RemoveButton, CoffeeResume, Actions, CoffeePrice, Resume, Total, Checkout, TotalItems, DeliveryTax } from "./styles";

export function Cart() {
    return (
        <CartContainer>
            <BaseContainer>
                <h1>Complete seu pedido</h1>
                <Address>
                    <header>
                        <MapPinLine size={22} />
                        <section>
                            <h1>Endereço de Entrega</h1>
                            <h2>Informe o endereço onde deseja receber seu pedido</h2>
                        </section>

                    </header>

                    <form>
                        <Input40 type="text" placeholder="CEP" />

                        <Input100 type="text" placeholder="Rua" />

                        <FormGroup>
                            <Input40 type="text" placeholder="Número" />

                            <Input60 type="text" placeholder="Complemento" />
                        </FormGroup>
                        <FormGroup>
                            <Input40 type="text" placeholder="Bairro" />
                            <Input50 type="text" placeholder="Cidade" />
                            <Input10 type="text" placeholder="UF" />
                        </FormGroup>
                    </form>
                </Address>
                <Payment>
                    <header>
                        <CurrencyDollar size={22} />
                        <section>
                            <h1>Pagamento</h1>
                            <h2>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h2>
                        </section>
                    </header>
                    <PaymentMethods>
                        <button><CreditCard size={16} />Cartão de crédito</button>
                        <button><Bank size={16} />Cartão de débito</button>
                        <button><Money size={16} />Dinheiro</button>
                    </PaymentMethods>

                </Payment>
            </BaseContainer>
            <BaseContainer>
                <h1>Cafés selecionados</h1>
                <Coffees>
                    <Coffee>
                        <img src="/assets/cubano.svg"></img>
                        <CoffeeResume>
                            <span>Expresso Tradicional</span>
                            <Actions>
                                <Quantity>
                                    <button><Plus size={14} /></button>
                                    <input type="number" />
                                    <button><Minus size={14} /></button>
                                </Quantity>
                                <RemoveButton><Trash size={16} />Remover</RemoveButton>
                            </Actions>
                        </CoffeeResume>

                        <CoffeePrice>R$ 9,90</CoffeePrice>
                    </Coffee>
                    <Coffee>
                        <img src="/assets/cubano.svg"></img>
                        <CoffeeResume>
                            <span>Expresso Tradicional</span>
                            <Actions>
                                <Quantity>
                                    <button><Plus size={14} /></button>
                                    <input type="number" />
                                    <button><Minus size={14} /></button>
                                </Quantity>
                                <RemoveButton><Trash size={16} />Remover</RemoveButton>
                            </Actions>
                        </CoffeeResume>

                        <CoffeePrice>R$ 9,90</CoffeePrice>
                    </Coffee>

                    <Resume>
                        <TotalItems>
                            <span>Total de itens </span>
                            <span>R$ 29,70</span>
                        </TotalItems>
                        <DeliveryTax>
                            <span>Entrega</span>
                            <span>R$ 3,50</span>
                        </DeliveryTax>
                        <Total>
                            <span>Total</span>
                            <span>R$ 33,20</span>
                        </Total>
                    </Resume>

                    <Checkout>
                        Confirmar pedido
                    </Checkout>
                </Coffees>



            </BaseContainer>

        </CartContainer>
    )
}