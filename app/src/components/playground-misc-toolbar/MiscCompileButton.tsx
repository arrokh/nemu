import React, { useState } from 'react';
import { Button, Icon, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText, Grid } from '@material-ui/core';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface MiscCompileButtonProps {
    code?: string,
}

const MiscCompileButton: React.FC<MiscCompileButtonProps> = ({ code }) => {
    const [uid] = useState<string | null>(localStorage.getItem('nemu-uid'));
    const [webConsolePath] = useState(`${process.env.REACT_APP_NEMU_CONSOLE}`);
    const [osEnv] = useState(`${process.env.REACT_APP_OS}`);
    const [axiosCancelToken, setAxiosCancelToken] = useState(axios.CancelToken.source());
    const [open, setOpen] = useState<boolean>(false);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [output, setOutput] = useState<string>('');

    const handleCompiling = async () => {
        try {
            const setupProjectData: FormData = new FormData();
            if (uid && code) {
                setupProjectData.append('uid', uid);
                setupProjectData.append('code', code);
            }
            const setupProjectConfig: AxiosRequestConfig = {
                headers: { 'Content-Type': 'multipart/form-data' },
                cancelToken: axiosCancelToken.token,
            };
            const compilingAndRunConfig: AxiosRequestConfig = {
                headers: { 'Content-Type': 'application/json' },
                cancelToken: axiosCancelToken.token,
            };
            const compilingData: string = '{"jsonrpc":"2.0","method":"run","params":["NO_LOGIN",{"user":"","hostname":"","path":""},"g++ main.cpp -o main"],"id":1}';
            const runData: string = `{"jsonrpc":"2.0","method":"run","params":["NO_LOGIN",{"user":"","hostname":"","path":""},"${osEnv === 'WIN' ? 'main' : './main'}"],"id":1}`;

            const setupProjectResponse: AxiosResponse<any> = await axios.post(`${webConsolePath}/rw-access/`, setupProjectData, setupProjectConfig);
            checkResponseStatus(setupProjectResponse.status);
            const compilingResponse: AxiosResponse<any> = await axios.post(`${webConsolePath}/webconsole.php?uid=${uid}/`, compilingData, compilingAndRunConfig);
            checkResponseStatus(compilingResponse.status);
            const runResponse: AxiosResponse<any> = await axios.post(`${webConsolePath}/webconsole.php?uid=${uid}/`, runData, compilingAndRunConfig);
            checkResponseStatus(runResponse.status);

            setOutput(runResponse.data.result.output);
            setLoaded(true);
        } catch (error) {
            setError(true);
        }
    };

    const checkResponseStatus = (statusCode: number) => {
        if (statusCode !== 200) {
            setError(true);
            throw new Error();
        }
    }

    const onClickHandler = () => {
        resetState();
        setOpen(true);
        handleCompiling();
    }

    const handleClose = () => {
        setOpen(false);
    };

    const resetState = () => {
        setLoaded(false);
        setError(false);
        setOutput('');
    }

    const handleAbort = () => {
        handleClose();
        axiosCancelToken.cancel();
        setAxiosCancelToken(axios.CancelToken.source());
    }

    const CompileCodeView = () => (
        <>
            <hr />
            {
                (!loaded) ?
                    <DialogContentText >{error ? '😶...We got an Error. Please try again.' : 'Compiling...'}</DialogContentText>
                    :
                    <div>
                        <pre>
                            <code className="language-cpp">
                                {output}
                            </code>
                        </pre>
                    </div>
            }
            <hr />
        </>
    );

    const ButtonOptionView = () => (
        (!loaded) ?
            <Button style={{ justifyContent: 'center' }} onClick={handleAbort} variant="contained" color="secondary">
                {error ? 'Close' : 'Abort'}
            </Button>
            :
            <Button style={{ justifyContent: 'center', marginLeft: 15 }} onClick={handleClose} color="primary">
                Close
        </Button>
    );

    return (
        <>
            <Button
                onClick={onClickHandler}
                variant="contained"
                color="default"
                fullWidth
            >
                Compile&nbsp;&nbsp;<Icon>gavel</Icon>
            </Button>

            <Dialog
                aria-labelledby="responsive-dialog-title"
                fullWidth={true}
                open={open}
                closeAfterTransition={true}
            >
                <DialogTitle id="responsive-dialog-title">{"Terminal Output:"}</DialogTitle>
                <DialogContent>
                    <CompileCodeView />
                </DialogContent>
                <DialogActions>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <ButtonOptionView />
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MiscCompileButton;