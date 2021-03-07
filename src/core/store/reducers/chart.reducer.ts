import { ActionProps, CHART } from '../actions/action.types';
import { StoreChartProps } from '../store.types';

const initialState: StoreChartProps = {
    chart: null,
    loaderChart: false,
};

export const chartReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case CHART.FETCH:
        return { ...state, chart: action.payload };
    case CHART.LOADER:
        return { ...state, loaderChart: action.payload };
    default:
        return state;
    }
};
