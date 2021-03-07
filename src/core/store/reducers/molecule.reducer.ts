import { MOLECULE, ActionProps } from '../actions/action.types';

import { StoreMoleculeProps } from '../store.types';

const initialState: StoreMoleculeProps = {
    tree: null,
    loaderTree: false,
    activeEssence: '',
    parentNode: '',
};

export const moleculeReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case MOLECULE.FETCH:
        return { ...state, tree: action.payload };
    case MOLECULE.LOADER:
        return { ...state, loaderTree: action.payload };
    case MOLECULE.ACTIVE:
        return { ...state, activeEssence: action.payload };
    case MOLECULE.PARENT:
        return { ...state, parentNode: action.payload };
    default:
        return state;
    }
};
