import { Skill, Project, RoadmapMilestone, PromptTemplate } from '../types';

export const PERSONAL_INFO = {
  name: 'L. Pavan Raju',
  title: 'B.Tech 1st Year CSE Student',
  targetRole: 'Aspiring AI Engineer',
  department: 'Computer Science & Engineering',
  email: 'pavankumarraju86@gmail.com',
  github: 'https://github.com/pavankumarraju86-dotcom',
  linkedinDefault: 'https://www.linkedin.com/in/pavan-raju-49096a439',
  bio: 'First-year B.Tech Computer Science student with a passionate drive toward Artificial Intelligence and Machine Learning. Currently building strong foundations in Python programming, web development architectures, and practical Generative AI workflows.',
  location: 'India',
  status: 'Open to Learning Collaborations & Beginner Tech Projects',
};

export const SKILLS: Skill[] = [
  {
    name: 'Python (Basic)',
    level: 'Beginner',
    category: 'Programming',
    description: 'Data types, control structures, functions, file operations, and algorithmic logic solving.',
    iconName: 'Terminal',
  },
  {
    name: 'Web Development (Basic)',
    level: 'Beginner',
    category: 'Web Development',
    description: 'Semantic HTML5, CSS3 styling, responsive layouts, basic JavaScript, and component-based UI.',
    iconName: 'Globe',
  },
  {
    name: 'Generative AI (Basic)',
    level: 'Beginner',
    category: 'Artificial Intelligence',
    description: 'Prompt engineering techniques, multimodal prompt design, LLM integration, and AI-assisted workflows.',
    iconName: 'Sparkles',
  },
  {
    name: 'Git & Version Control',
    level: 'Beginner',
    category: 'Tools',
    description: 'Git repositories, committing code, branch management, and publishing on GitHub.',
    iconName: 'GitBranch',
  },
  {
    name: 'Google AI Studio & LLM Tools',
    level: 'Beginner',
    category: 'Tools',
    description: 'Experimenting with system prompts, temperature tuning, and testing Gemini capabilities.',
    iconName: 'Bot',
  },
  {
    name: 'Problem Solving & Math',
    level: 'Beginner',
    category: 'Programming',
    description: 'Discrete math foundations, analytical thinking, and algorithmic approach to real-world problems.',
    iconName: 'BrainCircuit',
  },
];

export const ROADMAP: RoadmapMilestone[] = [
  {
    year: 'Year 1 - Semester 1 & 2',
    stage: 'Foundations & Exploration',
    title: 'Core Computing & Python Fluency',
    description: 'Started B.Tech CSE journey. Mastering core Python, logic development, foundational web tech (HTML/CSS/JS), and exploring the basics of Generative AI.',
    skills: ['Python Fundamentals', 'Web Development Basics', 'Prompt Engineering', 'Git & GitHub'],
    status: 'In Progress',
  },
  {
    year: 'Year 2',
    stage: 'Core Data & Algorithms',
    title: 'Data Structures, Algorithms & OOP',
    description: 'Deep diving into Object-Oriented Programming, Linear & Non-Linear Data Structures, SQL/Databases, and mathematical statistics for AI.',
    skills: ['DSA in Python/C++', 'OOP Concepts', 'Linear Algebra & Calculus', 'Database Systems'],
    status: 'Planned',
  },
  {
    year: 'Year 3',
    stage: 'AI & Machine Learning Specialization',
    title: 'Machine Learning & Deep Neural Networks',
    description: 'Mastering classical ML algorithms (Scikit-Learn), neural architectures with PyTorch/TensorFlow, Computer Vision, and Natural Language Processing.',
    skills: ['PyTorch / TensorFlow', 'Machine Learning Algorithms', 'NLP & Embeddings', 'Model Deployment'],
    status: 'Planned',
  },
  {
    year: 'Year 4',
    stage: 'AI Engineering & Production Systems',
    title: 'Advanced AI Engineering & Capstone',
    description: 'Building end-to-end autonomous AI agents, fine-tuning LLMs, scaling AI backends on cloud infrastructure, and securing AI Engineer opportunities.',
    skills: ['Autonomous Agents', 'RAG Architectures', 'Cloud MLOps', 'Production AI Systems'],
    status: 'Planned',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'student-portfolio-hub',
    title: 'Personal Developer Portfolio & AI Prompt Hub',
    category: 'Web & GenAI',
    description: 'A responsive developer portfolio crafted for a 1st year CSE student highlighting academic journey, core skills, GitHub repositories, and an integrated AI Studio prompt generator.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    githubUrl: 'https://github.com/pavankumarraju86-dotcom',
    highlights: [
      'Interactive skill progression matrix',
      'AI Studio Prompt generator for instant reuse',
      'Social and professional links integration',
    ],
  },
  {
    id: 'python-logic-suite',
    title: 'Python Problem-Solving & Utility Suite',
    category: 'Python Programming',
    description: 'A collection of beginner-to-intermediate Python scripts demonstrating modular functions, string manipulation, file handling, and algorithmic problem-solving.',
    techStack: ['Python 3', 'CLI', 'Algorithms'],
    githubUrl: 'https://github.com/pavankumarraju86-dotcom',
    highlights: [
      'Structured modular script architecture',
      'Data structure implementations',
      'Console-based interactive utilities',
    ],
  },
  {
    id: 'genai-prompt-playground',
    title: 'GenAI Prompt Experimenter & Assistant',
    category: 'Generative AI',
    description: 'Hands-on experiments designed to test prompt structuring, zero-shot vs few-shot prompting, and system instructions using Gemini & LLM endpoints.',
    techStack: ['Generative AI', 'Prompt Engineering', 'Python / JSON'],
    githubUrl: 'https://github.com/pavankumarraju86-dotcom',
    highlights: [
      'Structured few-shot prompt templates',
      'Evaluation of token efficiency and response accuracy',
      'Integration with Google AI Studio prototyping',
    ],
  },
  {
    id: 'responsive-web-templates',
    title: 'Modern Responsive Web Mini-Projects',
    category: 'Web Development',
    description: 'Clean responsive web components and landing layouts built to practice semantic markup, responsive design principles, and interactive UI states.',
    techStack: ['HTML5', 'CSS3', 'JavaScript'],
    githubUrl: 'https://github.com/pavankumarraju86-dotcom',
    highlights: [
      'Mobile-first responsive grid layouts',
      'Clean typography and accessible color palettes',
      'Interactive DOM manipulation',
    ],
  },
];

export const AI_STUDIO_PROMPTS: PromptTemplate[] = [
  {
    id: 'full-comprehensive-prompt',
    title: 'Recommended AI Studio Prompt (Comprehensive)',
    target: 'Full Portfolio Generation',
    content: `Act as a senior front-end engineer and UI/UX designer. Build a modern, highly polished, responsive personal developer portfolio web application for L. Pavan Raju, a 1st-year B.Tech Computer Science & Engineering (CSE) student aspiring to become an AI Engineer.

### Profile Information:
- **Name:** L. Pavan Raju
- **Academic Status:** 1st Year B.Tech Computer Science and Engineering (CSE)
- **Career Goal:** Aspiring AI Engineer
- **Current Journey:** Starting his engineering career in the Computer Science department, passionate about the intersection of computer science, algorithms, and practical Artificial Intelligence.
- **Technologies & Skills (Beginner):**
  1. Basic Python (Control structures, functions, script logic, data handling)
  2. Basic Web Development (HTML5, CSS3, modern responsive layouts, basic JavaScript)
  3. Basic Generative AI (Prompt engineering, LLM interfaces, AI workflows)
- **Social & Professional Profiles:**
  - GitHub: https://github.com/pavankumarraju86-dotcom
  - LinkedIn: https://www.linkedin.com/in/pavan-raju-49096a439
  - Contact Email: pavankumarraju86@gmail.com

### Required Portfolio Architecture & Sections:
1. **Hero Section:**
   - Display full name "L. Pavan Raju", role "1st Year B.Tech CSE Student & Aspiring AI Engineer".
   - Clear value proposition highlighting curiosity, work ethic, and ambition to grow into AI Engineering.
   - Quick action buttons: "View Projects & Journey", "GitHub Profile", "Connect on LinkedIn", and "Get in Touch".
2. **About Me:**
   - Personal bio describing his entry into Computer Science at B.Tech, excitement about AI, and disciplined daily learning mindset.
   - Key highlights: Computer Science Fundamentals, Python, Web Development, and GenAI.
3. **Skills Matrix:**
   - Organized by category: Programming (Python), Web Development (HTML/CSS/JS), AI & Tools (Basic GenAI, Google AI Studio, Git/GitHub).
   - Display skill badges with "Beginner" proficiency tags and context descriptions.
4. **Learning Journey & 4-Year Roadmap:**
   - Timeline showcasing Year 1 (Foundations & Python/Web/GenAI), Year 2 (DSA & OOP), Year 3 (Machine Learning & Neural Networks), Year 4 (AI Engineering & Production Systems).
5. **Projects Showcase:**
   - Cards displaying beginner starter projects (Portfolio, Python problem-solving suite, GenAI prompt tools, responsive web mini-apps).
   - Each project with tech stack pills and working link to GitHub (https://github.com/pavankumarraju86-dotcom).
6. **Interactive Connect & Contact:**
   - Social links to GitHub and LinkedIn (https://www.linkedin.com/in/pavan-raju-49096a439).
   - Quick inquiry / message card with friendly feedback confirmation.

### Design Guidelines:
- Clean, aesthetic, modern light UI with subtle dark slate accents.
- Responsive design for mobile, tablet, and desktop.
- Smooth transitions and interactive micro-animations using Motion.
- Icons imported exclusively from lucide-react.`,
  },
  {
    id: 'concise-clean-prompt',
    title: 'Concise AI Studio Prompt (Short & Direct)',
    target: 'Quick AI Studio Build',
    content: `Create a clean, modern personal portfolio website for L. Pavan Raju, a 1st-year B.Tech CSE student aiming to become an AI Engineer. 

Profile details:
- Name: L. Pavan Raju
- Education: 1st Year B.Tech in Computer Science and Engineering
- Ambition: AI Engineer
- Tech Stack: Basic Python, Basic Web Development (HTML/CSS/JS), and Basic Generative AI
- Links:
  - GitHub: https://github.com/pavankumarraju86-dotcom
  - LinkedIn: https://www.linkedin.com/in/pavan-raju-49096a439
  - Email: pavankumarraju86@gmail.com

Features needed:
- Sleek hero section with name, title, bio, and social links
- About section outlining his journey as a 1st year CSE student starting with Python and Web Dev
- Skills breakdown with tags for Python, Web Development, GenAI, and Git
- Academic & AI career learning roadmap (Year 1 to Year 4)
- Featured student projects with links to his GitHub
- Contact section with LinkedIn, GitHub, and email`,
  },
  {
    id: 'ai-engineer-roadmap-prompt',
    title: 'AI Engineering Specialization Prompt',
    target: 'Focus on AI Journey & Projects',
    content: `Build an AI-focused student portfolio and learning showcase for L. Pavan Raju (1st Year B.Tech CSE student and Aspiring AI Engineer). 

Key Focus:
- Highlight the roadmap from 1st-year CSE student knowing Basic Python, Basic Web Development, and Basic GenAI to becoming a full AI Engineer.
- Include interactive roadmap stages (Foundations -> Data Structures & Math -> Machine Learning / Deep Learning -> Autonomous Agents & MLOps).
- Connect his GitHub (https://github.com/pavankumarraju86-dotcom) and LinkedIn (https://www.linkedin.com/in/pavan-raju-49096a439).
- Provide a clean interactive prompt generator tab showing the exact structured prompt used to build this portfolio in Google AI Studio.`,
  },
];
