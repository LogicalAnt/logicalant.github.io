import ContactMailIcon from "@material-ui/icons/ContactMail";
import CreateIcon from "@material-ui/icons/Create";
import DnsIcon from "@material-ui/icons/Dns";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
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
    itemIcon: <DnsIcon />,
    itemName: "Projects",
    route: "/project",
  },
  {
    itemIcon: <EqualizerIcon />,
    itemName: "Skills",
    route: "/skill",
  },
  {
    itemIcon: <SchoolIcon />,
    itemName: "Education",
    route: "/education",
  },
  {
    itemIcon: <CreateIcon />,
    itemName: "Blog",
    route: "/blog",
  },
  {
    itemIcon: <ContactMailIcon />,
    itemName: "Contact",
    route: "/contact",
  },
];
