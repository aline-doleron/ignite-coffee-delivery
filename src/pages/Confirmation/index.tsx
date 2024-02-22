import { AddressResume, ConfirmationContainer, ConfirmationMessages, ConfirmationResume, DeliveryTimeResume, Highlight, PaymentMethodResume } from "./styles"
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export function Confirmation() {
    const { address, paymentMethod } = useContext(CartContext);

    return (
        <ConfirmationContainer>
            <p>Uhu! Pedido confirmado</p>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <ConfirmationMessages>
                <ConfirmationResume>
                    <AddressResume>
                        <div><MapPin size={16} weight="fill" /></div>
                        <div>
                            <span>Entrega em <Highlight>{address.rua}, {address.numero} </Highlight></span>
                            <span>{address.cidade} - {address.estado}</span>
                        </div>
                    </AddressResume>
                    <DeliveryTimeResume>
                        <div><Timer size={16} weight="fill" /></div>
                        <div>
                            <span>Previsão de entrega </span>
                            <span><Highlight>20 min - 30 min</Highlight></span>
                        </div>
                    </DeliveryTimeResume>
                    <PaymentMethodResume>
                        <div><CurrencyDollar size={16} weight="fill" /></div>
                        <div>
                            <span>Pagamento na entrega</span>
                            <span><Highlight>{paymentMethod.name}</Highlight></span>
                        </div>
                    </PaymentMethodResume>
                </ConfirmationResume>
                <img src={`/ignite-coffee-delivery/assets/Illustration.svg`}></img>
            </ConfirmationMessages>
        </ConfirmationContainer >
    )
}