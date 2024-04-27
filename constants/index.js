import {
  faWebflow,
  faAirbnb,
  faDribbble,
  faTwitch,
  faVimeo,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import { step1, step2, step3, service1, service2, service3 } from "@/utils";

export const companies = [
  { id: 1, name: "webflow", svg: faWebflow },
  { id: 2, name: "airbnb", svg: faAirbnb },
  { id: 1, name: "dribble", svg: faDribbble },
  { id: 1, name: "twitch", svg: faTwitch },
  { id: 1, name: "vimeo", svg: faVimeo },
  { id: 1, name: "gitlab", svg: faGitlab },
];

export const processes = [
  {
    id: 1,
    title: "Subscribe",
    desc: "Hop on a free consultation call and subscribe to a plan that meets your business goals. ",
    gif: step1,
  },
  {
    id: 2,
    title: "Request",
    desc: "Submit your design request in our private Slack channel. We will start working on it right away. ",
    gif: step2,
  },
  {
    id: 3,
    title: "Revise",
    desc: "Get the results within 1-3 days. We will make unlimited revisions until you are 100% satisfied. ",
    gif: step3,
  },
];
export const services = [
  {
    id: 1,
    title: "Branding",
    desc: "Hop on a free consultation call and subscribe to a plan that meets your business goals. ",
    gif: service1,
  },
  {
    id: 2,
    title: "Web design",
    desc: "Submit your design request in our private Slack channel. We will start working on it right away. ",
    gif: service2,
  },
  {
    id: 3,
    title: "Framer",
    desc: "Get the results within 1-3 days. We will make unlimited revisions until you are 100% satisfied. ",
    gif: service3,
  },
];
