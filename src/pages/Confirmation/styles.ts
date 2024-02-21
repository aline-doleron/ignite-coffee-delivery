import styled from "styled-components";

export const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 10rem;

    p:first-child {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme['yellow-dark']};
    }

    p:last-of-type {
        font-size: 1.25rem;
        font-family: 'Roboto',sans-serif;
        font-weight: regular;
        color: ${(props) => props.theme['base-subtitle']};
        line-height: 130%;
        margin-top: .5rem;
        margin-bottom: 2.5rem;
    }
`

export const ConfirmationMessages = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 6.375rem;
    justify-content: center;
`


export const ConfirmationResume = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${(props) => props.theme['purple']};
    border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    text-align: center;
    width: 50%;
    gap: 2rem;
`

export const BaseResume = styled.div`
    color: ${(props) => props.theme['base-text']};
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.75rem;
    

    div:first-child {
        padding: .5rem .5rem .3rem .5rem;
        border-radius: 1000px;

    }

    div:last-child {
        display: flex;
    flex-direction: column;
        align-items: flex-start;
    };
    
    span {
        font-size: 1rem;
        font-family: 'Roboto',sans-serif;
        font-weight: regular;
        color: ${(props) => props.theme['base-text']};
        line-height: 130%;  
    }

    svg {
        color: ${(props) => props.theme['background']};
    }
`
export const AddressResume = styled(BaseResume)`
    div:first-child {
        background-color: ${(props) => props.theme['purple']};
    }
`

export const DeliveryTimeResume = styled(BaseResume)`
     div:first-child {
        background-color: ${(props) => props.theme['yellow']};
    }
    
`
export const PaymentMethodResume = styled(BaseResume)`
     div:first-child {
        background-color: ${(props) => props.theme['yellow-dark']};
    }
    
`

export const Highlight = styled.span`
    font-weight: 800;
`