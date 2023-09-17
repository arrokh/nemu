import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
    Icon,
    createStyles,
    makeStyles,
    Theme
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import Footer from "../components/Footer";
import 'intro.js/introjs.css';
const { Steps } = require('intro.js-react');

const useStyles = makeStyles((theme: Theme) => createStyles({
    icon: {
        fontSize: '100px',
        margin: 'auto',
        color: '#3f51b5'
    },
    heroUnit: {
        backgroundColor: "transparent",
        margin: 20
    },
    cardContainer: {
        maxWidth: 1000,
        margin: '0 auto',
    },
    heroContent: {
        maxWidth: 600,
        margin: '0 auto',
        // padding: `${theme.spacing(2)}px 0 ${theme.spacing(6)}px`,
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        padding: `${theme.spacing(8)}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'transparent',
        boxShadow: 'none'
    },
    cardContent: {
        flexGrow: 1,
    },
    resetLinkStyle: {
        textDecoration: 'none',
        color: 'white'
    }
}));

const dataCards = [{
    id: 1,
    icon: "school",
    title: "Computer-Assisted Learning",
    content: "NEMU is a computer-assisted learning medium as Learning Support System to help students or novice programmer practicing their sense and knowledge about algorithm visually."
}, {
    id: 2,
    icon: "whatshot",
    title: "Learning Basic Programming",
    content: "Understanding the basic programming without having to be preoccupied with the operating procedures, instructions, and grammar rules that exist in the programming language with support by Visual Programming Language."
}, {
    id: 3,
    icon: "developer_mode",
    title: "Visual Programming Environment",
    content: "Students will be presented graphical blocks of representations of programming code concepts such as variables, logical expressions, looping, branching and so on, using the interactive Blockly library from Google that can be compiled online."
}];

const steps = [
    {
        element: '.welcome-2',
        intro: 'Tekan tombol ini untuk melihat Buku Panduan :)',
    },
    {
        element: '.welcome-1',
        intro: 'Tombol ini akan membawa kamu ke layar Playground :)',
    },
];

export default function Welcome() {
    const classes = useStyles();
    const [stepsEnabled, setStepsEnabled] = useState(false);

    // Check is localStorage storing 'nemu-new' item.
    // If yes, set any value of item then show Steps.
    // Later, if user open this page again, Steps will not
    // be shown.
    useEffect(() => {
        const isNewUser = localStorage.getItem("nemu-new");
        if (isNewUser === null) {
            localStorage.setItem("nemu-new", "false");
            setStepsEnabled(true);
        }
        else
            setStepsEnabled(false);
    }, []);

    const onExit = () => {
        setStepsEnabled(false);
    };

    return (
        <>
            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={0}
                onExit={onExit}
            />

            <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" gutterBottom>
                        <b style={{ color: '#3f51b5' }}>NEMU</b>
                    </Typography>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Design and Improvement of Visual Programming Environment as Learning Support System on Basic
                        Programming Subjects
                    </Typography>
                    <div className={classes.heroButtons}>
                        <Grid container spacing={8} justify="center">
                            <Grid item>
                                <NavLink to={"/playground"} className={classes.resetLinkStyle}>
                                    <Button className="welcome-1" variant="contained" color="primary">
                                        Try it
                                    </Button>
                                </NavLink>
                            </Grid>
                            <Grid item>
                                <NavLink to="/manual-book" className={classes.resetLinkStyle}>
                                    <Button className="welcome-2" variant="outlined" color="primary">
                                        Learn more
                                    </Button>
                                </NavLink>
                            </Grid>
                        </Grid>
                        <br />
                        <br />
                    </div>
                </div>
                <Grid container justify="center" alignItems={"center"}>
                    <Typography variant="h6" align="center" color="textSecondary" paragraph>
                        Supported by:
                    </Typography>
                    <Grid container spacing={8} justify="center" alignItems={"center"}>
                        {/* <Grid item xs={6} sm={1} >
                                <img
                                    onClick={() => window.open("http://elektro.um.ac.id", "_blank")}
                                    alt="Logo heart" style={{ maxWidth: "30px" }} src={"images/welcome/love-min.png"} />
                            </Grid> */}
                        <Grid item xs={4} sm={3} >
                            <img onClick={() => window.open("https://um.ac.id/", "_blank")}
                                alt="Logo Universitas Negeri Malang" style={{ maxWidth: "200px" }}
                                src={"images/welcome/logo-universitas-negeri-malang-min.png"} />
                        </Grid>
                        <Grid item xs={4} sm={3} >
                            <img
                                onClick={() => window.open("http://www.saga-u.ac.jp/", "_blank")}
                                alt="Logo Saga University" style={{ maxWidth: "200px", marginLeft: "-10px" }}
                                src={"images/welcome/logo-saga-university-min.png"} />
                        </Grid>
                        <Grid item xs={4} sm={3} >
                            <img
                                onClick={() => window.open("https://www.isdb.org/", "_blank")}
                                alt="Logo IDB" style={{ maxWidth: "200px", marginLeft: "-10px" }}
                                src={"images/welcome/logo-isdb.png"} />
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <br />
                <hr style={{ maxWidth: "80%" }} />
                <br />
                <div className={classes.cardContainer}>
                    <Grid container spacing={8}>
                        {dataCards.map(data => (
                            <Grid item key={data.id} xs={6} sm={4}>
                                <Card className={classes.card}>
                                    <Icon className={classes.icon}>{data.icon}</Icon>
                                    <CardContent className={classes.cardContent}>
                                        <Typography align="center" gutterBottom variant="h5" component="h2">
                                            {data.title}
                                        </Typography>
                                        <Typography align="justify">
                                            {data.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>

            <Footer />

        </>
    );
}

// export default withStyles(styles)(Welcome);