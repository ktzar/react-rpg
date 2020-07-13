import * as React from "react";
import styled from 'styled-components';

import HealthBar from "./HealthBar";

interface CharacterProps {
    name: string;
    health: number;
    avatar: string;
}

const Name = styled.div`
    float: left;
    width: 100px;
    margin-top:50px;
`;

export const Character = ({name, health, avatar}: CharacterProps) =>  {
    return <div>
        <Name>{name}</Name> <HealthBar value={health} />
        <img height="75px" src={avatar} alt={`Avatar for ${name}`} />
    </div>;
};
