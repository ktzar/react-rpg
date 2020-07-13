import * as React from "react";
import styled from 'styled-components';

interface HealthBarProps {
    value: number
}

const pixelToHealthRadio = 2;

const Wrapper = styled.div`
    width: ${() => pixelToHealthRadio * 100}px;
    height: 10px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    border: 1px solid black;
    box-shadow: 0 5px 10px rgba(0,0,0,0.3);

`;

const Bar = styled.div`
    width: ${props => props.value * 2}px;
    display: flex;
    background: linear-gradient(270deg, #ff1900, #f9bd00);
    background-size: 400% 400%;

    animation: pulsating 1s ease infinite;

    @keyframes pulsating {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
`;

const HealthBar = ({value} : HealthBarProps) => {
    return (
        <Wrapper>
            <Bar value={value} />
        </Wrapper>
    );
};

export default HealthBar;


