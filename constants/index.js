import {
  faWebflow,
  faAirbnb,
  faDribbble,
  faTwitch,
  faVimeo,
  faGitlab,
} from "@fortawesome/free-brands-svg-icons";

import {
  step1,
  step2,
  step3,
  service1,
  service2,
  service3,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
} from "@/utils";

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
    title: "Develop",
    desc: "We build a unique brand identity that resonates with your business and connects to your audience ",
    img: service1,
  },
  {
    id: 2,
    title: "Design",
    desc: "We build a unique brand identity that resonates with your business and connects to your audience ",
    img: service2,
  },
  {
    id: 2,
    title: "Brand",
    desc: "We build a unique brand identity that resonates with your business and connects to your audience ",
    img: service3,
  },
];

export const labelOne = {
  type: "Process",
  label: "You request, we make it happen",
  desc: "Our process is as simple as possible.",
};
export const labelTwo = {
  type: "Services",
  label: "Apps, websites & branding",
  desc: "Get everything you need in one place",
};
export const labelThree = {
  type: "Features",
  label: "Why work with us?",
  desc: "Our process is as simple as possible.",
};
export const labelFour = {
  type: "Projects",
  label: "Featured Projects",
  desc: "Get a glimpse of our work",
};
export const labelFive = {
  type: "Pricing",
  label: "One fee, Unlimited designs",
  desc: "Pick the plan that suits your needs the most",
};

export const projectColOne = [
  {
    id: 1,
    title: "SaaSmart",
    desc: "designed and developed a free website template for SaaS startups",
    img: project1,
  },
  {
    id: 2,
    title: "Crypt",
    desc: "designed and developed a website template for mobile apps",
    img: project2,
  },
  {
    id: 3,
    title: "Convert",
    desc: "designed and developed a modern website for a CRM SaaS startup",
    img: project3,
  },
];
export const projectColTwo = [
  {
    id: 1,
    title: "Substackr",
    desc: "designed and developed a free website template for SaaS startups",
    img: project4,
  },
  {
    id: 2,
    title: "Framer.ing",
    desc: "designed and developed a website template for mobile apps",
    img: project5,
  },
  {
    id: 3,
    title: "Framer: Beginner to Pro ",
    desc: "designed and developed a website for a Framer course",
    img: project6,
  },
];
