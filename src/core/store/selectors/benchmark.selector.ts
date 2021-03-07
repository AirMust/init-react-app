import { StoreProps } from '../store.types';

export const benchmarkSelector = (store: StoreProps) => ({
    ...store.benchmark,
});
