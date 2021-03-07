import {
    NodeMoleculeProps,
    BenchmarkSerieProps,
    GetMoleculeProps,
    ResponceChartProps,
} from '../api';
import { MetricIndicatorName } from '../../boot/types';
import { LocalNames } from '../i18';

export interface StoreMoleculeProps {
    tree: NodeMoleculeProps | null;
    loaderTree: false;
    activeEssence: string;
    parentNode: string,
}

export interface StoreBenchmarkProps {
    benchmark: BenchmarkSerieProps[];
    loaderBenchmark: boolean;
}

export interface StoreChartProps {
    chart: ResponceChartProps | null;
    loaderChart: boolean;
}

export type HeaderProps = {
    year: number;
    typeP: string;
    date: GetMoleculeProps;
    metric: MetricIndicatorName;
    isMap: boolean;
    lang: LocalNames;
};

export interface StoreProps {
    header: HeaderProps;
    molecule: StoreMoleculeProps;
    benchmark: StoreBenchmarkProps;
    chart: StoreChartProps;
}
