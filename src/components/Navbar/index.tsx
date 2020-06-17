import {
  AppBar,
  Avatar,
  Box,
  createStyles,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/sidebar-image.jpeg";
import { SidebarItems } from "./sidebarItems";
import "./styles.css";
export const Navbar = () => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      drawer: {
        width: 250,
        backgroundColor: "#8ae9b3",
        backgroundImage: "linear-gradient(315deg, #8ae9b3 0%, #c8d6e5 74%)",

        height: "100%",
      },
      avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
      },
      listItem: {
        color: "black",
      },
    })
  );
  const classes = useStyles();

  const [drawerPosition, setDrawerPosition] = useState({
    left: false,
  });

  const toggleDrawer = () => {
    setDrawerPosition({
      ...drawerPosition,
      left: !drawerPosition.left,
    });
  };

  const drawerItems = (
    <Box component="div" className={classes.drawer}>
      <Avatar className={classes.avatar} src={avatar} alt="no image" />
      <Divider />
      <List component="nav">
        {SidebarItems.map((item, index) => (
          <ListItem
            key={index}
            className={classes.listItem}
            button
            component={Link}
            {...{ to: item.route }}
          >
            <ListItemIcon>{item.itemIcon}</ListItemIcon>
            <ListItemText primary={item.itemName} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav">
        <AppBar className="navBar" position="static">
          <Toolbar>
            <IconButton onClick={toggleDrawer}>
              <MenuIcon className="navBarArrow" />
            </IconButton>
            <Typography variant="h6">Shakil Ahmed</Typography>
            <Drawer
              anchor="left"
              open={drawerPosition.left}
              onClose={toggleDrawer}
            >
              {drawerItems}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
