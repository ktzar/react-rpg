import styled from 'styled-components';

// This should be done with dynamic props.
// Adding props in typescript is convoluted... maybe in the future
//
export const Won = styled.div`
    font-size: 80px;
    text-shadow: 2px 2px black, -2px -2px black;
    color: red;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
`;

export const GameOver = styled.div`
    font-size: 80px;
    text-shadow: 2px 2px black, -2px -2px black;
    color: red;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0 auto;
    margin-top: 30px;
    text-align: center;
`;
