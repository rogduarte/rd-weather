import { state } from '@angular/animations';
import { createReducer, Action, on } from '@ngrx/store'

import * as fromHomeActions from './home.actions';

export interface HomeState {
    text: string;
    text2: string;

}

export const homeinitialState: HomeState = {
    text: 'Caxias do Sul',
    text2: 'Porto Alegre'

}

const reducer = createReducer(
    homeinitialState,
    on(fromHomeActions.changeText, (state, { text }) => ({
        ...state,
        text,
    })),
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
    return reducer(state, action);
}
