import React from 'react';
import { makeStyles, createStyles, Grid, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(() => createStyles({
    footer: {
        backgroundColor: '#3f51b5',
        padding: 15,
        bottom: 0,
        flexGrow: 1,

    },
    container: {
        maxWidth: 1000,
        margin: '0 auto',
    }
}));

export default function Footer() {
    const classes = useStyles();

    if (window.location.pathname.split('/')[1] === 'course')
        return (null);

    return (
        <>
            <footer className={classes.footer}>
                <Grid container className={classes.container} alignContent="center" justify="center" spacing={8}>
                    <Grid item xs={12} md={8}>
                        <Typography style={{ color: 'white' }} variant="h6" align="left" gutterBottom>
                            About NEMU
                        </Typography>
                        <Typography style={{ color: 'white' }} variant="caption" align="left" color="textSecondary">
                            NEMU is research aims to design and improve Visual Programming Environment as Learning
                            Support System on basic programming subjects. This website is a product from research with
                            the title “NEMU: Design and Improvement of Visual Programming Environment as Learning
                            Support System on Basic Programming Subjects” by Noor Octavian Anwar, Triyanna
                            Widiyaningtyas, Utomo Pujianto, from Universitas Negeri Malang (State University of Malang)
                            - Indonesia, and Hiroshi Okumura from Saga University, Japan.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Typography style={{ color: 'white' }} variant="h6" align="left" gutterBottom>
                            Pages
                        </Typography>
                        <Typography style={{ color: 'white' }} variant="caption" align="left" color="textSecondary">
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/">
                                Home
                            </NavLink>
                            <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/playground">
                                Playground
                            </NavLink>
                            <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/manual-book">
                                Manual Book
                            </NavLink>
                            <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about">
                                About
                            </NavLink>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center">
                    <Grid item>
                        <Typography variant="caption" align="center">
                            <a style={{ color: 'white', textDecoration: 'none' }} target="_blank"
                                rel="noopener noreferrer" href="https://arrokh.tumblr.com/me/">
                                NEMU © 2018-2020. All right reserved.
                            </a>
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
        </>
    );
}