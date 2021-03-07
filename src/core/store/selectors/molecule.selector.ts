import { StoreProps } from '../store.types';

export const moleculeSelector = (store: StoreProps) => ({
    ...store.molecule,
});
