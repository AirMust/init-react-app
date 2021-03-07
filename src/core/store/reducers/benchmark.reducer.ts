import { ActionProps, BENCHMARK } from '../actions/action.types';
import { StoreBenchmarkProps } from '../store.types';

const initialState: StoreBenchmarkProps = {
    benchmark: [],
    loaderBenchmark: false,
};

export const benchmarkReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case BENCHMARK.FETCH:
        return { ...state, benchmark: action.payload };
    case BENCHMARK.LOADER:
        return { ...state, loaderBenchmark: action.payload };
    default:
        return state;
    }
};
