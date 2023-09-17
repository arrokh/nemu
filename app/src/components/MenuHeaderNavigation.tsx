import React from 'react';
import { makeStyles, createStyles, IconButton, Icon, Button, Menu, MenuItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => createStyles({
    resetLinkStyleApppBar: {
        textDecoration: 'none',
        color: 'white'
    },
    resetLinkStyleMenu: {
        textDecoration: 'none',
        color: 'black'
    }
}));

export default function MenuHeaderNavigation() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <NavLink className={classes.resetLinkStyleApppBar} to="/playground">
                <Button color="inherit">Playground</Button>
            </NavLink>
            <IconButton
                aria-owns={Boolean(anchorEl) ? "menu-appbar" : undefined}
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
            >
                <Icon>account_circle</Icon>
            </IconButton>

            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <NavLink className={classes.resetLinkStyleMenu} to="/">
                    <MenuItem onClick={handleClose}>
                        Home
                        </MenuItem>
                </NavLink>
                <NavLink className={classes.resetLinkStyleMenu} to="/manual-book">
                    <MenuItem onClick={handleClose}>
                        Manual Book
                        </MenuItem>
                </NavLink>
                <NavLink className={classes.resetLinkStyleMenu} to="/about">
                    <MenuItem onClick={handleClose}>
                        About
                        </MenuItem>
                </NavLink>
            </Menu>
        </>
    );
}