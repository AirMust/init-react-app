import moment from 'moment';
import { HEADER, ActionProps } from '../actions/action.types';
import { HeaderProps } from '../store.types';

const initialState: HeaderProps = {
    year: moment().get('year'),
    typeP: 'year',
    date: {
        start_date: '',
        end_date: '',
    },
    metric: 'price',
    isMap: false,
    lang: 'ru',
};

export const headerReducer = (state = initialState, action: ActionProps) => {
    switch (action.type) {
    case HEADER.CHANGE_YEAR:
        return { ...state, year: action.payload };
    case HEADER.CHANGE_PERIOD:
        return { ...state, date: action.payload };
    case HEADER.CHANGE_TYPE:
        return { ...state, typeP: action.payload };
    case HEADER.CHANGE_METRIC:
        return { ...state, metric: action.payload };
    case HEADER.CHANGE_MAP:
        return { ...state, isMap: action.payload };
    default:
        return state;
    }
};
