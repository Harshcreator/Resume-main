import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Harsh Singh",
  EMAIL: "hashsingh220603@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Home Page",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Blogs & Documentation",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/Harshcreator"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/harsh-singh22",
  },
  { 
    NAME: "Leetcode",
    HREF: "https://leetcode.com/u/jayson22/",
  }
];
