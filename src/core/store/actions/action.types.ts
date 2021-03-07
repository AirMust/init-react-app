export interface ActionProps<T = any> {
    type: string
    payload?: T
}

export enum HEADER {
    CHANGE_YEAR = 'CHANGE_YEAR',
    CHANGE_PERIOD = 'CHANGE_PERIOD',
    CHANGE_TYPE = 'CHANGE_TYPE',
    CHANGE_METRIC = 'CHANGE_METRIC',
    CHANGE_MAP = 'CHANGE_MAP',
}

export enum CHART {
    FETCH = 'CHART_FETCH',
    LOADER = 'CHART_LOADER',
}

export enum MOLECULE {
    FETCH = 'MOLECULE_FETCH',
    LOADER = 'MOLECULE_LOADER',
    ACTIVE = 'MOLECULE_ACTIVE',
    PARENT = 'MOLECULE_PARENT',
}

export enum BENCHMARK {
    FETCH = 'BENCHMARK_FETCH',
    LOADER = 'BENCHMARK_LOADER',
}
