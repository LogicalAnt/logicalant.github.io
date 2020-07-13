import { Chip, Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import React, { useState } from "react";
import { Items, ItemType, tagColor } from "./items";
import { ProjectDetailsModal } from "./modal";
import "./style.css";

export const Project = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {},
      cardHolder: {
        margin: 25,
        "&:hover": {
          transform: "rotate(0.5deg)",
          transition: "transform 1s",
        },
      },
      tag: {
        marginRight: 2,
        fontWeight: "bold",
        "&:hover": {
          filter: `drop-shadow(0 0 .5em ${hoverTagColor})`,
        },
      },

      media: {
        height: 140,
      },
    })
  );

  const [hoverTagColor, setHoverTagColor] = useState("tomato");
  const classes = useStyles();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ItemType>({
    description: "",
    tag: [""],
    image: [""],
    link: "",
    name: "",
  });

  return (
    <>
      <Grid container className={classes.root}>
        {Items.map((project, index) => (
          <Grid item sm={12} xs={12} md={6} lg={4} key={index}>
            <Card className={classes.cardHolder}>
              <CardActionArea>
                <CardMedia className={classes.media} image={project.image[0]} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {project.description.substring(0, 35)}...
                  </Typography>
                  <>
                    {project.tag.map((name, index) => (
                      <Chip
                        key={index}
                        className={`${classes.tag} tag`}
                        variant="default"
                        size="small"
                        label={name}
                        style={{
                          backgroundColor: tagColor(name),
                        }}
                        onMouseOver={() => setHoverTagColor(tagColor(name))}
                      />
                    ))}
                  </>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ flexDirection: "row-reverse" }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => {
                    setModalOpen(true);
                    setModalData(project);
                  }}
                  startIcon={<InfoOutlinedIcon />}
                >
                  Details
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ProjectDetailsModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalData={modalData}
      />
    </>
  );
};
