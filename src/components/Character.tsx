import * as React from "react";
import styled from 'styled-components';

import HealthBar from "./HealthBar";

interface CharacterProps {
    name: string,
    health: number,
    avatar: string,
}

const Name = styled.div`
    float: left;
    width: 100px;
`;

export class Character extends React.Component<CharacterProps, undefined> {
    render() {
        const { name, health, avatar } = this.props;
        return <div>
            <Name>{name}</Name> <HealthBar value={health} />
            <img src={avatar} alt={`Avatar for ${name}`} />
        </div>;
    }
};

