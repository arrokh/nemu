import React from 'react';
import {
    makeStyles,
    createStyles,
    AppBar,
    Typography,
    Toolbar,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import MenuHeaderNavigation from './MenuHeaderNavigation';

const useStyles = makeStyles(() => createStyles({
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    resetLinkStyle: {
        textDecoration: 'none',
        color: 'white'
    },
    resetLinkStyleInMenu: {
        textDecoration: 'none',
        color: 'black'
    },
    title: {
        flexGrow: 1,
    },

}));

export default function HeaderNavigation() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.grow} color="inherit" variant="h6">
                        <NavLink className={classes.resetLinkStyle} to="/">
                            <img alt={"NEMU Logo"} src={"images/logo-nemu-min.png"} style={{ maxHeight: 25, marginRight: 5 }} />
                            <span>NEMU</span>
                        </NavLink>
                    </Typography>
                    <MenuHeaderNavigation />
                </Toolbar>
            </AppBar>
        </div>
    );
}
