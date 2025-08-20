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