export interface Player {
    health: number;
    name: string;
}

export interface RpgState {
    throwingDice: boolean;
    player: Player;
    enemy: Player,
};

export const initialState : RpgState = {
    throwingDice: false,
    player: {
        health: 10,
        name: 'Link',
    },
    enemy: {
        health: 10,
        name: 'Link',
    }
};

export interface Action {
    type: string,
    payload: any
};

export const rpgReducer = (state : RpgState, action: Action) => {
    switch (action.type) {
        case 'damage':
            const { target, value } = action.payload;
            if (target === 'enemy') {
                return {
                    ...state,
                    enemy: {
                        ...state.enemy,
                        health: state.enemy.health - value
                    }
                };
            }
            if (target === 'player') {
                return {
                    ...state,
                    player: {
                        ...state.player,
                        health: state.player.health - value
                    }
                };
            }
            break;
    }
};
