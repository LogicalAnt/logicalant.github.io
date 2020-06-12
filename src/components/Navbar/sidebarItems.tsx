import ContactMailIcon from "@material-ui/icons/ContactMail";
import CreateIcon from "@material-ui/icons/Create";
import DnsIcon from "@material-ui/icons/Dns";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import React from "react";

export const SidebarItems = [
  {
    itemIcon: <ImportContactsIcon />,
    itemName: "About",
  },
  {
    itemIcon: <WorkIcon />,
    itemName: "Experience",
  },
  {
    itemIcon: <DnsIcon />,
    itemName: "Projects",
  },
  {
    itemIcon: <EqualizerIcon />,
    itemName: "Skills",
  },
  {
    itemIcon: <SchoolIcon />,
    itemName: "Education",
  },
  {
    itemIcon: <CreateIcon />,
    itemName: "Blog",
  },
  {
    itemIcon: <ContactMailIcon />,
    itemName: "Contact",
  },
];
