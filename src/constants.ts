import {
  Code2,
  Palette,
  Globe,
  Database,
  Cloud,
  Search,
  Layout,
  Layers,
  Smartphone,
  Cpu,
  Zap,
  BarChart,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  CheckCircle2,
  Clock,
  Calendar,
  Monitor,
  Smartphone as Mobile,
  Figma,
  Globe as Wordpress,
  Paintbrush,
  ShieldCheck,
  Server,
  Activity,
  User,
  Home,
  MessageSquare,
  Briefcase,
  Wrench,
  LogOut
} from 'lucide-react';

export type ProjectStatus = 'Completed' | 'In Progress' | 'Planned';

export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'Web Application' | 'Web Design' | 'Graphic Design';
  status: ProjectStatus;
  tech: string[];
  description: string;
  image?: string;
  link?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  icon?: any;
  color?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: any;
}

export const SKILLS: Skill[] = [
  { name: 'HTML', percentage: 98 },
  { name: 'CSS', percentage: 95 },
  { name: 'React', percentage: 90 },
  { name: 'PHP', percentage: 92 },
  { name: 'SQL', percentage: 95 },
  { name: 'WordPress', percentage: 83 },
  { name: 'jQuery', percentage: 68 },
  { name: 'Python', percentage: 63 },
  { name: 'SEO', percentage: 76 },
  { name: 'Backend Proficiency', percentage: 92 },
  { name: 'PHP/Node', percentage: 95 }
];

export const SERVICES: Service[] = [
  {
    title: 'Web Design',
    description: 'Crafting visually stunning and user-centric interfaces that captivate and convert.',
    icon: Palette
  },
  {
    title: 'Web Application Development',
    description: 'Building robust, scalable applications tailored to your complex business needs.',
    icon: Layers
  },
  {
    title: 'Web Development (Full Stack)',
    description: 'End-to-end solutions combining elegant frontends with powerful backend logic.',
    icon: Code2
  },
  {
    title: 'Branding',
    description: 'Defining and refining your digital identity to stand out in a crowded market.',
    icon: Zap
  },
  {
    title: 'Hosting Services',
    description: 'Reliable, high-performance cloud hosting solutions for seamless deployment.',
    icon: Cloud
  },
  {
    title: 'SEO',
    description: 'Optimizing your digital presence to dominate search results and drive traffic.',
    icon: Search
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'College Website',
    category: 'Web Development',
    status: 'Completed',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    description: 'A comprehensive academic portal for managing student resources and information.'
  },
  {
    id: '2',
    title: 'Tech Portal',
    category: 'Web Application',
    status: 'Completed',
    tech: ['React', 'Node.js', 'MongoDB'],
    description: 'A dynamic platform for sharing technology news and community discussions.'
  },
  {
    id: '3',
    title: 'Garage Management',
    category: 'Web Application',
    status: 'In Progress',
    tech: ['Laravel', 'Vue.js', 'MySQL'],
    description: 'Streamlining operations for automotive service centers with real-time tracking.'
  },
  {
    id: '4',
    title: 'Online Admission',
    category: 'Web Development',
    status: 'Completed',
    tech: ['PHP', 'jQuery', 'SQL'],
    description: 'Automated application and registration system for educational institutions.'
  },
  {
    id: '5',
    title: 'Pathology Website',
    category: 'Web Development',
    status: 'Completed',
    tech: ['WordPress', 'Elementor'],
    description: 'Professional medical lab website with report lookup functionality.'
  },
  {
    id: '6',
    title: 'Logo Design Pack',
    category: 'Graphic Design',
    status: 'Completed',
    tech: ['Illustrator', 'Photoshop'],
    description: 'A collection of visual identities crafted for various startups and established brands.'
  },
  {
    id: '7',
    title: 'Nam Jap Counter',
    category: 'Web Application',
    status: 'Completed',
    tech: ['React', 'Tailwind CSS', 'JS'],
    description: 'A spiritual utility app for tracking daily chants and progress.'
  },
  {
    id: '8',
    title: 'AI Podcast',
    category: 'Web Application',
    status: 'Completed',
    tech: ['Next.js', 'AI APIs', 'TypeScript'],
    description: 'Automated podcast generation system utilizing cutting-edge AI models.'
  },
  {
    id: '9',
    title: 'Simple Todo List',
    category: 'Web Application',
    status: 'Completed',
    tech: ['React', 'Tailwind', 'localStorage'],
    description: 'Minimalist task management tool with offline persistence.'
  },
  {
    id: '10',
    title: 'Weather Checker',
    category: 'Web Development',
    status: 'Completed',
    tech: ['React', 'Tailwind', 'OpenWeather API'],
    description: 'Real-time weather tracking with location-aware forecasting.'
  },
  {
    id: '11',
    title: 'Personal Notes App',
    category: 'Web Application',
    status: 'Completed',
    tech: ['React', 'Markdown', 'localStorage'],
    description: 'A markdown-powered notes application for quick thought capture.'
  },
  {
    id: '12',
    title: 'Daily Expense Tracker',
    category: 'Web Application',
    status: 'Completed',
    tech: ['React', 'Chart.js', 'localStorage'],
    description: 'Financial dashboard for visualizing and managing daily spending habits.'
  }
];

export const NAV_ITEMS = [
  { label: 'Dashboard', icon: Home, id: 'dashboard' },
  { label: 'Profile', icon: User, id: 'profile' },
  { label: 'Skills', icon: Wrench, id: 'skills' },
  { label: 'Services', icon: Briefcase, id: 'services' },
  { label: 'Projects', icon: Layout, id: 'projects' },
  { label: 'Contact', icon: MessageSquare, id: 'contact' },
  { label: 'Logout', icon: LogOut, id: 'logout' }
];
