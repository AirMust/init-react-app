import { combineReducers } from 'redux';
import { headerReducer } from './header.reducer';
import { moleculeReducer } from './molecule.reducer';
import { benchmarkReducer } from './benchmark.reducer';
import { chartReducer } from './chart.reducer';

export const rootReducer = combineReducers({
    header: headerReducer,
    molecule: moleculeReducer,
    benchmark: benchmarkReducer,
    chart: chartReducer,
});
