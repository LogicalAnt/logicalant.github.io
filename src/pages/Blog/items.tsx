export interface ItemType {
  name: string
  description: string
  image: Array<string>
  link: string
}
export const Items: ItemType[] = [
  {
    name: "ইন্টারফেস (অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং)",
    description:
      "পিএইচপি তে ইন্টারফেস কাজ করে অনেকটা এ্যাডাপটারের মত। আমাদের ল্যাপটপের অ্যাডাপটারের কাজ কি ?",
    image: [require("../../images/blogs/interface.jpg")],
    link: "https://medium.com/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE/%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%AB%E0%A7%87%E0%A6%B8-%E0%A6%85%E0%A6%AC%E0%A6%9C%E0%A7%87%E0%A6%95%E0%A7%8D%E0%A6%9F-%E0%A6%93%E0%A6%B0%E0%A6%BF%E0%A7%9F%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%A1-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-ef196691bd7f",
  },
  {
    name: "প্রাইম জেনারেটর (সিভ অফ এরাটোস্হেনেস)",
    description:
      "একটা নির্দিষ্ট রেঞ্জের মধ্যের সব প্রাইম নাম্বার(মৌলিক সংখ্যা) বের করার জন্য সবচেয়ে প্রাচীন এবং ইফিশিনেন্ট পদ্ধতি এটি।",
    image: [require("../../images/blogs/sieve.jpg")],
    link: "https://medium.com/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A7%8B%E0%A6%97%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%AE%E0%A6%BF%E0%A6%82-%E0%A6%AA%E0%A6%BE%E0%A6%A4%E0%A6%BE/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%AE-%E0%A6%9C%E0%A7%87%E0%A6%A8%E0%A6%BE%E0%A6%B0%E0%A7%87%E0%A6%9F%E0%A6%B0-%E0%A6%B8%E0%A6%BF%E0%A6%AD-%E0%A6%85%E0%A6%AB-%E0%A6%8F%E0%A6%B0%E0%A6%BE%E0%A6%9F%E0%A7%8B%E0%A6%B8%E0%A7%8D%E0%A6%B9%E0%A7%87%E0%A6%A8%E0%A7%87%E0%A6%B8-3ba4bb81f041",
  },
  {
    name: "BigQuery implementation in vtecx app",
    description:
      "In short, it's a back-end as a service(BaaS) that allows you to create web services using JavaScript frameworks such as React, without doing server-side works",
    image: [require("../../images/blogs/bigquery.jpg")],
    link: "https://logicalant.medium.com/bigquery-implementation-in-vtecx-app-acfabb754e20",
  },
]
