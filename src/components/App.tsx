import * as React from "react";
import { useReducer } from "react";
import { hot } from "react-hot-loader";
import styled from 'styled-components';

import "./../assets/scss/App.scss";

import { initialState, Action, rpgReducer } from '../state/rpg';

import { Character } from "./Character";
import { AttackButton } from './AttackButton';
import { Won, GameOver } from './FinalTitle';

const Layout = styled.div`
display: flex;
`;

const playerImage = require("./../assets/img/hero.png");
const enemyImage = require("./../assets/img/baddie.png");

const App = () => {
    const [rpgState, rpgDispatch] = useReducer(rpgReducer, initialState);

    const gameOver = rpgState.player.health <= 0;
    const gameWon = rpgState.enemy.health <= 0;

    if (gameOver) {
        return <GameOver>Game Over</GameOver>;
    } else if (gameWon) {
        return <Won>You won</Won>;
    }

    return (
        <div className="app">
            <h1>Battle simulator</h1>
            <Layout>
                <Character
                    health={rpgState.player.health}
                    name={rpgState.player.name}
                    avatar={playerImage.default}
                />
                <Character
                    health={rpgState.enemy.health}
                    name="Monster"
                    avatar={enemyImage.default}
                />
            </Layout>
            <AttackButton onAttack={(damage : number) => {
                rpgDispatch({type: 'damage', payload: damage});
            }} />
        </div>
    );
};

declare let module: object;

export default hot(module)(App);
