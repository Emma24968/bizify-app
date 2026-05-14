import Image from "next/image";
import logo1 from "@/public/logo1_1.png";
import logo2 from "@/public/logo2_1.png";
import logo3 from "@/public/logo3_1.png";
import logo4 from "@/public/logo4_1.png";
import logo5 from "@/public/logo5_1.png";
import logo6 from "@/public/logo6_1.png";
import digital from "@/public/Digital.jpg";
import design from "@/public/market.jpg";
import robotics from "@/public/Robotics.jpg";
import core from "@/public/core.jpg";
import value from "@/public/value.jpg";
import development from "@/public/web-dev.jpg";
import abstract from "@/public/Abstract.png";
import experience from "@/public/experience.svg";
import check from "@/public/check.svg";
import cancel from "@/public/cancel.svg";
import risk from "@/public/risk.svg";
import investment from "@/public/investment.svg";
import marketing from "@/public/marketing.svg";
import planning from "@/public/planning.svg";
import strategy from "@/public/strategy.svg";
import headPhone from "@/public/headPhone.svg";
import tax from "@/public/tax.svg";
import team1 from "@/public/Team1.jpg";
import team2 from "@/public/Team2.jpg";
import team3 from "@/public/Team3.jpg";
import team4 from "@/public/Team4.jpg";
import christy from "@/public/christy.jpg";
import juan from "@/public/juan.jpg";
import mizan from "@/public/mizan.jpg";
import sofia from "@/public/sofia.jpg";
import tony from "@/public/tony.jpg";
import amy from "@/public/amy.jpg";
import ig1 from "@/public/ig1.jpg";
import ig2 from "@/public/ig2.jpg";
import ig4 from "@/public/ig4.jpg";
import ig3 from "@/public/ig3.jpg";
import ig5 from "@/public/ig5.jpg";
import ig6 from "@/public/ig6.jpg";
import project1 from "@/public/project1.webp";
import project2 from "@/public/project2.webp";
import project3 from "@/public/project3.webp";
import project4 from "@/public/project4.webp";
import budget from "@/public/budget.webp";
import wallet from "@/public/wallet.webp";
import automation from "@/public/automation.webp";
import intergration from "@/public/intergration.webp";
import tasks from "@/public/tasks.webp";
import developer from "@/public/developer.webp";
import deployment from "@/public/deployment.webp";
import data from "@/public/data.webp";
import crypto from "@/public/crypto.webp";
import blog1 from "@/public/blog1.jpg";
import blog2 from "@/public/blog2.jpg";
import blog3 from "@/public/blog3.jpg";

export const gallerys = [ig1, ig2, ig3, ig4, ig5, ig6];
export const clients = [logo1, logo2, logo3, logo4, logo5, logo6];
export const services = [
  {
    image: robotics,
    title: "Robotics",
  },
  {
    image: development,
    title: "Web Development",
  },
  {
    image: design,
    title: "UI/UX Design",
  },
  {
    image: digital,
    title: "Digital Marketing",
  },
];

export const cards = [
  {
    image: core,
    logo: experience,
  },
];
export const card2 = [
  {
    image: value,
    logo: abstract,
  },
];
export const checks = [
  { image: check, description: "100% Better Results" },
  { image: check, description: "Promised Timeline" },
  { image: check, description: "Budget Friendly Theme" },
  { image: check, description: "Happy Customers" },
];
export const About_checks = [
  {
    image: check,
    description: "Created 40+ unique sections with responsiveness.",
  },
  {
    image: check,
    description: "You will able to build a new site with an ease.",
  },
  {
    image: check,
    description: "Booster is made for stay ahead from the compitition.",
  },
];
export const teams = [
  { image: team1, name: "Brooklyn Simmons", position: "Founder" },
  { image: team3, name: "Sophia Rodriguez", position: "Creative Director" },
  { image: team2, name: "Marvin McKinney", position: "Product Designer" },
  { image: team4, name: "Alexander Cameron", position: "Lead Developer" },
];
export const members = [
  { image: team1, name: "Brooklyn Simmons", position: "Finance Advisor" },
  { image: team3, name: "Sophia Rodriguez", position: "Finance Advisor" },
  { image: team2, name: "Marvin McKinney", position: "Business Engr." },
];

export const projects = [
  {
    image: project1,
    title: "Cryptocurrency",
    description: "Skill Development",
  },
  {
    image: project3,
    title: "Design & Development",
    description: "Website Development",
  },
  { image: project4, title: "UI/UX Design", description: "Design" },
  {
    image: project2,
    title: "Business Development",
    description: "Business Planning",
  },
];

export const serviceCards = [
  {
    image: strategy,
    id: "Finance-Planning",
    title: "Finance Planning",
    description:
      "It sounds like you referring financial planning! Financial planning involves goals, analyzing your current financial situation.",
    highlighted: true,
  },
  {
    image: tax,
    id: "Tax-File-Audit",
    title: "Tax File Audit",
    description:
      "It sounds like you referring financial planning! Financial planning involves goals, analyzing your current financial situation.",
  },
  {
    image: risk,
    id: "Risk-Management",
    title: "Risk Management",
    description:
      "It sounds like you referring financial planning! Financial planning involves goals, analyzing your current financial situation.",
  },
  {
    image: investment,
    id: "Investment-Idea",
    title: "Investment Idea",
    description:
      "It sounds like you referring financial planning! Financial planning involves goals, analyzing your current financial situation.",
  },
  {
    image: planning,
    id: "Business-Strategy",
    title: "Business Strategy",
    description:
      "It sounds like you referring financial planning! Financial planning involves goals, analyzing your current financial situation.",
  },
  {
    image: marketing,
    id: "Marketing-Strategy",
    title: "Marketing Strategy",
    description:
      "It sounds like you referring financial planning! Financial planning involves goals, analyzing your current financial situation.",
  },
];

export const plans = [
  {
    title: "Basic Plan",
    description: "Perfect plan to get started",
    price: "00.00",
    period: "month",
    check: check,
    cancel: cancel,
    description1: "Limited Access Library",
    description2: "Commercia License",
    description3: "Hotline Support 24/7",
    description4: "100+ HTML UI Elements",
    description5: "WooCommerce Builder",
    description6: "Updates for 1 Year",
    button: "Get Your Plan",
  },
  {
    title: "Standard Plan",
    description: "Perfect plan to get started",
    price: "49.00",
    period: "month",
    check: check,
    cancel: cancel,
    description1: "Limited Access Library",
    description2: "Commercia License",
    description3: "Hotline Support 24/7",
    description4: "100+ HTML UI Elements",
    description5: "WooCommerce Builder",
    description6: "Updates for 1 Year",

    button: "Get Your Plan",
  },
  {
    title: "Premium Plan",
    description: "Perfect plan to get started",
    price: "49.00",
    period: "month",
    check: check,
    cancel: cancel,
    description1: "Limited Access Library",
    description2: "Commercia License",
    description3: "Hotline Support 24/7",
    description4: "100+ HTML UI Elements",
    description5: "WooCommerce Builder",
    description6: "Updates for 1 Year",

    button: "Get Your Plan",
  },
];
export const blogs = [blog1, blog2, blog3];
export const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$29",
    tag: "Recommended",
    highlighted: false,
  },
  {
    name: "Professional Plan",
    price: "$49",
    tag: "Most Popular",
    highlighted: true,
  },
  {
    name: "Enterprise Plan",
    price: "$79",
    tag: "Best Value",
    highlighted: false,
  },
];

export const serviceList = [
  {
    id: "Finance Planning",
    name: "Finance Planning",
    highlighted: true,
  },
  {
    id: "Tax File Audit",
    name: "Tax File Audit",
  },
  {
    id: "Risk Management",
    name: "Risk Management",
  },
  {
    id: "Investment Idea",
    name: "Investment Idea",
  },
  {
    id: "Business Strategy",
    name: "Business Strategy",
  },
  {
    id: "Marketing Strategy",
    name: "Marketing Strategy",
  },
];

export const contact = [
  {
    image: headPhone,
    header: `Don't hesitate to get in touch with us.`,
    description:
      "A content management system helps you create, manage, and publish content.",
    button: "Get in Touch",
  },
];

export const Servicedetails = [
  "Creating and editing content",
  "Workflows, reporting, and content organization",
  "User & role-based administration and security",
  "Flexibility, scalability, and performance and analysis",
  "Multilingual content capabilities",
];
export const Teams = [
  {
    id: "sophia-rodriguez",
    image: team3,
    name: "Sophia Rodriguez",
    position: "Creative Director",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "marvin-mckinney",
    image: team2,
    name: "Marvin McKinney",
    position: "Product Designer",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "alexander-cameron",
    image: team4,
    name: "Alexander Cameron",
    position: "Lead Developer",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "leslie-alexander",
    image: amy,
    name: "Leslie Alexander",
    position: "Finance Advisor",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "megan-oustin",
    image: christy,
    name: "Megan Oustin",
    position: "Human Resources Manager",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "juan-boone",
    image: juan,
    name: "Juan Boone",
    position: "Capabilities Leader",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "dora-schwartz",
    image: mizan,
    name: "Dora Schwartz",
    position: "Chief Executive Officer",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "charlotte-sophia",
    image: sofia,
    name: "Charlotte Sophia",
    position: "CEO Consulting Company",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
  {
    id: "juhani-pallasmaa",
    image: tony,
    name: "Juhani Pallasmaa",
    position: "Senior Consulting Developer",
    skills: [
      { name: "React", value: "95%" },
      { name: "JavaScript", value: "90%" },
      { name: "UI Design", value: "75%" },
    ],
  },
];

export const skills = [
  { name: "Productivity", value: "90%" },
  { name: "Digital Marketing", value: "80%" },
  { name: "Technology", value: "85%" },
];
export const faqs = [
  {
    question: "How to choose health insurance?",
    answer: `If you ask our clients what it’s like working 36, they’ll  about how much we care about their success.`,
  },
  {
    question: "How does life insurance help my family?",
    answer: `If you ask our clients what it’s like working 36, they’ll  about how much we care about their success.`,
  },
  {
    question: "Essential types of business insurance?",
    answer: `If you ask our clients what it’s like working 36, they’ll  about how much we care about their success.`,
  },
];

export const Testimonials = [
  {
    id: "sophia-rodriguez",
    image: team3,
    name: "Sophia Rodriguez",
    position: "Creative Director",
    text: "“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already ar company and the reviews that I have already are all excellent and the reviews code ”",
  },
  {
    id: "marvin-mckinney",
    image: team2,
    name: "Marvin McKinney",
    position: "Product Designer",
    text: "“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already ar company and the reviews that I have already are all excellent and the reviews code ”",
  },
  {
    id: "alexander-cameron",
    image: team4,
    name: "Alexander Cameron",
    position: "Lead Developer",
    text: "“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already ar company and the reviews that I have already are all excellent and the reviews code ”",
  },
  {
    id: "leslie-alexander",
    image: amy,
    name: "Leslie Alexander",
    position: "Finance Advisor",
    text: "“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already ar company and the reviews that I have already are all excellent and the reviews code ”",
  },
  {
    id: "megan-oustin",
    image: christy,
    name: "Megan Oustin",
    position: "Human Resources Manager",
    text: "“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already ar company and the reviews that I have already are all excellent and the reviews code ”",
  },
  {
    id: "juan-boone",
    image: juan,
    name: "Juan Boone",
    position: "Capabilities Leader",
    text: "“ Working with several word themes and templates the last years only can say this is best in every level use it for my reviews that I have already ar company and the reviews that I have already are all excellent and the reviews code ”",
  },
];

export const blogpost = [
  {
    id: 'Top-5-Benefits-of-Auto-Finance-Coverage',
    title: 'Top 5 Benefits of Auto Finance Coverage',
    image: budget
  },
  {
    id: 'How-to-Craft-The-Perfect-Web-Design-and-Developer',
    title: 'How to Craft The Perfect Web Design and Developer',
    image: deployment
  },
  {
    id: 'Top-5-Benefits-of-Auto-Finance-Coverage-2',
    title: 'Top 5 Benefits of Auto Finance Coverage',
    image: crypto
  },
  {
    id: 'Building-Your-Own-Personal-Learning-Curriculum',
    title: 'Building Your Own Personal Learning Curriculum',
    image: data
  },
  {
    id: 'Seven-Mistakes-to-Avoid-in-Your-Technical-Interviews',
    title: 'Seven Mistakes to Avoid in Your Technical Interviews',
    image: wallet
  },
  {
    id: 'How-to-become-a-better-Speaker-at-Conferences',
    title: 'How to become a better Speaker at Conferences',
    image: tasks
  },
  {
    id: 'How-to-Search-For-a-Web-Developer-Job-Abroad',
    title: 'How to Search For a Web Developer Job Abroad',
    image: developer
  },
  {
    id: 'How-Craft-The-Perfect-Web-Design-and-Developer',
    title: 'How Craft The Perfect Web Design and Developer',
    image: automation
  },
  {
    id: 'The-Missing-Advice-I-Needed-When-Starting-My-Career',
    title: 'The Missing Advice I Needed When Starting My Career',
    image: intergration
  },
]