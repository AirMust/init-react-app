import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { ChartAPI, GetChartProps } from '../../api';
import { StoreProps } from '../store.types';
import { CHART } from './action.types';

export const onLoadChart = (payload: boolean) => ({
    type: CHART.LOADER,
    payload,
});

export const thunkGetChart = (
    data: GetChartProps,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    dispatch(onLoadChart(true));
    const payload = await ChartAPI.get(data);
    dispatch({ type: CHART.FETCH, payload });
    dispatch(onLoadChart(false));
};
