import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { BenchmarkAPI, GetBenchmarkProps } from '../../api';
import { StoreProps } from '../store.types';
import { BENCHMARK } from './action.types';

export const onLoadBenchmark = (payload: boolean) => ({
    type: BENCHMARK.LOADER,
    payload,
});

export const thunkGetBenchmark = (
    data: GetBenchmarkProps,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    dispatch(onLoadBenchmark(true));
    const payload = await BenchmarkAPI.get(data);
    dispatch({ type: BENCHMARK.FETCH, payload });
    dispatch(onLoadBenchmark(false));
};
