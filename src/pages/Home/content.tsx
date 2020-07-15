import {
  Avatar,
  Box,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Tooltip,
  Typography,
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import Typed from "react-typed";
import avatar from "../../images/sidebar-image-low.jpg";
import "./style.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      width: theme.spacing(25),
      height: theme.spacing(25),
      margin: theme.spacing(1),
    },
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1,
    },
    typedName: {
      color: "white",
      fontSize: "40px",
    },
    typedSkill: {
      color: "yellow",
      fontWeight: 500,
    },
    facebookButton: {
      color: "#4267B2",
      "&:hover": {
        filter: "drop-shadow(0 0 .5em #5f91fb)",
      },
    },
    linkedinButton: {
      color: "#0C77B5",
      "&:hover": {
        filter: "drop-shadow(0 0 .5em #2caefb)",
      },
    },
    emailButton: {
      color: "#BC473C",
      "&:hover": {
        filter: "drop-shadow(0 0 .5em #f12613)",
      },
    },
  })
);
export const HomeContent = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Grid container justify="center">
          <Avatar src={avatar} className={classes.avatar} />

          <Grid item xs={12}>
            <Typography variant="h4" className={classes.typedName}>
              <Typed strings={["Shakil Ahmed"]} typeSpeed={100} />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography className={classes.typedSkill}>
              <Typed
                strings={[
                  "FULL-STACK SOFTWARE ENGINEER",
                  "Javascript Enthusiast",
                  "Php Adorer",
                  "A Music Devotee",
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box component="span" m={1}>
              <IconButton
                className={`${classes.emailButton} contactButton`}
                href="mailto:shakil147258@gmail.com"
                target="_top"
              >
                <Tooltip
                  title="shakil147258@gmail.com"
                  placement="bottom"
                  arrow
                >
                  <EmailIcon fontSize="large" />
                </Tooltip>
              </IconButton>

              <IconButton
                className={`${classes.facebookButton} contactButton`}
                href="https://www.facebook.com/shakil147258"
                target="blank"
              >
                <Tooltip title="shakil147258" placement="bottom" arrow>
                  <FacebookIcon fontSize="large" />
                </Tooltip>
              </IconButton>
              <IconButton
                className={`${classes.linkedinButton} contactButton`}
                href="https://www.linkedin.com/in/unreleased/"
                target="blank"
              >
                <Tooltip title="unreleased" placement="bottom" arrow>
                  <LinkedInIcon fontSize="large" />
                </Tooltip>
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
