import React, { FC, memo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HeaderApp } from './core/components';
import { Routing } from './core/routing/Routing';
import { store } from './core/store';

export const App: FC = memo(() => (
        <Provider store={store}>
            <Router>
                <HeaderApp />
                <Routing />
            </Router>
        </Provider>
    ));
