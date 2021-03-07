import moment, { unitOfTime } from 'moment';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { MetricIndicatorName } from '../../../boot/types';
import { GetMoleculeProps } from '../../api';
import { StoreProps } from '../store.types';
import { thunkGetMolecule } from './molecule.action';
import { store } from '../store';
import { HEADER } from './action.types';

export const changeDatePeriod = (
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    const { year, typeP } = store.getState().header;

    const getDatePeriod = (): GetMoleculeProps => {
        const maskFmt = 'YYYY-MM-DD';
        const startYear = moment()
            .year(year)
            .startOf('year');
        let start = startYear.format(maskFmt);
        let finish = moment().format(maskFmt);
        ['month', 'Q'].forEach((agg: string) => {
            if (typeP.indexOf(agg) === 0) {
                const countM = typeP.substr(agg.length + 1);
                start = startYear
                    .add(countM, agg)
                    .startOf(agg as unitOfTime.StartOf)
                    .format(maskFmt);
                finish = startYear.endOf(agg as unitOfTime.StartOf).format(maskFmt);
            }
        });
        return {
            start_date: start,
            end_date: finish,
        };
    };

    const data = getDatePeriod();
    dispatch({ type: HEADER.CHANGE_PERIOD, payload: data });
    dispatch(thunkGetMolecule(data));
};

export const changeYear = (
    payload: number,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    dispatch({ type: HEADER.CHANGE_YEAR, payload });
    dispatch(changeDatePeriod());
};

export const changeType = (
    payload: string,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    dispatch({ type: HEADER.CHANGE_TYPE, payload });
    dispatch(changeDatePeriod());
};

export const changeMetric = (
    payload: MetricIndicatorName,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    dispatch({ type: HEADER.CHANGE_METRIC, payload });
};

export const changeMap = (payload: boolean) => ({ type: HEADER.CHANGE_MAP, payload });
