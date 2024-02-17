import styled from "styled-components";

export const HeaderContainer = styled.header`

nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 10rem;

    a {
        text-decoration: none;
        font-weight: regular;
        font-size: 0.875rem;
        line-height: 130%;
    }

    
}
`

export const ActionButtons = styled.div`
    display: flex;
    gap: .75rem;

`


export const Cart = styled.button`
    padding: .5rem .5rem .3rem .5rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};
    position: relative;

    svg {
        color: ${(props) => props.theme['yellow-dark']};
    }
`

export const Quantity = styled.div`
    background: ${(props) => props.theme['yellow-dark']};
    height: 1.25rem;
    right: -8px;
    width: 1.25rem;
    border: none;
    border-radius: 1000px;
    position: absolute;
    top: -8px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: .75rem;
    color: ${(props) => props.theme['white']};
`

export const Locale = styled.button`
    display: flex;
    align-items: center;
    width: auto;
    padding: 0.5rem 0.5rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    font-family: 'Roboto', sans-serif;
    gap: 0.25rem;

    svg {
        color: ${(props) => props.theme['purple']};
    }
`
