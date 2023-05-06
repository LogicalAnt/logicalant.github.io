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
    image: [
      require("../../images/projects/contra/login.jpg"),
      require("../../images/projects/contra/chat-list.jpg"),
      require("../../images/projects/contra/chat-member-add.jpg"),
      require("../../images/projects/contra/chat-screen.jpg"),
      require("../../images/projects/contra/different-sized-chat-image.jpg"),
      require("../../images/projects/contra/profile-edit.jpg"),
      require("../../images/projects/contra/prefecture-selection.jpg"),
      require("../../images/projects/contra/map.jpg"),
      require("../../images/projects/contra/improvement-request-screen.jpg"),
      require("../../images/projects/contra/site-list.jpg"),
      require("../../images/projects/contra/site-details.jpg"),
      require("../../images/projects/contra/site-chat.jpg"),
      require("../../images/projects/contra/site-photo-add-1.jpg"),
      require("../../images/projects/contra/site-photo-add-2.jpg"),
      require("../../images/projects/contra/site-photo-folder.jpg"),
      require("../../images/projects/contra/photo-inside-site-folder.jpg"),
    ],
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
    case "react-native":
      return "#591ed94a"
    case "typescript":
      return "#d9881e6d"
    case "expo":
      return "#12a52549"
    default:
      return "tomato"
  }
}
