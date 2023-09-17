import React, { useState } from 'react';
import { Button, Icon, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField, Grid } from '@material-ui/core';
import Recaptcha from 'react-recaptcha';
import { toast } from 'react-toastify';
import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

interface MiscShareButtonProps {
    code?: string,
}

const MiscShareButton: React.FC<MiscShareButtonProps> = ({ code }) => {
    const [open, setOpen] = useState(false);
    const [verified, setVerified] = useState(false);
    const [submited, setSubmited] = useState(false);
    const [webConsolePath] = useState(`${process.env.REACT_APP_NEMU_CONSOLE}`);
    const [toEmail, setToEmail] = useState('');
    const [fromEmail, setFromEmail] = useState('');
    const [message, setMessage] = useState('');

    const onClickHandler = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const inputChangeHandle = (event: any) => {
        switch (event.target.id) {
            case 'toEmail':
                setToEmail(event.target.value);
                break;
            case 'fromEmail':
                setFromEmail(event.target.value);
                break;
            case 'message':
                setMessage(event.target.value);
                break;
            default:
                break;
        }
    };

    const recaptchaHandler = () => {
        setVerified(true);
    };

    const submitHandler = async () => {
        try {
            setSubmited(true);
            toast.info('Sending');
            setOpen(false);

            const config: AxiosRequestConfig = {
                headers: { 'Content-Type': 'multipart/form-data' }
            };
            const postData: FormData = new FormData();
            if (code) {
                postData.append('toEmail', toEmail);
                postData.append('fromEmail', fromEmail);
                postData.append('message', message);
                postData.append('code', code);
            }

            const result: AxiosResponse<any> = await axios.post(`${webConsolePath}/share/`, postData, config);
            if (result.status === 200) {
                toast.success('Success send email 🎉');
                setOpen(false);
            }
        } catch (error) {
            toast.error('Failed sending email :(');
        } finally {
            setVerified(false);
            setSubmited(false);
            setFromEmail('');
            setToEmail('');
            setMessage('');
        }
    };

    const SubmitButtonView = () => (
        verified ?
            <Button
                variant={'contained'}
                onClick={submitHandler}
                color="primary"
                disabled={(fromEmail.length === 0 || toEmail.length === 0 || message.length === 0) || submited}
            >
                Submit
            </Button>
            : null
    );

    return (
        <>
            <Button
                onClick={onClickHandler}
                variant="contained"
                color="default"
                fullWidth
            >
                Share&nbsp;&nbsp;<Icon>share</Icon>
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="form-dialog-title">Let's share your project</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        NEMU ID will help you send your project throught email to anyone. Try it!
                </DialogContentText>
                    <br />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="fromEmail"
                        label="Your email address"
                        type="fromEmail"
                        required
                        fullWidth
                        onChange={inputChangeHandle}
                    />
                    <TextField
                        margin="dense"
                        id="toEmail"
                        label="To"
                        type="toEmail"
                        required
                        fullWidth
                        onChange={inputChangeHandle}
                    />
                    <TextField
                        margin="dense"
                        id="message"
                        label="Message"
                        type="text"
                        multiline={true}
                        required
                        fullWidth
                        onChange={inputChangeHandle}
                    />
                </DialogContent>
                <DialogActions>
                    <Grid item xs={12}>
                        <Grid container alignItems={'center'} style={{ textAlign: 'center' }} >
                            <Grid item xs>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                            </Button>
                            </Grid>
                            <Grid item xs>
                                {
                                    !verified || !submited ?
                                        <Recaptcha
                                            sitekey=""
                                            render="explicit"
                                            verifyCallback={recaptchaHandler}
                                            hidden={verified}
                                        /> : null
                                }
                            </Grid>
                            <Grid item xs>
                                <SubmitButtonView />
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default MiscShareButton;