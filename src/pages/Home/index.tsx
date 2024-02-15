import { CoffeeOptions } from "./components/CoffeeOptions";
import { Presentation } from "./components/Presentation";
import { HomeContainer } from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <Presentation />
            <CoffeeOptions />

        </HomeContainer>
    )
}