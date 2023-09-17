import React, { useEffect, useState } from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';

interface NemuBlocklyProps {
    onCodeUpdated?: (codeData: string) => void,
    onLoaded?: () => void,
    onStart?: () => void,
    height?: number
}

const NemuBlockly: React.FC<NemuBlocklyProps> = ({ height, onCodeUpdated, onLoaded, onStart }) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (onStart !== undefined) onStart();
        window.addEventListener('message', retreiveCodeHandler, false); // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (onLoaded !== undefined && loaded) onLoaded();// eslint-disable-next-line
    }, [loaded]);

    const retreiveCodeHandler = (messageEvent: MessageEvent) => {
        const codeData = messageEvent.data.code;
        if (codeData !== undefined)
            if (onCodeUpdated !== undefined) onCodeUpdated(codeData);
    };

    return (
        <>
            {
                loaded ? null : (
                    <Grid container direction={"column"} justify={"center"} alignItems="center" style={{
                        height: "100%",
                        background: "rgba(29, 39, 49, 0.9)",
                        position: "fixed",
                        zIndex: 3
                    }}>
                        <CircularProgress thickness={4} size={50} style={{ color: 'white' }} />
                        <Typography variant={"h4"} style={{ color: 'white' }}>
                            <br />
                            <span role="img" aria-label="Man Technologist">👨‍💻</span> Preparing The Environment <span role="img" aria-label="Woman Technologist">👩‍💻</span>
                        </Typography>
                    </Grid>
                )
            }
            <iframe
                onLoad={() => setLoaded(true)}
                onLoadedData={() => console.log('onLoadedData')}
                title="nemu-blockly"
                src={window.location.origin + "/blockly/blockly.html"}
                width={"100%"}
                height={height ?? "100%"}
            />
        </>
    );
}

export default NemuBlockly;