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
    description: `After RS period, I joined Shorol Limited as a software engineer. 
      
      It was a startup on fintech product. Shorol has its core product named Pocketmoney. Its main customer base was mostly the people who are below general banking credit score.
       
      I acted as Pocketmoney's one of a core developer. The product backend api's written in nodejs and react frontend. Using graphql makes it more robust application.
      
      Working with Shorol was a great experience for me. That frindly and flexible work environment was really a pleasant moment`,
    startAt: moment("2019/05/01").format("MMMM Do YYYY"),
    endAt: "Present",
    icon: <HotelIcon />,
  },
  {
    companyName: "RS Software",
    role: "Web developer",
    description: `After my graduation I joined RS Software. It was a major breakthrough in my career. I joined here as a php web developer. It was a freelancing based company, so I had to engage with several client project. As a first job I've learned a lot about job culture in Bangladeshi perspective.
    As for technical point of view We mostly stick to php framework codeigniter and mysql database
    `,
    startAt: moment("2017/11/01").format("MMMM Do YYYY"),
    endAt: moment("2019/05/01").format("MMMM Do YYYY"),
    icon: <LaptopMacIcon />,
  },
];
