import { MetricCollection } from '../../boot/types';
import { BaseAPI } from './base.api';
import { HTTP } from './api';

const moleculeAPIInstance = new HTTP('/tree');

export interface GetMoleculeProps {
    start_date: string;
    end_date: string;
}

export interface NodeMoleculeProps {
    id: string,
    label: string,
    children_count: number,
    children: NodeMoleculeProps[],
    metric: MetricCollection

}

export class MoleculeAPI extends BaseAPI {
    static get<T = NodeMoleculeProps>(
        data: GetMoleculeProps,
    ): Promise<T> {
        return moleculeAPIInstance.get<T>('', { data });
    }
}
