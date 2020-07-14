import {
  makeStyles,
  Paper,
  Typography,
  useMediaQuery,
  useTheme,
  withStyles,
} from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Timeline from "@material-ui/lab/Timeline";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import React from "react";
import { Items } from "./items";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
      backgroundColor: "#000000",
      backgroundImage: "linear-gradient(147deg, #000000 0%, #04619f 74%)",
      color: "tomato",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    textAlign: "left",
  },
}))(MuiAccordionDetails);

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
    fontFamily: "MuseoModerno",
  },
}));

export const Experience = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [expanded, setExpanded] = React.useState<string | false>("panel0");

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      <Timeline
        align={mobileScreen ? "right" : "alternate"}
        className={classes.root}
        style={{ padding: mobileScreen ? "0px 0px 5px 0px" : "6px 16px" }}
      >
        {Items.map((item, index) => (
          <TimelineItem {...{ id: index }} key={index}>
            <TimelineOppositeContent
              style={{
                display: mobileScreen ? "none" : "",
              }}
            >
              <Typography
                variant="body2"
                color="textSecondary"
                className={classes.workDuration}
              >
                {item.startAt} - {item.endAt}
              </Typography>
            </TimelineOppositeContent>

            <TimelineSeparator style={{ display: mobileScreen ? "none" : "" }}>
              <TimelineDot color="secondary">{item.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>

            <TimelineContent
              style={{ padding: mobileScreen ? "0px 0px 5px 0px" : "6px 16px" }}
            >
              <Paper elevation={3} className={classes.paper}>
                <Accordion
                  square
                  expanded={expanded === `panel${index}`}
                  onChange={handleChange(`panel${index}`)}
                >
                  <AccordionSummary
                    aria-controls="panel1d-content"
                    id="panel1d-header"
                  >
                    <Typography className={classes.company}>
                      {item.companyName}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{item.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </>
  );
};
