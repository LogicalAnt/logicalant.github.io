import AppsIcon from "@material-ui/icons/Apps";
import BuildIcon from "@material-ui/icons/Build";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import NoteIcon from "@material-ui/icons/Note";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import React from "react";

export const SidebarItems = [
  {
    itemIcon: <HomeIcon />,
    itemName: "Home",
    route: "/",
  },
  {
    itemIcon: <ImportContactsIcon />,
    itemName: "About",
    route: "/about",
  },
  {
    itemIcon: <WorkIcon />,
    itemName: "Experience",
    route: "/experience",
  },
  {
    itemIcon: <AppsIcon />,
    itemName: "Projects",
    route: "/project",
  },
  {
    itemIcon: <BuildIcon />,
    itemName: "Skills",
    route: "/skill",
  },
  {
    itemIcon: <SchoolIcon />,
    itemName: "Education",
    route: "/education",
  },
  {
    itemIcon: <NoteIcon />,
    itemName: "Blog",
    route: "/blog",
  },
  {
    itemIcon: <ContactMailIcon />,
    itemName: "Contact",
    route: "/contact",
  },
];
