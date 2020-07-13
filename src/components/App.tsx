import * as React from "react";
import { hot } from "react-hot-loader";

const playerImage = require("./../assets/img/hero.png");
const enemyImage = require("./../assets/img/baddie.png");

import "./../assets/scss/App.scss";

import { Character } from "./Character";
import Button from './Button';

class App extends React.Component<{}, undefined> {
    public render() {
        return (
            <div className="app">
                <Character health={80} name="Player" avatar={playerImage.default}/>
                <Button>Attack!</Button>
                <Character health={100} name="Monster" avatar={enemyImage.default}/>
            </div>
        );
    }
}

declare let module: object;

export default hot(module)(App);
