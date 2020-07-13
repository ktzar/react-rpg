import * as React from "react";
import { useState } from "react";
import styled from 'styled-components';

const Dice = styled.span`
    font-size: 40px;
    padding: 0 10px;
`;

const NiceButton = styled.button`
    background: #ccc;
    border-radius: 4px;
    padding: 4px;
    cursor: pointer;

    &:hover {
        background: #eee;
    }
`;

interface AttackButtonProps {
    onAttack: (x : {}) => void;
};

const rollDice = () => Math.floor(Math.random() * 5) + 1;

const diceFaces = [ '⚀', '⚁', '⚂', '⚃', '⚄', '⚅' ];

export const AttackButton = ({onAttack} : AttackButtonProps) => {
    const [rolling, setRolling] = useState(false);
    const [rolls, setRolls] = useState([]);
    const [hitValue, setHitValue] = useState(null);

    return (
        <div>
            <NiceButton onClick={() => {
                setRolls([]);
                setHitValue('');
                setRolling(true);

                setTimeout(() => {
                    const rolls = [rollDice(), rollDice(), rollDice(), rollDice()];
                    const totalValue =
                        + rolls[0]
                        + rolls[1]
                        - rolls[2]
                        - rolls[3];

                    setRolls(rolls);
                    setRolling(false);
                    if (totalValue) {
                        setHitValue(totalValue > 0
                            ? `You hit with ${totalValue}`
                            : `The enemy hit with ${-totalValue}`
                        );

                        onAttack({
                            target: totalValue > 0 ? 'enemy' : 'player',
                            value: Math.abs(totalValue)
                        });
                    }
                }, 1000);
            }}>Attack!</NiceButton>
            { hitValue }
            {rolls.length ? <div>
                <Dice>{diceFaces[rolls[0]]}</Dice>
                <Dice>{diceFaces[rolls[1]]}</Dice><br/>
                <Dice>{diceFaces[rolls[2]]}</Dice>
                <Dice>{diceFaces[rolls[3]]}</Dice>
            </div> : null}
            { rolling && 'Rolling...' }
        </div>
    );
};
