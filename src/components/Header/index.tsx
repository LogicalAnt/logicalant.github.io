import {
  Avatar,
  Box,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import Typed from "react-typed";
import avatar from "../../images/sidebar-image.jpeg";

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
  })
);
export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.container}>
        <Grid container justify="center">
          <Avatar src={avatar} className={classes.avatar} />
        </Grid>
        <Typography variant="h4" className={classes.typedName}>
          <Typed strings={["Shakil Ahmed"]} typeSpeed={100} />
        </Typography>
        <Typography className={classes.typedSkill}>
          <Typed
            strings={[
              "FULL-STACK SOFTWARE ENGINEER",
              "Javascript Enthusiast",
              "Php Specialist",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
      </Box>
    </>
  );
};
