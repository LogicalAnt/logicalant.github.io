import {
  Chip,
  makeStyles,
  Paper,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React from "react";
import { Items } from "./items";

const useStyles = makeStyles((theme: Theme) => ({
  root: {},

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
  schoolName: {
    fontFamily: "MuseoModerno",
  },
}));

export const Education = () => {
  const classes = useStyles();

  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Timeline
        align={mobileScreen ? "right" : "alternate"}
        className={classes.root}
      >
        {Items.map((item, index) => (
          <TimelineItem {...{ id: index }} key={index}>
            <TimelineOppositeContent
              style={{ display: mobileScreen ? "none" : "" }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.workDuration}
              >
                {item.startAt} - {item.endAt}
              </Typography>
              <>
                <Chip size="small" label={item.eduStage} color="primary" />
              </>
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
                  className={classes.schoolName}
                >
                  {item.instituteName}
                </Typography>
                <Typography variant="body2">{item.description}</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};
