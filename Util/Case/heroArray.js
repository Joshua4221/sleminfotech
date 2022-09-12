import ImageOne from "../../Asset/jamavoice1.png";
import ImageTwo from "../../Asset/poshtok.png";
import ImageThree from "../../Asset/dtworld.png";
import Imagefour from "../../Asset/easyhealth.jpg";
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
        header: "JamaVoice",
        // subHeader: "Mobile    Web",
        paragraph:
          "Jamavoice online platform Instantly convert any text to real human voiceover that does not sound like computer voice.You will be surprised discover this Real Human Text to Speech Converter.",
        // linkText: "Discover the project",
        // linkIcon: FaArrowRight,
      },
    ],
    image: ImageOne,
  },
  {
    ccardArray: [
      {
        header: "Poshtok Chat Application",
        // subHeader: "Education   e-Commerce",
        paragraph:
          "App built for creating short form of mobile videos and messaging and entertainments.",
        // linkText: "Discover the project",
        // linkIcon: FaArrowRight,
      },
    ],
    image: ImageTwo,
  },
  {
    image: ImageThree,
    ccardArray: [
      {
        header: "Dt World",
        // subHeader: "Education   e-Commerce",
        paragraph:
          "Online Staff Management System App developed for private Company staff management.",
        // linkText: "Discover the project",
        // linkIcon: FaArrowRight,
      },
    ],
  },
  {
    ccardArray: [
      {
        header: "EasyHealth",
        // subHeader: "Education   e-Commerce",
        paragraph:
          "EasyHealth is an e-Health project, that has a purpose of connecting patients and doctors and therefore taking their communications online.",
        // inkText: "Discover the project",
        // linkIcon: FaArrowRight,
      },
    ],
    image: Imagefour,
  },
];
