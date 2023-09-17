import React, { useState } from 'react';
import { makeStyles, Theme, createStyles, Grid, Typography, Divider, Card, CardActions, CardContent, Icon, Button, CardActionArea, Avatar } from '@material-ui/core';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme: Theme) => createStyles({
    container: {
        margin: '30px 15%',
    },
    desc: {
        paddingTop: "0",
    },
    content: {
        flex: '1 0 auto',
    },
    root: {
    },
    large: {
        marginTop: 15,
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
}));

interface ProfileResearcherModel {
    urlImage: string,
    urlProfile: string,
    name: string,
    affiliation: string,
    topicResearchers: string,
}

interface ThirdPartyModel {
    name: string,
    url: string,
}

const About: React.FC = () => {
    const classes = useStyles();
    const [profileResearchers] = useState<Array<ProfileResearcherModel>>([
        {
            urlImage: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=c4kLVAkAAAAJ&citpid=1",
            urlProfile: "https://scholar.google.co.id/citations?hl=id&user=c4kLVAkAAAAJ",
            name: "Noor Octavian Anwar S.Pd.",
            affiliation: "Universitas Negeri Malang · Department of Electrical Engineering",
            topicResearchers: "Game Development, Educational Game, Visual Programming"
        },
        {
            urlImage: "https://avatars1.githubusercontent.com/u/15774770?s=460&v=4",
            urlProfile: "https://github.com/almasaml",
            name: "Almas Amalia Azhar",
            affiliation: "Universitas Negeri Malang · Department of Electrical Engineering",
            topicResearchers: "Android Mobile Development, Visual Programming"
        },
        {
            urlImage: "images/profile/hiroshi-okumura-min.jpg",
            urlProfile: "https://www.researchgate.net/profile/Hiroshi_Okumura2",
            name: "Professor Hiroshi Okumura",
            affiliation: "Saga University · Graduate School of Science and Engineering",
            topicResearchers: "Remote Sensing, Medical Information Processing, Perceptive Information Science"
        },
        {
            urlImage: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=3u7WQGIAAAAJ&citpid=2",
            urlProfile: "https://scholar.google.co.id/citations?user=3u7WQGIAAAAJ&hl=id",
            name: "Triyanna Widiyaningtyas, S.T., M.T.",
            affiliation: "Universitas Negeri Malang · Department of Electrical Engineering",
            topicResearchers: "Database, Data mining, Educational Informatics, Software Engineering"
        },
        {
            urlImage: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=2wHJyn8AAAAJ&citpid=3",
            urlProfile: "https://scholar.google.co.id/citations?user=2wHJyn8AAAAJ&hl=id",
            name: "Dr. H. Hakkun Elmunsyah, S.T., M.T.",
            affiliation: "Universitas Negeri Malang · Department of Electrical Engineering",
            topicResearchers: "Vocational Education, IoT, ICT, Instrumentation"
        },
        {
            urlImage: "https://scholar.googleusercontent.com/citations?view_op=view_photo&user=yQ9MSVYAAAAJ&citpid=5",
            urlProfile: "https://scholar.google.co.id/citations?user=yQ9MSVYAAAAJ&hl=id",
            name: "Utomo Pujianto, S.Kom., M.Kom.",
            affiliation: "Universitas Negeri Malang · Department of Electrical Engineering",
            topicResearchers: "Decision Support, Data Mining, Educational Informatics, Software Engineering"
        },
    ]);

    const [thirdParties] = useState<Array<ThirdPartyModel>>([
        {
            name: 'React JS',
            url: 'https://reactjs.org/',
        },
        {
            name: 'Material-UI',
            url: 'https://material-ui.com/',
        },
        {
            name: 'Google Blockly',
            url: 'https://developers.google.com/blockly',
        },
        {
            name: 'Cra16/Cake',
            url: 'https://github.com/Cra16/Cake',
        },
        {
            name: 'PHP - Web Console',
            url: 'https://github.com/nickola/web-console',
        },
        {
            name: 'Axios',
            url: 'https://github.com/axios/axios',
        },
        {
            name: 'Google Analytics',
            url: 'https://analytics.google.com/analytics/web/',
        },
        {
            name: 'Google reCAPTCHA',
            url: 'https://www.google.com/recaptcha',
        },
    ]);


    return (
        <>
            <div className={classes.container}>
                <Grid container spacing={4} alignItems={"center"} justify={"center"}>
                    <Grid item xs={12}>
                        <Typography align={"center"} gutterBottom variant="h4" component="h2">
                            <b style={{ color: '#3f51b5' }}>About</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.desc}>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b style={{ color: '#3f51b5' }}>NEMU: Visual Programming Environment</b>
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h2">
                            Introduction
                        </Typography>
                        <Typography component="p">
                            NEMU is research aims to design and improve Visual Programming Environment as Learning
                            Support System on basic programming subjects. This website is a product from research with
                            the title “NEMU: Design and Improvement of Visual Programming Environment as Learning
                            Support System on Basic Programming Subjects” by Noor Octavian Anwar, Triyanna
                            Widiyaningtyas, Utomo Pujianto, from Universitas Negeri Malang (State University of Malang)
                            - Indonesia, and Hiroshi Okumura from Saga University, Japan.
                        </Typography>
                        <br />
                        <Typography component="p">
                            NEMU research paper has been published in ICIET 2019, Proceedings of the 2019 7th International Conference on Information and Education Technology (pages 54-61), Aizu-Wakamatsu, Japan, by ACM Digital Library.
                            <br />
                            <a href="https://dl.acm.org/citation.cfm?id=3323788" target="_blank" rel="noopener noreferrer">
                                https://dl.acm.org/citation.cfm?id=3323788
                            </a>
                        </Typography>
                        <br /><Divider /><br />
                        <Typography gutterBottom variant="h6" component="h2">
                            Abstract of research
                        </Typography>
                        <Typography component="p">
                            Basic programming is a fundamental subject that contains basic materials of programming
                            algorithms as well as the design and developing programs using programming languages. Based
                            on observations in Vocational High School at Indonesia, discovered some problems in the
                            learning process of basic programming subject. Students are too focus with syntax errors,
                            operating procedures and instructions of the programming language rather than understanding
                            and practicing the related algorithms. Furthermore, learning resources used in the class are
                            text modules which are not interactive and don’t visualize abstract concept of programming
                            language which could help students to understand the subject better. This research aims to
                            design and improve Visual Programming Environment as Learning Support System on basic
                            programming subjects. With this, students could put more focus in practicing design
                            algorithms. It would be easy to sharpen their knowledge and understanding about basic
                            programming without having to suffer from problems mentioned before.
                        </Typography>
                        <br /><Divider /><br />
                        <Typography gutterBottom variant="h6" component="h2">
                            Third-party
                        </Typography>
                        <Typography component="span" variant={"body2"}>
                            <ul>
                                {
                                    thirdParties.map((thirdPartiyModel: ThirdPartyModel, $index: number) => (
                                        <li key={$index} style={{ margin: 5 }}>
                                            {thirdPartiyModel.name}
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href={thirdPartiyModel.url}
                                                style={{
                                                    marginLeft: 15,
                                                }}
                                            >
                                                <Icon fontSize={"small"} >open_in_new</Icon>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                            <Divider />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b style={{ color: '#3f51b5' }}>Researcher</b>
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} alignItems={"center"} justify={"center"}>
                        {
                            profileResearchers.map((profile, $index) => (
                                <Grid item key={$index} xs={12} md={6}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <Grid container alignItems={"center"} justify={"center"}>
                                                <Avatar
                                                    alt={profile.name}
                                                    src={profile.urlImage}
                                                    className={classes.large}
                                                />
                                            </Grid>
                                            <CardContent className={classes.content}>
                                                <Divider />
                                                <Typography gutterBottom variant="h6" component="h3">
                                                    {profile.name}
                                                </Typography>
                                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                                    {profile.affiliation} <br /><br />
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {profile.topicResearchers}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Button size="small" color="primary"
                                                onClick={() => window.open(profile.urlProfile, "_blank")}
                                            >
                                                <Icon>account_box</Icon>
                                                &nbsp;&nbsp;Profile
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </div>
            <br />
            <br />
            <br />
            <Footer />
        </>
    );
}

export default About;