import HotelIcon from "@material-ui/icons/Hotel";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import moment from "moment";
import React from "react";

interface ItemType {
  companyName: string;
  role: string;
  description: string;
  startAt: string;
  endAt: string;
  icon: JSX.Element;
}
export const Items: ItemType[] = [
  {
    companyName: "Shorol Limited",
    role: "Software engineer",
    description: "Act as backend developer",
    startAt: moment("2019/05/01").format("MMMM Do YYYY"),
    endAt: "Present",
    icon: <HotelIcon />,
  },
  {
    companyName: "RS Software",
    role: "Web developer",
    description: `Wroked on multiple project`,
    startAt: moment("2017/11/01").format("MMMM Do YYYY"),
    endAt: moment("2019/05/01").format("MMMM Do YYYY"),
    icon: <LaptopMacIcon />,
  },
];
