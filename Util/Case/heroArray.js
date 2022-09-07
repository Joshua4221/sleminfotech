import ImageOne from "../../Asset/p5.png";
import ImageTwo from "../../Asset/p6.png";
import ImageThree from "../../Asset/p7.png";
import Imagefour from "../../Asset/p8.png";
import Imagefive from "../../Asset/p9.png";
import Imagesix from "../../Asset/p10.png";
import { FaArrowRight } from "react-icons/fa";

export const HeroArray = [
  {
    header: "Case Studies",
  },
  {
    buttonArray: [
      { text: "Education" },
      { text: "Mobile" },
      { text: "Social Media" },
      { text: "Web" },
      { text: "e-Commerce" },
    ],
  },
];

export const caseArr = [
  {
    ccardArray: [
      {
        header: "AppDoc",
        subHeader: "Mobile    Web",
        paragraph:
          "AppDoc is an e-Health project, that has a purpose of connecting patients and doctors and therefore taking their communications online.",
        linkText: "Discover the project",
        linkIcon: FaArrowRight,
      },
    ],
    image: ImageOne,
  },
  {
    ccardArray: [
      {
        header: "Fasol",
        subHeader: "Education   e-Commerce",
        paragraph:
          "Fasol App is an online music school offering 1 on 1 music lessons for people all over the world.",
        linkText: "Discover the project",
        linkIcon: FaArrowRight,
      },
    ],
    image: ImageTwo,
  },
  {
    image: ImageThree,
    ccardArray: [
      {
        header: "BelVEB",
        subHeader: "Education   e-Commerce",
        paragraph:
          "Online banking development for private clients of BelVeb Bank.",
        linkText: "Discover the project",
        linkIcon: FaArrowRight,
      },
    ],
  },
  {
    ccardArray: [
      {
        header: "Cognitive Ops",
        subHeader: "Education   e-Commerce",
        paragraph:
          "CognitiveOps delivers AI-driven next-generation solutions to expand enterprise efficiency and create better business.",
        inkText: "Discover the project",
        linkIcon: FaArrowRight,
      },
    ],
    image: Imagefour,
  },
  {
    image: Imagefive,

    ccardArray: [
      {
        header: "Butlers",
        subHeader: "Web   Social media",
        paragraph:
          "Butlers offers customers to wash & clean their clothes based on geolocation.",
        linkText: "Discover the project",
        linkIcon: FaArrowRight,
      },
    ],
  },
  {
    image: Imagesix,
    ccardArray: [
      {
        header: "Mersedes-Benz",
        subHeader: "Web   Social media",
        paragraph:
          "CRM and Marketplace platform for ensuring stable operation when connecting many dealers and synchronize the database in real time by the availability of spare parts in warehouse.",
        inkText: "Discover the project",
        linkIcon: FaArrowRight,
      },
    ],
  },
];
