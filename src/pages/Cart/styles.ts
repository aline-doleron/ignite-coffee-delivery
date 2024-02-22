import styled from "styled-components";

export const CartContainer = styled.main`
    padding: 2rem 10rem;
    display: flex;
    gap: 2rem;
`

export const BaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .75rem;

    h1 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: bold;
        line-height: 130%;
    }
    
`

export const CardBase = styled.section`
    background: ${(props) => props.theme['base-card']};
    padding: 2.5rem;
    border-radius: 6px;

    header {
        display: flex;
        flex-direction: row;
        gap: .5rem;

        section {
            flex-direction: column;
        }
    }

    h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
    }

    h2 {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme['base-subtitle']};
    }
`


export const Address = styled(CardBase)`
    svg {
        color: ${(props) => props.theme['yellow-dark']};
    }

    form {
        display: flex;
        flex-direction: column;

        margin-top: 2rem;
    }
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: row;
    gap: .75rem;
`


export const Input = styled.input`
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    color: ${(props) => props.theme['base-label']};
    height: 2.625rem;
    margin-bottom: 1rem;
    padding: .75rem;
    
    &:active, &:focus-visible {
        outline: 1px solid ${(props) => props.theme['yellow-dark']};
    }

`

export const Div60 = styled.div`
    position: relative;
    width: 60%;
    
    input {
        background: ${(props) => props.theme['base-input']};
        border: 1px solid ${(props) => props.theme['base-button']};
        border-radius: 4px;
        color: ${(props) => props.theme['base-label']};
        height: 2.625rem;
        margin-bottom: 1rem;
        padding: .75rem;
        width: 100%;
    }

    span {
        position: absolute;
        top: 40%;
        right: .75rem;
        transform: translateY(-50%);
        color: #888;
        font-size: .75rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 130%;
        font-style: italic;
    }
    
`

export const Input10 = styled(Input)`
    width: 10%;
`

export const Input40 = styled(Input)`
    width: 40%;
`

export const Input50 = styled(Input)`
    width: 50%;
`

export const Input60 = styled(Input)`
    width: 60%;
`

export const Input100 = styled(Input)`
    width: 100%;
`


export const Payment = styled(CardBase)`
    padding: 2.5rem;
    background: ${(props) => props.theme['base-card']};
    border-radius: 6px;

    svg {
        color: ${(props) => props.theme['purple']};
    }
`

export const PaymentMethods = styled.div`
    display: flex;
    justify-content: space-between;
    gap: .75rem;
    margin-top: 2rem;

    button {
        align-items: flex-end;
        color: ${(props) => props.theme['base-text']};
        background: ${(props) => props.theme['base-button']};
        border-radius: 6px;
        border: 1px solid transparent;
        display: flex;
        font-size: .75rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        gap: .75rem;
        line-height: 130%;
        padding: 1rem;
        text-align: center;
        text-transform: uppercase;
        width: 100%;

        &:hover {
            background: ${(props) => props.theme['base-hover']};
            color: ${(props) => props.theme['base-subtitle']};
        }

        &[data-active="true"] {
            border: 1px solid ${(props) => props.theme['purple']};
            background: ${(props) => props.theme['purple-light']};
        }
    }

    
`

export const Coffees = styled.section`
    background-color: ${(props) => props.theme['base-card']};
    padding: 2.75rem;   
    width: 28rem;  
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
        font-size: 1rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-subtitle']};
    }

    svg {
        color: ${(props) => props.theme['purple']};
    }
`

export const CoffeePrice = styled.section`
        font-size: 1rem;
        font-weight: bold;
        color: ${(props) => props.theme['base-text']};

`

export const RemoveButton = styled.button`
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: none;
    display: flex;
    font-size: .75rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    gap: 0.25rem;
    line-height: 130%;
    text-align: center;
    text-transform: uppercase;
    padding: 0 0.5rem;

`

export const Coffee = styled.div`
    display: flex;
    flex-direction: row;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};

    img {
        width: 4rem;
        height: 4rem;
    }

`
export const CoffeeResume = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

`

export const Actions = styled.div`
    display: flex;
    flex-direction: row;
    height: 2rem;
    margin-top: .5rem;

`

export const Quantity = styled.div`
    display: flex;
    background-color: ${(props) => props.theme['base-button']};
    margin-right: 0.5rem;
    border-radius: 6px;

    button:first-child {
        padding: .5rem .25rem .5rem 0.5625rem;
        border: none;
        border-radius: 6px;
        color:  ${(props) => props.theme['purple']};
        background: none;
    }

    button:last-child {
        padding: .5rem 0.5625rem .5rem .25rem;
        border: none;
        border-radius: 6px;
        color:  ${(props) => props.theme['purple']};
        background: none;
    }

    input {
    -webkit-appearance: textfield;
     -moz-appearance: textfield;
          appearance: textfield;

    width: 1.25rem;
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

export const Resume = styled.div`
    display: flex;
    flex-direction: column;
`

export const ResumeBase = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
        font-size: 0.875rem;
        font-family: 'Roboto',sans-serif;
        font-weight: 400;
        color:  ${(props) => props.theme['base-text']};
        margin-bottom: 0.75rem;
    }

    span:last-child {
        font-size: 1rem;
    }
`


export const TotalItems = styled(ResumeBase)`
    

`

export const DeliveryTax = styled(ResumeBase)`
   

`

export const Total = styled(ResumeBase)`
    span {
        font-size: 1.25rem;
        font-weight: bold;
        line-height: 130%;
        color:  ${(props) => props.theme['base-text']};
        margin-bottom: 0.75rem;
    }

`

export const Checkout = styled.button`
    background:  ${(props) => props.theme['yellow']};
    color:  ${(props) => props.theme['white']};
    padding: 0.75rem;
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-family: 'Roboto',sans-serif;
    font-weight: bold;
    line-height: 160%;

    &:hover {
        cursor: pointer;
        background:  ${(props) => props.theme['yellow-dark']};
    }
`