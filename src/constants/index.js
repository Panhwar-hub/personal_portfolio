import {
  mobile,
  ML,
  fyp,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Java_Logo,
  SK_Learn,
  TF_Logo,
  python,
  MQ_Logo,
  sepcoLogo,
  fiverr,
  sentiment,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "FPGA Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "MySQL",
    icon: MQ_Logo,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Java",
    icon: Java_Logo,
  },
  {
    name: "Scikit Learn",
    icon: SK_Learn,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TensorFlow",
    icon: TF_Logo,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Fiverr",
    icon: fiverr,
    iconBg: "#383E56",
    date: "Oct 2021 - Present",
    points: [
      "I am working as a part-time freelancer where I provide machine learning services",
      "Implementing python based AI-Powerd projects for potential customers from all over the world",
      "Participating in teching sessions and conducing Verilog sessions for customers.",
    ],
  },
  {
    title: "Internship",
    company_name: "Sukkur Electric Power Company",
    icon: sepcoLogo,
    iconBg: "#E6DEDD",
    date: "July 2021 - Aug 2022",
    points: [
      "A six week internship for degree requirement ",
      "Analyzing data collected by electrical engineers from different grid equipments.",
      ],
  },  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sentiment Classifier",
    description:
      "In this project, I utilized the 'kumarmanoj-bag-of-words-meets-bags-of-popcorn' dataset to develop a sentiment classification model. The dataset consists of movie reviews, where each review is labeled with either a positive or negative sentiment.To accomplish the sentiment classification task, I implemented a logistic regression model with softmax activation using Python.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Scikit-Learn",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: sentiment,
    source_code_link: "https://github.com/Panhwar-hub/Machine-Learning/blob/main/sentiment-classification-large-movie-review-dat.ipynb",
  },
  {
    name: "Machine Learning Flow",
    description:
      "This projects includes analysis and comparison of four well known machine learning algorithms.Performance measure is based on AUC- ROC matrix. AUC - ROC curve is a performance measurement for the classification problems at various threshold settings. ROC is a probability curve and AUC represents the degree or measure of separability. An extensive model make using 'Uncleaned Breast Cancer Dataset' Complete flow of machine learning data wranglign, feature engineering, model selection and model evaluation is done in this project",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Feature Engineering",
        color: "green-text-gradient",
      },
      {
        name: "Model Selection",
        color: "pink-text-gradient",
      },
      {
        name: "Sciket-learn",
        color: "blue-text-gradient"
      }
    ],
    image: ML,
    source_code_link: "https://github.com/Panhwar-hub/Machine-Learning/blob/main/machine-learning-project.ipynb",
  },
  {
    name: "Speaker Recognizer",
    description:
      "In this project, I developed a speech recognition system for the Sindhi language using a convolutional neural network (CNN) model implemented with TensorFlow. The objective was to collect a comprehensive voice dataset specific to the Sindhi language, which served as the foundation for training the model. To make the speech recognition system accessible and user-friendly, I deployed it using the Python Kivy module.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "TensorFlow",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
      {
        name: "Kivy",
        color: "blue-text-gradient",
      },
    ],
    image: fyp,
    source_code_link: "https://github.com/Panhwar-hub/Machine-Learning/blob/main/fyp-final-notebook.ipynb",
  },
];

export { services, technologies, experiences, testimonials, projects };
