import { makeStyles, Paper, Typography } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React from "react";
import { Navbar } from "../../components/Navbar";
import { Items } from "./items";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      alignLeft: "right",
    },
  },

  paper: {
    padding: "6px 16px",
  },

  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  workDuration: {
    fontWeight: 500,
    color: "yellow",
  },

  company: {
    [theme.breakpoints.down("sm")]: {
      color: "red",
    },
  },
}));

export const Experience = () => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Timeline align="alternate" className={classes.root}>
        {Items.map((item, index) => (
          <TimelineItem {...{ id: index }}>
            <TimelineOppositeContent>
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.workDuration}
              >
                {item.startAt} - {item.endAt}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineDot color="secondary">{item.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  variant="h6"
                  component="h1"
                  className={classes.company}
                >
                  {item.companyName}
                </Typography>
                <Typography>{item.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};
