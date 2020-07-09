import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import FaceIcon from "@material-ui/icons/Face";
import SchoolIcon from "@material-ui/icons/School";
import moment from "moment";
import React from "react";

interface ItemType {
  instituteName: string;
  eduStage: string;
  description: string;
  startAt: string;
  endAt: string;
  icon: JSX.Element;
}
export const Items: ItemType[] = [
  {
    instituteName: "Southeast University",
    eduStage: "BSc",
    description: `Completed my graduation from Computer Science and Engineering.
      May be its my best educational journey. I've enjoyed a lot at my university period`,
    startAt: moment("2013/01").format("MMMM YYYY"),
    endAt: moment("2017/09").format("MMMM YYYY"),
    icon: <SchoolIcon />,
  },
  {
    instituteName: "New Govt. Degree College",
    eduStage: "HSC",
    description: `This period may be most memorable of my academic life.`,
    startAt: moment("2011/01").format("MMMM YYYY"),
    endAt: moment("2012/12").format("MMMM YYYY"),
    icon: <AccessibilityNewIcon />,
  },
  {
    instituteName: "Natore govt. boys' High School",
    eduStage: "SSC",
    description: `Wroked on multiple project`,
    startAt: moment("2006/01").format("MMMM YYYY"),
    endAt: moment("2010/12").format("MMMM YYYY"),
    icon: <DirectionsBikeIcon />,
  },
  {
    instituteName: "Khodadpur Model Govt. School",
    eduStage: "Primary",
    description: `It was my second school. The smell of my school yard still calls me`,
    startAt: moment("2003/01").format("MMMM YYYY"),
    endAt: moment("2005/12").format("MMMM YYYY"),
    icon: <FaceIcon />,
  },
  {
    instituteName: "Bangla Hili Govt. Primary School",
    eduStage: "Primary",
    description: `My First school journey begin back on 2000. I still remember those old days`,
    startAt: moment("2000/01").format("MMMM YYYY"),
    endAt: moment("2002/12").format("MMMM YYYY"),
    icon: <ChildCareIcon />,
  },
];
