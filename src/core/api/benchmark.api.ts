import { BaseAPI } from './base.api';
import { HTTP } from './api';
import { MetricCollection } from '../../boot/types';
import { GetMoleculeProps } from './molecule.api';

const benchmarkAPIInstance = new HTTP('/bench');

export interface GetBenchmarkProps extends GetMoleculeProps {
    node_id: string
}

export interface BenchmarkSerieProps {
    id: string,
    coords: number[],
    label: string,
    metric: MetricCollection
}

export class BenchmarkAPI extends BaseAPI {
    static get<T = BenchmarkSerieProps[]>(
        data: GetBenchmarkProps,
    ): Promise<T> {
        return benchmarkAPIInstance.get<T>('', { data });
    }
}
