// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Michael',
  middleName: '',
  lastName: 'Chen',
  message: ' Full-Stack Developer ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/mikechendev',
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/michael-chen-74b973117/',
    },
    {
      image: 'fa-angellist',
      url: 'https://angel.co/u/michael-chen-157',
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: 'About Me',
  imageLink: '',
  imageSize: 375,
  message:
    "I'm a software engineer that enjoys collaborating to solve problems. I love that the tech industry is ever-evolving and am always working to grow my skills alongside it. Outside of coding, I enjoy gaming and I'm sadly, a massive NY sports fan.",
  resume:
    'https://docs.google.com/document/d/1XH0qFneB253Ml5Bn33eFjmPme1u8ETl-JRZL2nPZyfk/edit?usp=sharing',
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: 'Recent Projects',
  gitHubUsername: 'mikechendev', //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: [
    'slaq',
    'f1-2021-drivers-championship-visualization',
    'dina-dopt',
  ],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: '',
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
    {
      img: '',
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
    },
  ],
  imageSize: {
    width: '615',
    height: '450',
  },
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: 'Skills',
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: 'Contact Me',
  message: 'Please feel free to email me at',
  email: 'michael.chen.1120@gmail.com',
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    // {
    //   role: 'Software Engineer', // Here Add Company Name
    //   companylogo: '',
    //   date: 'June 2018 – Present',
    // },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: '',
    //   date: 'May 2017 – May 2018',
    // },
  ],
};

// Blog SECTION
// const blog = {
//   show: false,
// };

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  experiences,
};
