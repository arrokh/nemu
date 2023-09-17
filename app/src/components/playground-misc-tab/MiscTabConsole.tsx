import React, { useState, useEffect } from 'react';
import { Grid, CircularProgress, Typography, Fade, Zoom } from '@material-ui/core';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface MiscTabConsoleProps {
    code?: string,
    height?: number,
    onLoading?: (loading: boolean) => void,
}

const MiscTabConsole: React.FC<MiscTabConsoleProps> = ({ code, height, onLoading }) => {
    const [uid] = useState<string | null>(localStorage.getItem('nemu-uid'));
    const [webConsolePath] = useState(`${process.env.REACT_APP_NEMU_CONSOLE}`);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [srcFrame, setSrcFrame] = useState<string>('');

    useEffect(() => {
        initialize();
        // eslint-disable-next-line
    }, []);

    const initialize = async () => {
        try {
            if (onLoading) onLoading(true);

            const config: AxiosRequestConfig = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };
            const postData: FormData = new FormData();
            if (uid && code) {
                postData.append('uid', uid);
                postData.append('code', code);
            }
            const result1: AxiosResponse<any> = await axios.post(`${webConsolePath}/rw-access/index.php`, postData, config);
            if (result1.status === 200) {
                setSrcFrame(`${webConsolePath}/?uid=${uid}`);
                setLoaded(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            if (onLoading) onLoading(false);
        }
    };

    const ErrorView = () => (
        <Zoom in={true} timeout={{ enter: 500 }}>
            <Typography variant={"h6"} align={"center"} style={{ color: 'white' }} >
                <span role="img" aria-label="Failed load Nemu Console">😵</span>
                <br />
                We 'Nemu' an error. Please try again.
            </Typography>
        </Zoom>
    );

    const LoadingView = () => (
        <Grid container direction={"column"} justify={"center"} alignItems="center">
            <CircularProgress />
            <br />
            <Typography variant={"h6"} align={"center"} style={{ color: 'white' }} >
                Loading Nemu Console
            </Typography>
        </Grid>
    );

    return (
        <>
            <div style={{ backgroundColor: 'black', height: '100%' }}>
                {
                    loaded ?
                        <Fade in={loaded} timeout={{ enter: 10500 }}>
                            <iframe
                                title="nemu-blockly"
                                src={srcFrame}
                                width={"100%"}
                                height={height ?? "100%"}
                                frameBorder={0}
                            />
                        </Fade>
                        :
                        <Fade in={true} timeout={{ enter: 1000 }} >
                            <Grid container justify={"center"} alignItems="center" style={{
                                height: "100%",
                            }}>
                                {error ? <ErrorView /> : <LoadingView />}
                            </Grid>
                        </Fade>

                }
            </div>
        </>
    );
}

export default MiscTabConsole;