
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<div>Home</div>} />
                <Route path="/cart" element={<div>Cart</div>} />
            </Route>
        </Routes>
    )
}