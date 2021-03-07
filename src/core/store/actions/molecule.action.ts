import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import {
    MoleculeAPI,
    GetMoleculeProps,
    // GetChartProps,
    NodeMoleculeProps,
} from '../../api';
import { StoreProps } from '../store.types';
// import { thunkGetChart } from './chart.actions';
// import { store } from '../store';
import { MOLECULE } from './action.types';
import { store } from '../store';

export const onLoadMolecule = (payload: boolean) => ({
    type: MOLECULE.LOADER,
    payload,
});

export const activeNode = (
    payload: string,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    // const { date } = store.getState().header;
    const { activeEssence } = store.getState().molecule;
    if (activeEssence === payload) return;
    console.log(activeEssence, payload);
    dispatch({ type: MOLECULE.ACTIVE, payload });
    // const nodeId = payload.replace('_root', '');
    // const benchmark: GetChartProps = {
    //     agg: 'D',
    //     node_id: nodeId,
    //     ...date,
    // };
    // dispatch(thunkGetChart(benchmark));
};

export const setParentNode = (
    payload: string,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    const { parentNode } = store.getState().molecule;

    if (parentNode === payload) return;
    dispatch({ type: MOLECULE.PARENT, payload });
    dispatch(activeNode(payload));
};

export const setMolecule = (payload: NodeMoleculeProps) => ({
    type: MOLECULE.FETCH,
    payload,
});

export const thunkGetMolecule = (
    data: GetMoleculeProps,
): ThunkAction<void, StoreProps, unknown, Action<string>> => async (
    dispatch,
) => {
    dispatch(onLoadMolecule(true));
    const payload = await MoleculeAPI.get(data);
    dispatch(activeNode(payload.id));
    dispatch(setMolecule(payload));
    dispatch(onLoadMolecule(false));
};

function getParentTree(
    tree: NodeMoleculeProps,
    id: string,
): string | undefined {
    function isIncludeNode(child: NodeMoleculeProps[]) {
        if (child.find((obj) => obj.id === id)) {
            return true;
        }
        return false;
    }
    if (isIncludeNode(tree.children)) {
        return tree.id;
    }
    return tree.children.find((obj) => getParentTree(obj, id))?.id;
}

export const goUpLevel = (): ThunkAction<
void,
StoreProps,
unknown,
Action<string>
> => (dispatch) => {
    const { tree, parentNode } = store.getState().molecule;

    const parent = getParentTree(tree, parentNode);
    if (parent && parent !== parentNode) dispatch(setParentNode(parent));
};
