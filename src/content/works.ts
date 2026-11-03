import type { Work } from "./types";

export const works: Work[] = [
  {
    slug: "ai-in-knowledge-work",
    title: "AI in knowledge work",
    media: "/images/AIwork.png",
    paragraphs: [
      "What type of Human-AI collaboration will be best for future knowledge workers?",
      "Study done for the Future Methods research group in Aalto University deparment of design, which combines methods from future studies to HCI reserch.",
      "Status ongoing, will add results when they are published",
      "Master thesis study",
      "2024 Aalto University",
    ],
  },
  {
    slug: "creativerse",
    title: "Creativerse",
    media: "/images/creativerse/closeup.jpg",
    paragraphs: [
      "Turn lego buildings into finished products with generative artificial intelligence",
      "Build together with Lu Zhouyating, Hannah Qiu, and Yunyin Lou",
      "Course work for DFP008 Artifice: Aesthetics and Ethics of Artificial Intelligence",
      "2023 Eindhoven University of Technology",
    ],
    hasPage: true,
  },
  {
    slug: "voiceyoga",
    title: "VoiceYoga",
    media: "/images/voiceyoga.png",
    paragraphs: [
      "A web-based yoga application for blind people.",
      "The application uses image recognition to give user advice on getting to the yoga positions.",
      "For interaction, the application uses a combination of text-to-speech, voice commands, and a graphical user interface.",
      "Build together with Tuomo Väänänen, Yujun Zhu, Yifan Hao and Xinyi Cao",
      "Course project for the course CS-E4200 - Emergent User Interfaces",
      "2023 Aalto University",
    ],
    hasPage: true,
  },
  {
    slug: "kutsu",
    title: "Kutsu.app",
    media: "/images/kutsu.png",
    paragraphs: [
      "Web based event signup application.",
      "Personal project for web design and developement.",
      "2022",
    ],
    hasPage: true,
  },
  {
    slug: "amapper",
    title: "aMapper",
    media: "/images/aMapper.png",
    paragraphs: ["Browser based AI Affinity mapper tool", "A weekend project", "2022"],
    hasPage: true,
  },
  {
    slug: "menddie",
    title: "Menddie.com",
    media: "/images/menddie.png",
    paragraphs: [
      "Put a team together for one mission; let's make buying repairs easier than buying new products.",
      "2020",
    ],
    hasPage: true,
  },
  {
    slug: "valmet",
    title: "Sustainability in paper machines",
    media: "/images/valmet.jpg",
    paragraphs: [
      "How could you use bio-based materials in a paper machine?",
      "Summer project for Valmet that included material research, multiple design examples, sustainability calculations and an engineering prototype.",
      "2019 Design Foundation Finland",
    ],
  },
  {
    slug: "experimental-cafeteria",
    title: "Experimental Cafeteria",
    media: "/images/paulig.png",
    paragraphs: [
      "What if cafeteria would find new meaning as a platform for product testing and qualitative feedback?",
      "2018 Kuohu creative hackathon",
    ],
    hidden: true,
  },
  {
    slug: "course-collector",
    title: "Course Collector",
    media: "/images/coursecollector.png",
    paragraphs: [
      "What if finding and selecting courses at university would be as easy as shopping in an online store?",
      "Service design course work.",
      "2018 Aalto University",
    ],
  },
  {
    slug: "dash-2018",
    title: "Dash design hackathon 2018",
    media: "/images/dash.jpg",
    paragraphs: [
      "Hackathon that combines design, tech and business people for a weekend to solve problems with modern design methods.",
      "Organised by Aalto entrepreneurship society, my responsibilities were in ensuring the design spirit of the event like forming the challenges, handling participants and arranging judging process.",
      "2018 Aaltoes",
    ],
  },
  {
    slug: "robot-rabbit",
    title: "Robot rabbit",
    media: "/images/roborabbit.mp4",
    paragraphs: [
      "Should we replace all the rabbits with robotic ones?",
      "Art course work",
      "2018 Aalto University",
    ],
  },
  {
    slug: "water-purifier",
    title: "Water purifier",
    media: "/images/purifier.jpg",
    paragraphs: [
      "Water purifier for hikers who need clean water for drinking and cooking. Users can filter bacteria and virus free water from streams and lakes or other sources.",
      "Course work that focused on design for manufacturing.",
      "2018 Aalto University",
    ],
  },
  {
    slug: "tape-applicator",
    title: "Tape applicator",
    media: "/images/tapeapplicator.png",
    paragraphs: [
      "Would you like to apply office tape with only one hand and never lose the end again?",
      "This course work included detecting and defining a need, 3D modeling and prototyping by 3D printing.",
      "2018 Aalto University",
    ],
    hidden: true,
  },
  {
    slug: "restaurant-light",
    title: "Restaurant light",
    media: "/images/lustre.png",
    paragraphs: [
      "Ceiling light formed from sheet metal. Designed to be placed over a dining table where its cones divide the right amount of light on the table, to the ceiling and surrounding.",
      "Course work where we designed lights to match with style and imago of different restaurants in Helsinki.",
      "2018 Aalto University",
    ],
    hidden: true,
  },
  {
    slug: "chest-of-drawers",
    title: "Chest Of Drawers",
    media: "/images/drawer.jpg",
    paragraphs: [
      "Combining the shapes of a rococo drawer with Scandinavian style pale wood executed with modern woodworking methods.",
      "Final work for my wood artisan degree included design and fabrication.",
      "2015 Omnia",
    ],
  },
];

export const visibleWorks = works.filter((work) => !work.hidden);

export function workAnchor(work: Work) {
  return `/work#${work.slug}`;
}

export function workPagePath(work: Work) {
  return work.hasPage ? `/work/${work.slug}` : undefined;
}

export function workCredit(work: Work) {
  return work.paragraphs[work.paragraphs.length - 1];
}
