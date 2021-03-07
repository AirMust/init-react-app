import React, { FC, memo } from 'react';
import { createUseStyles } from 'react-jss';
import { JssThemeDefault } from 'jss-theme-default';
import { Right, Left, Center } from './components';

const useStyles = createUseStyles((theme: JssThemeDefault) => ({
    root: {
        overflow: 'hidden',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '25% 50% 25%',
        padding: theme.spacing,
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '100%',
            overflow: 'overlay',
            '& > div:nth-child(-n+3)': {
                minHeight: 500,
            },
        },
        '& > div:nth-child(2)': {
            display: 'grid',
            margin: theme.spacing,
            boxShadow: theme.shadows[3],
            borderRadius: theme.shape.borderRadius,
            backgroundColor: theme.palette.background.default,
            overflow: 'hidden',
        },
    },
}));

export const Home: FC = memo(() => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Left />
            <Center />
            <Right />
        </div>
    );
});
