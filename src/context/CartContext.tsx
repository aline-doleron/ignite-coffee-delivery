import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee, CoffeeTypes } from "./data";

interface Address {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
};

interface PaymentMethod {
    id: string | undefined;
    name: 'Cartão de Crédito' | 'Cartão de Débito' | 'Dinheiro' | null;
}

interface CartContextType {
    address: Address;
    coffeeItems: Coffee[],
    cartItems: Coffee[],
    deliveryTax: number,
    totalAmount: number,
    paymentMethod: PaymentMethod,
    addItemToCart: (type: string, action?: string) => void;
    removeCoffee: (type: string) => void;
    updateCoffeeQuantity: (type: string, quantity: number) => void
    updateAddress: (address: Address) => void;
    updatePaymentMethod: (newPaymentMethod: string) => void;
    clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [address, setAddress] = useState<Address>({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        estado: ''
    });
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
        id: undefined,
        name: null,
    });
    const [coffeeItems, setCoffeeItems] = useState(CoffeeTypes);
    const [cartItems, setCartItems] = useState<Coffee[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const deliveryTax = 3.50;

    function updateAddress(newAddress: Address) {
        setAddress({
            ...newAddress
        })
    }

    function updatePaymentMethod(newPaymentMethod: string) {
        let payMethod;
        switch (newPaymentMethod) {
            case 'creditCard':
                setPaymentMethod(
                    {
                        id: newPaymentMethod,
                        name: 'Cartão de Crédito'
                    }
                )
                break;
            case 'bank':
                setPaymentMethod(
                    {
                        id: newPaymentMethod,
                        name: 'Cartão de Débito'
                    }
                )
                break;
            default:
                setPaymentMethod(
                    {
                        id: newPaymentMethod,
                        name: 'Dinheiro'
                    }
                );
                break;
        }
    }

    function updateCoffeeQuantity(type: string, quantity: number) {
        const newCoffeeItems = coffeeItems.map(coffee => {
            if (coffee.type === type) {
                return {
                    ...coffee,
                    quantity
                }
            } else {
                return coffee
            }
        })

        setCoffeeItems(newCoffeeItems)
    }

    function addItemToCart(type: string, action?: string) {
        const newCartItem = coffeeItems.find((coffee) => coffee.type === type)!;

        const needIncrement = cartItems.find((coffee) => coffee.type === type)!;

        let updatedCartItems = cartItems;

        let quantity = newCartItem.quantity;

        if (action === "increment") {
            quantity = 1;
        } else if (action === "decrement") {
            quantity = -1;
        }


        if (needIncrement) {
            updatedCartItems = cartItems.map(cartItem => {
                if (cartItem.type === type) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + quantity
                    }
                } else {
                    return cartItem
                }
            })
            setCartItems(updatedCartItems);

        } else {
            setCartItems([
                ...updatedCartItems,
                newCartItem
            ]);
        }


    }

    function removeCoffee(type: string) {
        const newCartItems = cartItems.filter((coffee) => coffee.type !== type)!;

        setCartItems(newCartItems);


    }

    function clearCart() {
        setCartItems([]);
    }

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);

        setTotalAmount(total);
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                address,
                cartItems,
                coffeeItems,
                deliveryTax,
                paymentMethod,
                totalAmount,
                addItemToCart,
                removeCoffee,
                updateCoffeeQuantity,
                updateAddress,
                updatePaymentMethod,
                clearCart
            }}>
            {children}
        </CartContext.Provider>
    )
}