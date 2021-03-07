import React, { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from './Routing.config';
import { Home } from '../../pages';

export const Routing: FC = memo(() => {
    const { t } = useTranslation();
    const LOCAL = t('headerApp');

    const routeComponent = useMemo(
        () => Object.values(ROUTES).map((route) => {
            if (route.name !== 'i18_main') {
                return (
                        <Route exact path={route.path} key={route.name}>
                            <h1>{LOCAL[route.name]}</h1>
                        </Route>
                );
            }
            return (
                    <Route exact path={route.path} key={route.path}>
                        <Home />
                    </Route>
            );
        }),
        [],
    );

    return <Switch>{routeComponent}</Switch>;
});
