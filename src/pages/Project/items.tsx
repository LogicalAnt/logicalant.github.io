export interface ItemType {
  name: string;
  description: string;
  image: Array<string>;
  link: string;
}
export const Items: ItemType[] = [
  {
    name: "Pocketmoney",
    description:
      "Pocket Money is solving the fundamental problem of not having simple, convenient and transparent access to credit in today’s finance.",
    image: [
      require("../../images/projects/pocketmoney/registration.jpg"),
      require("../../images/projects/pocketmoney/customers.jpg"),
      require("../../images/projects/pocketmoney/dashboard.jpg"),
      require("../../images/projects/pocketmoney/homepage.jpg"),
    ],
    link: "https://www.pocketmoney.com.bd/",
  },
  {
    name: "Jantrac",
    description: "Cleaning service provider",
    image: [
      require("../../images/projects/jantrac/login.jpg"),
      require("../../images/projects/jantrac/homepage.jpg"),
    ],
    link: "https://www.jantrac.com/",
  },
  {
    name: "Q-Study",
    description: "Online School platform",
    image: [
      require("../../images/projects/qstudy/homepage.jpg"),
      require("../../images/projects/qstudy/registration.jpg"),
    ],
    link: "https://www.jantrac.com/",
  },
];
