import React, { useState, useEffect } from 'react';
import { makeStyles, createStyles, Grid, Tabs, Tab, Icon, AppBar } from '@material-ui/core';
import MiscTabCodeResult from './playground-misc-tab/MiscTabCodeResult';
import MiscTabConsole from './playground-misc-tab/MiscTabConsole';

const useStyles = makeStyles(() => createStyles({
    root: {
        flexGrow: 1
    },
    container: {
        height: '100%'
    },
    tabContainer: {
        height: '75vh',
    }
}));

interface PlaygroundMiscTabProps {
    code?: string
}

const PlaygroundMiscTab: React.FC<PlaygroundMiscTabProps> = ({ code }) => {
    const classes = useStyles();
    const [value, setValue] = useState<number>(0);
    const [tabConsoleLoading, setTabConsoleLoading] = useState<boolean>(false);

    useEffect(() => {
        if (value === 1 && tabConsoleLoading === false) setValue(0);
        // eslint-disable-next-line
    }, [code]);

    const handleChange = (_e: any, value: number) => {
        setValue(value);
    };

    // To prevent memory leak when user switch tab
    // while MiscTabConsole components still loading
    // the console.
    const handleTabConsoleLoading = (loading: boolean) => setTabConsoleLoading(loading);

    return (
        <>
            <div className={classes.root} >
                <Grid container className={classes.container} justify={"center"}
                    alignItems={"center"} alignContent={"center"}>
                    <Grid item xs={11}>
                        <AppBar position="static">
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab disabled={tabConsoleLoading} icon={<Icon>code</Icon>} />
                                <Tab icon={<Icon>dvr</Icon>} />
                            </Tabs>
                        </AppBar>
                        <Grid className={classes.tabContainer}>
                            {value === 0 && <MiscTabCodeResult code={code} />}
                            {value === 1 && <MiscTabConsole code={code} onLoading={handleTabConsoleLoading} />}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default PlaygroundMiscTab;