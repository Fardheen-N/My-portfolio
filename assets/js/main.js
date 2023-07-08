import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Mahatma montessori residential high school - 
  SSLC - 88.2% (2018 - 2019)<br/>
  SRV Boys matric high school - 
  HSC - 90.6% (2020 - 2021)<br/>
  Sri Eshwar college of engineering <br/>
  Bachelor of Computer Science - 
  CGPA - 8.3*`,
  "",
  "Education",
  ""
);

hoverChangeExperience(
  ".zuplae",
  `Problem Solving<br/>
  Fast learner<br/>
  
  Collaborative In Nature<br/>
  
  Critical thinking<br/>
  
  logical reasoning
  `,
  "",
  "Personal skills",
  ""
);

hoverChangeExperience(
  ".codigofontetv",
  `Leetcode : 1450+ (solved 200+ problem)<br/>

  code chef : 2 star coder`,
  "",
  "Coding skills",
  ""
);

hoverChangeExperience(
  ".contweb",
  `Java, C++, HTML, CSS, JS SQL<br/>
  Front End & Back End Coding<br/>
  Competitive coding<br/>`,
  "",
  "Technincal skills",
  ""
);

hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark elements to define what information the page will display."
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language composed of “layers”, created for the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features that aren't available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on building user interfaces in a componentized way."
);
hoverChangeDescription(
  ".next",
  "Node.js is a web framework that enables functionality like server-side rendering and static website generation for React-based web sites."
);
hoverChangeDescription(
  ".styled",
  "styled-components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS codes inside Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Visual Studio Code is a free and open-source code editor developed by Microsoft."
);
hoverChangeDescription(
  ".typescript",
  "MongoDB is a document-oriented un-structural database that stores JSON-like documents and more."
);
hoverChangeDescription(
  ".radix",
  "Radix is a library that provides accessible, unstyled components for building React applications."
);
hoverChangeDescription(
  ".cypress",
  "XAMPP is a free and open-source cross-platform web server solution stack."
);
hoverChangeDescription(
  ".storybook",
  "MySQL is an open-source relational database management system (RDBMS)."
);
