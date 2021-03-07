import { JssThemeDefault } from 'jss-theme-default';
import React, { FC, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next/';
import { createUseStyles } from 'react-jss';
import { Navbar, Nav } from 'rsuite';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../../routing';

const useStyles = createUseStyles((theme: JssThemeDefault) => ({
    root: {
        padding: theme.spacing * 3,
        height: 'auto',
        color: theme.palette.secondary.main,
        '& b': {
            letterSpacing: 2,
        },
    },
}));

export const HeaderApp: FC = memo(() => {
    const classes = useStyles();
    const { pathname } = useLocation();
    const { t } = useTranslation();
    const LOCAL = t('headerApp');

    const controls = useMemo(
        () => Object.values(ROUTES).map((route) => (route.path !== '/' ? (
                    <Nav.Item
                        key={route.name}
                        href={route.path}
                        active={pathname === route.path}
                    >
                        {LOCAL[route.name]}
                    </Nav.Item>
        ) : null)),
        [],
    );
    return (
        <Navbar appearance="subtle">
            <Navbar.Header className={classes.root}>
                <h6>
                    {LOCAL.i18_title}&nbsp;&nbsp;
                    <b>{LOCAL.i18_name.toUpperCase()}</b>
                </h6>
            </Navbar.Header>
            <Navbar.Body>
                <Nav appearance="subtle" pullRight>
                    {controls}
                </Nav>
            </Navbar.Body>
        </Navbar>
    );
});
