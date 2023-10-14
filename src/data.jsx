import color from "./assets/color.png";
import lorem from "./assets/lorem.png";
import semester from "./assets/semester.png";
import stock from "./assets/stock.png";
import cms from "./assets/cms.png";
export const education = [
    {
      id: 0,
      school: "National Institute of Technology, Hamirpur",
      date: "Dec 2020 - Present",
      grade: "8.96",
    },
    {
      id: 1,
      school: "Shri Krishna Public School, Indore",
      date: "Apr 2018 - Apr 2019",
      grade: "82.6%",
    },
    {
      id: 2,
      school: "Indus World School, Indore",
      date: "Apr 2016 - Apr 2017",
      grade: "93.1%",
    },
  ];

  export const projects = [
    {
      id: 0,
      title: "Color-Generator",
      description:
        "Developed a application that generates different shades of the color searched using hex-code. Also can copy the hex-code of different shades to use in different projects",
      image: color,
      tags: ["React Js"],
      category: "React",
      github: "https://github.com/devloper016/Color-Generator",
      webapp: "https://color-generator-a0753a.netlify.app/",
    },
    {
      id: 1,
      title: "Stock Images",
      description:
        "Applications for Searching Images for Projects. Made using Unsplash Api.Dark Mode is also available.",
      image:
        stock,
      tags: [
        "React Js",
        "React-Query"
      ],
      category: "React",
      github: "https://github.com/devloper016/Stock-Images",
      webapp: "https://stockimage.netlify.app/",
    },
    {
      id: 2,
      title: "Semester-Result",
      description:
        "Semester Detail Website is an online platform where a student can access the details related to different courses of all semesters with comfort and ease. It contains information on various fronts for all courses in a user friendly and easy to navigate manner",
      image:
        semester,
      tags: ["Next Js","Mongo Db","Tailwind"],
      category: "React",
      github: "https://github.com/devloper016/Semester-Detail-Website",
      webapp: "https://sem-detail-app.vercel.app/",
      member: [
        {
          name: "Aditya Tiwari",
          img: "https://avatars.githubusercontent.com/u/85797633?v=4/64485885?v=4",
          linkedin: "https://www.linkedin.com/in/aditya-tiwari-438087203/",
          github: "https://github.com/devloper016",
        },
        {
          name: "Prathmesh Chhabra",
          img: "https://avatars.githubusercontent.com/u/92320908?v=4",
          linkedin: "https://www.linkedin.com/in/prathmesh-chhabra-51760719b/",
          github: "https://github.com/p-chhabra",
        },
        {
          name: "Aaditya Gagneja",
          img: "https://avatars.githubusercontent.com/u/92568189?v=4",
          linkedin: "https://www.linkedin.com/in/aaditya-gagneja-b727a0203/",
          github: "https://github.com/Gagneja1512",
        },
        {
          name: "Jayant Saini",
          img: "https://avatars.githubusercontent.com/u/89707238?v=4",
          linkedin: "https://www.linkedin.com/in/jayant-saini-59803123a/",
          github: "https://github.com/SainiJayant-17",
        },
      ],
    },
    {
      id: 3,
      title: "Lorem-Ispum Generator",
      description:
        "This is a lorem ipsum generator made using React JS. It generates random lorem ipsum text. It also has a copy button to copy the text.",
      image:
        lorem,
      tags: ["React Js"],
      category: "React",
      github: "https://github.com/devloper016/Lorem-Ispum",
      webapp: "https://lorem-ispum.netlify.app/",
    },
    {
      id: 4,
      title: "CMS ",
      description:
        "A content management website, uses contentful as a headless CMS and React Js as a frontend framework.Manages my Projects",
      image:
        cms,
      tags: ["React  JS","Contentful", "Axios"],
      category: "React",
      github: "https://github.com/devloper016/cms-project",
      webapp: "https://cms-projects.netlify.app/",
    },
    {
      id: 5,
      title: "Paint",
      description:
        "A simple paint application made with C++. It has a sidebar where users can select the color and the size of the brush using keyboard. It is made using graphics.h library.",
      image:
        "https://user-images.githubusercontent.com/85797633/223653345-673dcc2a-51a5-413a-ad1b-79d5887a5d1f.png",
      tags: ["C++"],
      category: "Other",
      github: "https://github.com/devloper016/paint",
      webapp: "",
    },
  ];