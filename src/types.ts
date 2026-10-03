export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Exploring';
  category: 'Programming' | 'Web Development' | 'Artificial Intelligence' | 'Tools';
  description: string;
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  highlights: string[];
}

export interface RoadmapMilestone {
  year: string;
  stage: string;
  title: string;
  description: string;
  skills: string[];
  status: 'Completed' | 'In Progress' | 'Planned';
}

export interface PromptTemplate {
  id: string;
  title: string;
  target: string;
  content: string;
}
