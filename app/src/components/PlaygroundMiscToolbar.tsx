import React from 'react';
import { makeStyles, createStyles, Grid } from '@material-ui/core';
import MiscShareButton from './playground-misc-toolbar/MiscShareButton';
import MiscDownloadButton from './playground-misc-toolbar/MiscDownloadButton';
import MiscCompileButton from './playground-misc-toolbar/MiscCompileButton';

const useStyles = makeStyles(() => createStyles({
    root: {
        marginTop: '5px',
        height: '5vh',
        display: 'fixed'
    }
}));

interface PlaygroundMiscToolbarProps {
    code?: string,
}

const PlaygroundMiscToolbar: React.FC<PlaygroundMiscToolbarProps> = ({ code }) => {
    const classes = useStyles();

    return (
        <>
            <Grid container className={classes.root} alignItems={"center"} justify={"space-around"}>
                <Grid item>
                    <MiscShareButton code={code} />
                </Grid>
                <Grid item>
                    <MiscDownloadButton code={code} />
                </Grid>
                <Grid item>
                    <MiscCompileButton code={code} />
                </Grid>
            </Grid>
        </>
    );
};

export default PlaygroundMiscToolbar;