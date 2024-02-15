import styled from "styled-components";

export const PresentationContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    gap: 3.25rem;
`

export const PresentationText = styled.div`

h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    padding-bottom: 1rem;
}

h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
}

`

export const Benefits = styled.section`
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    gap: 2.5rem;
    margin-top: 4.125rem;


    svg {
        color: ${(props) => props.theme.background};
        
    }


    article {
        display: flex;
        flex-direction: column;
        gap:  1.25rem;
    }
`

export const BaseBenefits = styled.div`
    color: ${(props) => props.theme['base-text']};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;

    div {
        padding: .5rem .5rem .3rem .5rem;
        border-radius: 1000px;
    }
`

export const ShoppingCartBenefit = styled(BaseBenefits)`
    div {
        background-color: ${(props) => props.theme['yellow-dark']};
    }
`

export const TimerBenefit = styled(BaseBenefits)`
     div {
        background-color: ${(props) => props.theme['yellow']};
    }
    
`
export const PackageBenefit = styled(BaseBenefits)`
     div {
        background-color: ${(props) => props.theme['base-text']};
    }
    
`
export const CoffeeBenefit = styled(BaseBenefits)`
     div {
        background-color: ${(props) => props.theme['purple']};
    }
    
`