import styled from "styled-components";

export const CoffeeOptionsContainer = styled.section`
    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 2rem;
        font-weight: 800;
        margin-top: 4rem;
    }

`

export const CoffeeCardContainer = styled.section`
    display: flex;
    gap: 2rem;
    margin-top: 4rem;
    flex-wrap: wrap;

`

export const CoffeeCard = styled.div`
    background-color: ${(props) => props.theme['base-card']};
    width: 16rem;
    height: 19rem;
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.25rem;
    text-align: center;

    img {
        width: 7.5rem;
        height: 7.5rem;
        top: -2.25rem;
        position: relative;
    }

    
`

export const CoffeeType = styled.span`
    font-size: 1.25rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    margin-top: 1rem;
`

export const CoffeeDescription = styled.span`
    font-size: .875rem;
    font-family: 'Roboto',sans-serif;
    font-weight: regular;
    color: ${(props) => props.theme['base-label']};
    line-height: 130%;
    margin-top: .5rem;
    
`

export const CardText = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -1.5rem;
`

export const Tags = styled.section`
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-family: 'Roboto',sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    line-height: 130%;

    span {
        background-color: ${(props) => props.theme['yellow-light']};
        padding: 0.25rem 0.5rem 0.25rem 0.5rem;
        border-radius: 100px;
    }

    span + span {
        margin-left: .25rem;
    }
`
export const CoffeeValue = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
`

export const Currency = styled.span`
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: .875rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    margin-right: .25rem;
`

export const Price = styled.span`
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
    margin-right: 1.5rem;
`

export const Quantity = styled.div`
    display: flex;
    background-color: ${(props) => props.theme['base-button']};
    margin-right: 0.5rem;
    border-radius: 6px;

    button {
        padding: .5rem .5rem .3rem .5rem;
        border: none;
        border-radius: 6px;
        color:  ${(props) => props.theme['purple']};
        background: none;
    }

    input {
    -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;

    width: 1.5rem;
    height: 2.375rem;
    border: none;
    border-radius: 6px;
    background: none;
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;

}
    input::-webkit-inner-spin-button, 
    input::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    }
`

export const CartButton = styled.button`
    padding: .5rem .5rem .3rem .5rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-dark']};

    svg {
        color: ${(props) => props.theme['base-card']};
    }
`