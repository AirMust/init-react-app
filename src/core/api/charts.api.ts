import { BaseAPI } from './base.api';
import { HTTP } from './api';
import { GetBenchmarkProps } from './benchmark.api';

const ChartAPIInstance = new HTTP('/graph');

export interface GetChartProps extends GetBenchmarkProps {
    agg: string;
}

export type ResponceChartSeriesName =
    | 'base_line'
    | 'bl_diff'
    | 'consumption'
    | 'model'
    | 'model_diff';

export type ResponceChartSeriesProps = Record<ResponceChartSeriesName, [[]] | []>;

export type ResponceChartProps = ResponceChartSeriesProps & { metrics: string };

export class ChartAPI extends BaseAPI {
    static get<T = ResponceChartProps[]>(data: GetChartProps): Promise<T> {
        return ChartAPIInstance.get<T>('', { data });
    }
}
