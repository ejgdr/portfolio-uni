export interface Project {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  technologies: string[];
  story: string;
  partialCode: string;
  lessonsLearned: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  email: string;
  tagline: string;
  bio: string;
  socials: Social[];
  resumeUrl: string;
}
