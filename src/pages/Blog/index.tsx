import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Items } from "./items";
import "./style.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    cardHolder: {
      margin: 25,
      "&:hover": {
        boxShadow: "3px 3px 30px rgba(61,255,0,0.6)",
      },
    },
    media: {
      height: 140,
    },
  })
);

export const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container className={classes.root}>
        {Items.map((post, index) => (
          <Grid item sm={12} xs={12} md={6} lg={4} key={index}>
            <Card className={`${classes.cardHolder} cardHolder`}>
              <CardActionArea target="blank" href={post.link}>
                <CardMedia className={classes.media} image={post.image[0]} />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h6">
                    {post.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.description.substring(0, 35)}...
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
