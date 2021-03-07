import { StoreProps } from '../store.types';

export const headerSelector = (store: StoreProps) => ({
    ...store.header,
});
