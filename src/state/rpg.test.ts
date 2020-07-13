import { rpgReducer, initialState } from './rpg';

describe('Rpg reducer', () => {
    it('can assign damage to the enemy', () => {
        const newState = rpgReducer(initialState, {
            type: 'damage',
            payload: {
                target: 'enemy',
                value: 5
            }
        });
        expect(newState.enemy.health).toEqual(5);
    });
});
