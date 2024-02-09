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
    padding: .5rem .5rem;
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-light']};

    svg {
        color: ${(props) => props.theme['yellow-dark']};
    }
`



export const Locale = styled.button`
    display: flex;
    align-items: center;
    width: auto;
    padding: 0.6rem 0.6rem;
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
