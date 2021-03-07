import { StoreProps } from '../store.types';

export const chartSelector = (store: StoreProps) => ({
    ...store.chart,
});
