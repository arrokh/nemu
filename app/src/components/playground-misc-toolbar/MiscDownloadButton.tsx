import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { toast } from 'react-toastify';

interface MiscDownloadButtonProps {
    code?: string,
}

const MiscDownloadButton: React.FC<MiscDownloadButtonProps> = ({ code }) => {

    const onClickHandler = () => {
        if (code) {
            const file = new Blob([code], { type: 'text/plain' });
            const link = document.createElement('a');

            link.href = URL.createObjectURL(file);
            document.body.appendChild(link);
            link.download = "main.cpp"
            link.click();
            document.body.removeChild(link);
        } else {
            if (!toast.isActive('toast')) {
                toast.error('Code not found', {
                    toastId: 'toast',
                    autoClose: 4000,
                    pauseOnFocusLoss: false,
                });
            }
        }
    }

    return (
        <>
            <Button
                onClick={onClickHandler}
                variant="contained"
                color="default"
                fullWidth
            >
                Download&nbsp;&nbsp;<Icon>save_alt</Icon>
            </Button>
        </>
    );
}

export default MiscDownloadButton;