import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee, CoffeeTypes } from "./data";


interface CartContextType {
    coffeeItems: Coffee[],
    cartItems: Coffee[],
    deliveryTax: number,
    totalAmount: number,
    updateCoffeeQuantity: (type: string, quantity: number) => void
    addItemToCart: (type: string) => void
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [coffeeItems, setCoffeeItems] = useState(CoffeeTypes);
    const [cartItems, setCartItems] = useState<Coffee[]>([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const deliveryTax = 3.50;

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

    function addItemToCart(type: string) {
        const newCartItem = coffeeItems.find((coffee) => coffee.type === type)!;

        const needIncrement = cartItems.find((coffee) => coffee.type === type)!;

        let updatedCartItems = cartItems;

        if (needIncrement) {
            updatedCartItems = cartItems.map(cartItem => {
                if (cartItem.type === type) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + newCartItem.quantity
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

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + (item.quantity * item.price), 0);

        setTotalAmount(total);
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                cartItems,
                coffeeItems,
                deliveryTax,
                totalAmount,
                updateCoffeeQuantity,
                addItemToCart,
            }}>
            {children}
        </CartContext.Provider>
    )
}