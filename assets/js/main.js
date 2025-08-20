const expDetail = {
  startDate: "2018",
  projects: 20,
  satisfaction: 95,
};
const heroContent = {
  text: `<span class="h2">Hello, i’m </span>
                                <h1><b>Huseyn Askarov</b> web developer</h1>
                                <p>I craft experiences, not just websites.</p>`,
  file: "./assets/files/resume.pdf",
  img: "assets/images/me.png",
};
const currentYear = new Date().getFullYear();
const aboutMe = {
  header: "Building <span>Scalable & User-Friendly</span> Web Applications",
  text: `I’m a frontend developer passionate about creating clean, responsive, and
                                        user-friendly web applications. With experience in modern frameworks like
                                        Angular and React, I focus on delivering scalable solutions and seamless digital
                                        experiences.`,
  skills: [
    "Frontend Development (Angular, React)",
    "Responsive Web Design (SCSS, Bootstrap, Tailwind)",
    "JavaScript & TypeScript",
    "Dynamic Forms & State Management",
    "API Integration & RESTful Services",
    "Version Control (Git & GitHub)",
    "UI/UX Implementation",
    "Performance Optimization",
  ],
  img: "assets/images/about.jpg",
};
const contactDetails = {
  email: "elsefter.dayi@gmjail.com",
  phone: "+994 70 821 77 74",
  address: "N.Narimanov ave. 203, Baku, Azerbaijan",
};
const experiences = [
  {
    id: 1,
    company: "Freelance",
    position: "Web Developer",
    duration: "01/2024 - Present",
  },
  {
    id: 2,
    company: "LNS LLC",
    position: "Fullstack Developer",
    duration: "02/2022 - 01/2025",
  },
  {
    id: 3,
    company: "At-Geotech LLC",
    position: "Javacsript Developer",
    duration: "06/2021 - 08/2021",
  },
  {
    id: 4,
    company: "Somark LLC",
    position: "Jr. Frontend Developer",
    duration: "05/2017 - 08/2018",
  },
  {
    id: 5,
    company: "Exotic Gallery",
    position: "HTML Manager",
    duration: "07/2013 - 09/2015",
  },
];
const skills = {
  header: "Let’s Explore Popular <span>Skills & Experience</span>",
  text: `With a strong background in frontend development, I specialize in building
                                        modern, responsive, and user-friendly web applications.
                                        I have experience working with Angular, JavaScript, and SCSS to create seamless
                                        user interfaces, while integrating APIs and ensuring performance optimization.
                                        My focus is always on writing clean, maintainable code and delivering digital
                                        solutions that bring real value to users.`,
  skills: [
    {
      id: 1,
      title: "HTML5",
      percent: "100%",
      img: "assets/images/skill1.png",
    },
    {
      id: 2,
      title: "CSS3",
      percent: "100%",
      img: "assets/images/skill2.png",
    },
    {
      id: 3,
      title: "SCSS",
      percent: "90%",
      img: "assets/images/skill3.png",
    },
    {
      id: 4,
      title: "JavaScript",
      percent: "95%",
      img: "assets/images/skill4.png",
    },

    {
      id: 5,
      title: "Jquery",
      percent: "50%",
      img: "assets/images/skill5.png",
    },
    {
      id: 6,
      title: "React",
      percent: "30%",
      img: "assets/images/skill6.png",
    },

    {
      id: 7,
      title: "Angular",
      percent: "80%",
      img: "assets/images/skill7.png",
    },
    {
      id: 8,
      title: "PHP",
      percent: "90%",
      img: "assets/images/skill8.png",
    },
  ],
};
let projects = [
  {
    id: 1,
    title: "LNS e-commerce Website",
    img: "assets/images/project1.jpg",
    work: "Frontend of Website and mobile application",
    description: `I worked on the development of the corporate website for LNS International (lnsint.net),
                                focusing on creating a responsive, user-friendly interface and ensuring modern design
                                standards.`,
    link: "https://lnsint.net",
  },
  {
    id: 2,
    title: "LifeTravel - Website Design",
    img: "assets/images/project2.jpg",
    work: "Front and Backend of website",
    description: `Developed the full-stack web application for LifeTravel, covering both front-end and
                                back-end. Focused on responsive UI/UX, secure APIs, and smooth booking features for a
                                better travel experience.`,
    link: "https://lnstravel.net/en",
  },
  {
    id: 3,
    title: "aloustam.az",
    img: "assets/images/project3.jpg",
    work: "Fullstack Website",
    description: `Built the full-stack platform aloustam.az, connecting skilled craftsmen with customers.
                                Implemented responsive front-end, secure authentication, and efficient back-end logic to
                                ensure smooth posting and browsing of job listings.`,
    link: "",
  },
  {
    id: 4,
    title: "Managment System of Schools and Courses",
    img: "assets/images/project4.jpg",
    work: "Managment system",
    description: `Developed a modern school management system that streamlines student enrollment, class
                                scheduling, exams, and teacher management. Focused on building a user-friendly
                                interface, secure data handling, and efficient performance to meet the needs of
                                educational institutions.`,
    link: "",
  },
];
const contactContent = {
  header: "Let’s Talk For your <span>Next Projects</span>",
  text: `Let’s bring your ideas to life together. Reach out and we’ll find the best
                                    solutionfor your next project.`,
  list: [
    "5+ Years of Experience in Web Development",
    "Professional Frontend Developer",
    "Fullstack Project Development",
    "API Integration & Database Management",
    "Custom Web Application Support",
  ],
};

let yearCounterHero = document.querySelector(".year-count-hero");
let projectCounterHero = document.querySelector(".project-count-hero");
let satisfactionCounterHero = document.querySelector(
  ".satisfaction-count-hero"
);
let heroText = document.querySelector(".hero-text");
let resumeLink = document.querySelector(".resume");
let heroImage = document.querySelector(".hero-image img");
let aboutMeHeader = document.querySelector(".aboutme-content h2");
let aboutMeText = document.querySelector(".aboutme-content p");
let aboutMeSkills = document.querySelector(".about-skills");
let contactEmail = document.querySelector(".mail");
let contactPhone = document.querySelector(".phone");
let aboutImg = document.querySelector(".about-image-part img");
let expGrid = document.querySelector(".exp-grid");
let skillsHeader = document.querySelector(".skill-content-part h2");
let skillsText = document.querySelector(".skill-content-part p");
let skillsGrid = document.querySelector(".skills-grid");
let projectList = document.querySelector(".projects-area .container");
let projectListFirst = `<div class="row justify-content-center">
                    <div class="col-xl-12">
                        <div class="section-title text-center mb-60 wow fadeInUp delay-0-2s">
                            <span class="sub-title mb-15">Latest Works</span>
                            <h2>Explore My <span>Projects</span></h2>
                        </div>
                    </div>
                </div>`;
let projectsHtml = "";
let contactUsHeader = document.querySelector(".contactus h2");
let contactUsText = document.querySelector(".contactus p");
let contactUsList = document.querySelector(".contactus ul");

yearCounterHero.setAttribute(
  "data-stop",
  (currentYear - expDetail.startDate).toString()
);
projectCounterHero.setAttribute("data-stop", expDetail.projects.toString());
satisfactionCounterHero.setAttribute(
  "data-stop",
  expDetail.satisfaction.toString()
);
heroText.innerHTML = heroContent.text;
resumeLink.setAttribute("href", heroContent.file);
heroImage.setAttribute("src", heroContent.img);
aboutMeHeader.innerHTML = aboutMe.header;
aboutMeText.innerHTML = aboutMe.text;
aboutMeSkills.innerHTML = aboutMe.skills
  .map((skill) => `<li>${skill}</li>`)
  .join("");
contactEmail.setAttribute("href", `mailto:${contactDetails.email}`);
contactEmail.innerHTML = contactDetails.email;
contactPhone.setAttribute("href", `callto:${contactDetails.phone}`);
contactPhone.innerHTML = contactDetails.phone;
aboutImg.setAttribute("src", aboutMe.img);
if (aboutMe.img) {
  aboutImg.setAttribute("alt", "About Me");
}
experiences.forEach((exp) => {
  expGrid.innerHTML += `
    <div class="col-xl-5 col-md-6">
      <div class="resume-item wow fadeInUp delay-0-3s">
        <div class="icon">
          <i class="far fa-arrow-right"></i>
        </div>
        <div class="content">
          <span class="years">${exp.duration}</span>
          <h4>${exp.position}</h4>
          <span class="company">${exp.company}</span>
        </div>
      </div>
    </div>`;
});
skillsHeader.innerHTML = skills.header;
skillsText.innerHTML = skills.text;
skills.skills.forEach((skill) => {
  skillsGrid.innerHTML += `
    <div class="col-xl-3 col-lg-4 col-md-6">
      <div class="skill-item wow fadeInUp delay-0-2s">
        <img src="${skill.img}" alt="${skill.title}">
        <h5>${skill.title}</h5>
        <span class="percent">${skill.percent}</span>
      </div>
    </div>`;
});
let projectCount = 1;
let projectStyle = "";
projects.forEach((project) => {
  projectStyle = projectCount % 2 === 0 ? "flex-direction: row-reverse;" : "";
  projectsHtml += `
    <div class="row project-flex-direction align-items-center pb-25" style="${projectStyle}">
                    <div class="col-lg-6">
                        <div class="project-image wow fadeInLeft delay-0-2s">
                            <img src="${project.img}" alt="Project">

                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6">
                        <div class="project-content wow fadeInRight delay-0-2s">
                            <span class="sub-title">${project.title}</span>

                            <h2><a href="${project.link}" target="_blank">${project.work}</a></h2>

                            <p>${project.description}</p>

                            <a target="_blank" href="${project.link}" class="details-btn"><i

                                    class="far fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>`;
  projectCount++;
});
projectList.innerHTML = projectListFirst + projectsHtml;
contactUsHeader.innerHTML = contactContent.header;
contactUsText.innerHTML = contactContent.text;
contactContent.list.forEach((item) => {
  contactUsList.innerHTML += `<li>${item}</li>`;
});