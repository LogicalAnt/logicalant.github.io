import HotelIcon from "@material-ui/icons/Hotel"
import LaptopMacIcon from "@material-ui/icons/LaptopMac"
import moment from "moment"
import React from "react"

interface ItemType {
  companyName: string
  role: string
  description: string
  startAt: string
  endAt: string
  icon: JSX.Element
}
export const Items: ItemType[] = [
  {
    companyName: "Japan Marketing & Consultancy Ltd. (JMC)",
    role: "Software engineer",
    description: `
    JMC is a leading global IT, consulting, and business process support company. It is Japan-Bangladesh joint venture private limited company.

    Worked with the Contrars Developer team. Here we implemented a BaaS system named Vtecx into client applications built in React and React-native. 
    Exclusively used memoization techniques to boost app performance. Implement clean coding principles as much as possible.
    
    Besides the project work I wrote a couple of articles about the system and the implementation
    Here I built an npm package named vdeployer for Vtecx powered project, which was a very handy tool and is used amongst developers here on daily basis.
    `,
    startAt: moment("2020/10/01").format("MMMM Do YYYY"),
    endAt: "Current",
    icon: <HotelIcon />,
  },
  {
    companyName: "Sheba.xyz",
    role: "Software engineer",
    description: `
    Sheba.xyz is a largest service marketplace & one-stop solution for home services in Bangladesh.
    
    After Shorol Ltd. has suddenly stopped their operations due to Covid situation, I moved to Sheba.xyz
    Though I stayed here for a short period of time, but I really enjoyed the culture of their tech team`,
    startAt: moment("2020/08/01").format("MMMM Do YYYY"),
    endAt: moment("2020/09/01").format("MMMM Do YYYY"),
    icon: <HotelIcon />,
  },
  {
    companyName: "Shorol Limited",
    role: "Software engineer",
    description: `After RS period, I joined Shorol Limited as a software engineer. 
      
      It was a fintech startup. Shorol has its core product named Pocketmoney. Its main customer base was mostly the people who are below general banking credit score.
       
      I acted as Pocketmoney's one of a core developer. The product's backend APIs written in nodejs and react frontend. Using graphql makes it more robust application.
      
      Working with Shorol was a great experience for me. That frindly and flexible work environment was really a pleasant moment`,
    startAt: moment("2019/05/01").format("MMMM Do YYYY"),
    endAt: moment("2020/05/01").format("MMMM Do YYYY"),
    icon: <HotelIcon />,
  },
  {
    companyName: "RS Software",
    role: "Web developer",
    description: `After my graduation I joined RS Software. It was a major breakthrough in my career. I joined here as a php web developer. It was a freelancing based company, so I had to engage with several client project. As a first job I've learned a lot about job culture in Bangladeshi perspective.
    As for technical point of view we mostly stick to php framework codeigniter and mysql database
    `,
    startAt: moment("2017/11/01").format("MMMM Do YYYY"),
    endAt: moment("2019/05/01").format("MMMM Do YYYY"),
    icon: <LaptopMacIcon />,
  },
]
