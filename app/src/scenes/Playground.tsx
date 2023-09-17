import React, { useState, useEffect } from 'react';
import NemuBlockly from '../components/NemuBlockly';
import { Grid, Typography, makeStyles, createStyles } from '@material-ui/core';
import withWidth, { isWidthUp, WithWidth } from '@material-ui/core/withWidth';
import 'intro.js/introjs.css';
import PlaygroundMiscTab from '../components/PlaygroundMiscTab';
import PlaygroundMiscToolbar from '../components/PlaygroundMiscToolbar';
const { Steps } = require('intro.js-react');

const useStyles = makeStyles(() => createStyles({
    fotter: {
        backgroundColor: "#3f51b5",
        display: ' flex',
        height: ' 55px',
        flexDirection: 'column',
        marginTop: 5,
    }
}));

const steps = [
    {
        element: '.welcome-1',
        intro: 'Susun Algoritma mu secara visual disini',
    },
    {
        element: '.welcome-2',
        intro: 'Perhatikan hasil konversi kode program dan kompilasi kode secara online disini',
    },
    {
        element: '.welcome-3',
        intro: 'Melalui tombol-tombol dibawah ini, kamu bisa membagikannya ke teman mu, meng-unduh kode program mu, atau melakukan kompilasi online',
    },
];

const Playground: React.FC<WithWidth> = ({ width }) => {
    const classes = useStyles();
    const [code, setCode] = useState<string>('');
    const [stepsEnabled, setStepsEnabled] = useState<boolean>(false);


    // Check is localStorage storing 'nemu-new' item.
    // If yes, set any value of item then show Steps.
    // Later, if user open this page again, Steps will not
    // be shown.
    useEffect(() => {
        const isNewUser = localStorage.getItem("nemu-new-playground");
        if (isNewUser === null) {
            localStorage.setItem("nemu-new-playground", "true");
            setStepsEnabled(true);
        }
        else
            setStepsEnabled(false);
    }, []);

    const onCodeUpdatedHandler = (codeData: string) => {
        setCode(codeData);
    };

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

            <Grid container >
                <Grid className="welcome-1" item xs={12} md={7} style={{ height: "86.8vh" }}>
                    <NemuBlockly onCodeUpdated={onCodeUpdatedHandler} />
                </Grid>
                <Grid item xs={12} md={5} style={{ height: "81vh" }}>
                    <Grid container justify={"center"}
                        alignItems={"center"} alignContent={"center"}>
                        <Grid className="welcome-2" item xs={12} style={{ height: "100%" }}>
                            <PlaygroundMiscTab code={code} />
                        </Grid>
                        <Grid className="welcome-3" item xs={11} style={{ left: -10 }}>
                            <PlaygroundMiscToolbar code={code} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className={classes.fotter} alignItems={"center"} justify={"center"}>
                {
                    isWidthUp('md', width) ?
                        <Typography variant="caption" align={"center"} style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <a style={{ color: 'white', textDecoration: 'none' }} target="_blank"
                                rel="noopener noreferrer" href="https://arrokh.tumblr.com/me/">
                                NEMU © 2018-2020. All right reserved.
                                </a>
                        </Typography>
                        : null
                }
            </Grid>
        </>
    );
}

export default withWidth()(Playground);