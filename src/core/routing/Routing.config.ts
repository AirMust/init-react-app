import { NamePages } from '../components/HeaderApp/HeaderApp.local';

interface RouteValueProps {
    path: string;
    name: NamePages;
}

interface RoutesProps {
    [key: string]: RouteValueProps;
}

export const ROUTES: RoutesProps = {
    LANDING: {
        path: '/',
        name: 'i18_main',
    },
    HOME: {
        path: '/home',
        name: 'i18_main',
    },
    ANALYTICS: {
        path: '/analytics',
        name: 'i18_analytics',
    },
    ENERGY_CONSUMPTION: {
        path: '/energy_consumption',
        name: 'i18_energy_consumption',
    },
    LOADS: {
        path: '/loads',
        name: 'i18_loads',
    },
    RELIABILITY: {
        path: '/reloability',
        name: 'i18_reliability',
    },
    PROCESSES: {
        path: '/processes',
        name: 'i18_processes',
    },
    COST: {
        path: '/cost',
        name: 'i18_cost',
    },
    MICROGRID: {
        path: '/microgrid',
        name: 'i18_microgrid',
    },
};
