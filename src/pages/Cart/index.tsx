
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "@phosphor-icons/react";
import {
    Address, CartContainer, FormGroup, Input10, Input100, Input40, Input50,
    BaseContainer, Payment, PaymentMethods, Coffees, Coffee, Quantity, RemoveButton, CoffeeResume,
    Actions, CoffeePrice, Resume, Total, Checkout, TotalItems, DeliveryTax, Div60
} from "./styles";
import { ChangeEvent, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
    const { address,
        cartItems,
        totalAmount,
        deliveryTax,
        addItemToCart,
        removeCoffee,
        paymentMethod,
        updateAddress,
        updatePaymentMethod,
        clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const navigateToContacts = () => {
        clearCart();
        navigate('/confirmation');
    };

    const totalAmountLocalized = totalAmount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    const deliveryTaxLocalized = deliveryTax.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });
    const totalWithDeliveryTaxLocalized = (totalAmount + deliveryTax).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

    function incrementCoffeeQuantity(type: string) {
        addItemToCart(type, "increment");
    }

    function decrementCoffeeQuantity(type: string) {
        addItemToCart(type, "decrement");
    }

    function handleAddressChange(event: ChangeEvent<HTMLInputElement>): void {
        updateAddress({
            ...address,
            [event.target.name]: event.target.value
        })
    }

    function handleSelectPaymentMethod(e: React.MouseEvent<HTMLButtonElement>) {
        updatePaymentMethod((e.target as HTMLButtonElement).value);
    }

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
                        <Input40 required type="text" name="cep" placeholder="CEP" value={address.cep} onChange={handleAddressChange} />

                        <Input100 required type="text" name="rua" placeholder="Rua" value={address.rua} onChange={handleAddressChange} />
                        <FormGroup>
                            <Input40 required type="text" name="numero" placeholder="Número" value={address.numero} onChange={handleAddressChange} />

                            <Div60>
                                <input type="text" name="complemento" placeholder="Complemento" value={address.complemento} onChange={handleAddressChange} />
                                <span>Optional</span>
                            </Div60>
                        </FormGroup>
                        <FormGroup>
                            <Input40 required type="text" name="bairro" placeholder="Bairro" value={address.bairro} onChange={handleAddressChange} />
                            <Input50 required type="text" name="cidade" placeholder="Cidade" value={address.cidade} onChange={handleAddressChange} />
                            <Input10 required type="text" name="estado" placeholder="UF" value={address.estado} onChange={handleAddressChange} />
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
                        <button data-active={paymentMethod.id === 'creditCard'} value="creditCard" aria-selected={paymentMethod.id === 'creditCard'} onClick={handleSelectPaymentMethod} ><CreditCard size={16} />Cartão de crédito</button>
                        <button data-active={paymentMethod.id === 'bank'} value="bank" aria-selected={paymentMethod.id === 'bank'} onClick={handleSelectPaymentMethod} ><Bank size={16} />Cartão de débito</button>
                        <button data-active={paymentMethod.id === 'cash'} value="cash" aria-selected={paymentMethod.id === 'cash'} onClick={handleSelectPaymentMethod} ><Money size={16} />Dinheiro</button>
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
                                            <button disabled={cartItem.quantity === 0}><Minus size={14} onClick={(e) => {
                                                e.preventDefault();
                                                decrementCoffeeQuantity(cartItem.type)
                                            }} /></button>
                                            <input type="number" onChange={() => { }} value={cartItem.quantity} />
                                            <button ><Plus size={14} onClick={(e) => {
                                                e.preventDefault();
                                                incrementCoffeeQuantity(cartItem.type)
                                            }} /></button>
                                        </Quantity>


                                        <RemoveButton onClick={(e) => {
                                            e.preventDefault();
                                            removeCoffee(cartItem.type);
                                        }}><Trash size={16} />Remover</RemoveButton>
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

                    <Checkout onClick={navigateToContacts}>
                        Confirmar pedido
                    </Checkout>
                </Coffees>



            </BaseContainer>

        </CartContainer>
    )
}