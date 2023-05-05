export interface ItemType {
  name: string
  description: string
  tag: Array<string>
  image: Array<string>
  link: string
}
export const Items: ItemType[] = [
  {
    name: "Contra Mobile App",
    tag: ["react-native", "typescript", "expo"],
    description:
      "Contra is a mobile application build in react-native. Which is a communication app for real-estate site Contractor and workers",
    image: [require("../../images/projects/pocketmoney/registration.jpg")],
    link: "https://play.google.com/store/apps/details?id=cx.vte.contra&hl=en_GB&gl=US",
  },
  {
    name: "Pocketmoney",
    tag: ["Javascript", "nodejs", "react", "graphql", "nestjs"],
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
    tag: ["php", "mysql", "codeigniter", "jQuery"],
    description: "Cleaning service provider",
    image: [
      require("../../images/projects/jantrac/login.jpg"),
      require("../../images/projects/jantrac/homepage.jpg"),
    ],
    link: "https://www.jantrac.com/",
  },
  {
    name: "Q-Study",
    tag: ["php", "mysql", "codeigniter", "jQuery"],
    description: "Online School platform",
    image: [
      require("../../images/projects/qstudy/homepage.jpg"),
      require("../../images/projects/qstudy/registration.jpg"),
    ],
    link: "https://q-study.com/",
  },
]

export const tagColor = (tag: string) => {
  switch (tag) {
    case "php":
      return "#8892C0"
    case "codeigniter":
      return "#DD4813"
    case "jQuery":
      return "#0A69AD"
    case "nestjs":
      return "#e0244e"
    case "react":
      return "#61DAFB"
    case "graphql":
      return "#E00098"
    case "mysql":
      return "#0A758F"
    case "nodejs":
      return "#5FB047"

    default:
      return "tomato"
  }
}
