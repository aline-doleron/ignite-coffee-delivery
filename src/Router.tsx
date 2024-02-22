
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Confirmation } from "./pages/Confirmation";

export function Router() {
    return (
        <Routes>
            <Route path="/ignite-coffee-delivery" element={<DefaultLayout />} >
                <Route path="/ignite-coffee-delivery" element={<Home />} />
                <Route path="/ignite-coffee-delivery/cart" element={<Cart />} />
                <Route path="/ignite-coffee-delivery/confirmation" element={<Confirmation />} />
            </Route>
        </Routes>
    )
}