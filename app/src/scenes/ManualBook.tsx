import React, { useState, useEffect } from 'react';
import {
    makeStyles,
    createStyles,
    Theme,
    Grid,
    Typography,
    Button,
    Icon,
    CircularProgress
} from '@material-ui/core';
import 'intro.js/introjs.css';
const { Steps } = require('intro.js-react');

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        height: "100%",
        width: "100%",
        margin: 0,
        padding: 0,
    },
    button: {
        marginRight: theme.spacing(0.7),
        marginLeft: theme.spacing(0.7),

    },
    iconSmall: {
        fontSize: 20,
    },
    iframe: {
        position: "fixed",
        top: 185,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%"
    }
}));

const steps = [
    {
        element: '.lang-en',
        intro: 'Klik tombol ini untuk buku panduan berbahasa Inggris',
    },
    {
        element: '.lang-id',
        intro: 'Klik tombol ini untuk buku panduan berbahasa Indonesia',
    },
    {
        element: '.lang-download',
        intro: 'Klik tombol ini meng-unduh buku panduan',
    },
];

const links = {
    en: "1grk0l4S8fpOqt6sMzm23EQLNJHjUOpBV",
    id: "1a2yZiHmieI_lTlNR7xEOztXMBf5FzcJs"
};

export default function ManualBook() {
    const classes = useStyles();
    const [stepsEnabled, setStepsEnabled] = useState(false);
    const [selectedLang, setSelectedLang] = useState("");
    const [tempSelectedLang, setTempSelectedLang] = useState("");

    // Check is localStorage storing 'nemu-new' item.
    // If yes, set any value of item then show Steps.
    // Later, if user open this page again, Steps will not
    // be shown.
    useEffect(() => {
        const isNewUser = localStorage.getItem("nemu-new-manual-book");
        if (isNewUser === null) {
            localStorage.setItem("nemu-new-manual-book", "true");
            setStepsEnabled(true);
        }
        else
            setStepsEnabled(false);
    }, []);

    // Initializing default language of manual book
    // to be opened.
    useEffect(() => {
        clickHandler("en"); // eslint-disable-next-line
    }, []);


    // Ignore handler if current language is equal to selected langunge.
    // If not, update value of current language to selected language.
    const clickHandler = (selectLanguage: string) => {
        if (tempSelectedLang === selectLanguage)
            return;

        const link = selectLanguage === "en" ? links.en : links.id;

        setSelectedLang("https://docs.google.com/viewer?srcid=" + link + "&pid=explorer&efh=false&a=v&chrome=false&embedded=true");
        setTempSelectedLang(selectLanguage);
    };

    const onExit = () => {
        setStepsEnabled(false);
    }

    return (
        <>
            <Steps
                enabled={stepsEnabled}
                steps={steps}
                initialStep={0}
                onExit={onExit}
            />

            <br />
            <div className={classes.container}>
                <Grid container alignItems={"center"} justify={"center"}>
                    <Grid item>
                        <Typography align={"center"} gutterBottom variant="h4" component="h2">
                            <b style={{ color: '#3f51b5' }}>Manual Book</b>
                        </Typography>
                    </Grid>
                    <Grid container alignItems={"center"} justify={"center"}>
                        <Grid item>
                            <Button
                                onClick={() => clickHandler("en")} variant="outlined"
                                color="primary"
                                className={[classes.button, "lang-en"].join(' ')}
                            >
                                English
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => clickHandler("id")} variant="outlined"
                                color="primary"
                                className={[classes.button, "lang-id"].join(' ')}
                            >
                                Bahasa Indonesia
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => window.open("https://drive.google.com/open?id=1e244uyq-cKvPqX36JBYIfowVohFzd31d", "_blank")}
                                variant="contained" color="primary"
                                className={[classes.button, "lang-download"].join(' ')}
                            >
                                <Icon>save_alt</Icon>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify={"center"}
                    alignItems="center"
                    style={{ minHeight: '60vh' }}>
                    <Grid container spacing={0} justify={"center"} alignItems="center" direction={"column"}>
                        <CircularProgress thickness={4} size={50}  />
                        <br /> <br />
                        <Typography variant={"h4"}>
                            <span role="img" aria-label="Face With Monocle">🧐</span>
                            Taking it for you
                            <span role="img" aria-label="Face With Monocle">🧐</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.iframe}>
                            <iframe title="manual-book-content" src={selectedLang} width={"100%"} height={"100%"} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}