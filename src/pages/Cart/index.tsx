
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import { Address, CartContainer, FormGroup, Input10, Input100, Input40, Input50, Input60, BaseContainer, Payment, PaymentMethods, Coffees, Coffee, Quantity, RemoveButton, CoffeeResume, Actions, CoffeePrice, Resume, Total, Checkout, TotalItems, DeliveryTax } from "./styles";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Cart() {
    const { cartItems, totalAmount, deliveryTax } = useContext(CartContext);

    const totalAmountLocalized = totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    const deliveryTaxLocalized = deliveryTax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    const totalWithDeliveryTaxLocalized = (totalAmount + deliveryTax).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

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
                    {cartItems && cartItems.map(cartItem => {
                        const coffeePrice = (cartItem.price * cartItem.quantity).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

                        return (
                            <Coffee>
                                <img src={cartItem.img}></img>
                                <CoffeeResume>
                                    <span>{cartItem.type}</span>
                                    <Actions>
                                        <Quantity>
                                            <button><Plus size={14} /></button>
                                            <input type="number" onChange={() => { }} value={cartItem.quantity} />
                                            <button><Minus size={14} /></button>
                                        </Quantity>
                                        <RemoveButton><Trash size={16} />Remover</RemoveButton>
                                    </Actions>
                                </CoffeeResume>

                                <CoffeePrice>{coffeePrice}</CoffeePrice>
                            </Coffee>
                        )
                    })}



                    <Resume>
                        <TotalItems>
                            <span>Total de itens </span>
                            <span>{totalAmountLocalized}</span>
                        </TotalItems>
                        <DeliveryTax>
                            <span>Entrega</span>
                            <span>{deliveryTaxLocalized}</span>
                        </DeliveryTax>
                        <Total>
                            <span>Total</span>
                            <span>{totalWithDeliveryTaxLocalized}</span>
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