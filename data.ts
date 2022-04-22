import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IService,ISkill,IProject } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "I never stop learning",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Python",
    level: "65%",
  },
  {
    Icon: BsCircleFill,
    name: "Golang",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "SQL",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "80%",
  },
  {
    Icon: BsCircleFill,
    name: "Django",
    level: "50%",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Microsoft SQL Server",
    level: "85%",
  },
  {
    Icon: BsCircleFill,
    name: "Microsoft Power BI",
    level: "90%",
  },
  {
    Icon: BsCircleFill,
    name: "Microsoft office",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "NiceLabel Designer Express",
    level: "70%",
  },
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "40%",
  },
];

export const projects: IProject[] = [
  { 
    id:1,
    name: "Netflix-clone",
    description:
      "This app shows movie from TMDB API",
    image_path: "/images/netflix-clone.png",
    deployed_url: "https://netflix-clone-dusky-ten.vercel.app/",
    github_url: "https://github.com/pawor/Netflix-clone",
    category: ["react","Next.js"],
    key_techs: ["React", "Next.js", "Tailwind CSS", "firebase"],
  },
  { 
    id:2,
    name: "Starbucks-clone",
    description:
      "This app has feature same starbucks website",
    image_path: "/images/starbucks-clone.png",
    deployed_url: "https://starbucks-clone-fe327.web.app/",
    github_url: "https://github.com/pawor/starbucks-clone",
    category: ["react"],
    key_techs: ["React", "firebase", "framer motion"],
  },
  { 
    id:3,
    name: "pizza-restaurant",
    description:
      "pizza-restaurant web application and using paypal",
    image_path: "/images/pizza.png",
    deployed_url: "",
    github_url: "https://github.com/pawor/pizza-restaurant",
    category: ["react","mongo","Next.js"],
    key_techs: ["React", "Next.js", "mongodb","paypal"],
  }
];