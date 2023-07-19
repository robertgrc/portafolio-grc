const logotext = "Robert";
const meta = {
    title: "Robert Rodriguez",
    description: "I’m Robert Rodriguez Full stack devloper,currently working in Bolivia",
};

const introdata = {
    title: "I’m Robert Rodríguez",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop web apps",
    },
    description: "WELCOME TO MY PORTFOLIO AS A DEVELOPER",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I'm a passionate programmer with experience in web development. Skilled in HTML, CSS, JavaScript, and frameworks like React and C#. Eager to learn and take on new challenges in software development.This condensed version retains the key aspects of your description and highlights your skills, passion, and willingness to learn and grow as a programmer.",
};
const worktimeline = [{
        jobtitle: " Full Stack Developer - Mundo Digital ",
        where: "Cochabamba-Bolivia",
        date: "2023",
    },
    {
        jobtitle: "web Developer - Mundo Digital",
        where: "Cochabamba-Bolivia",
        date: "2022",
    },
    {
        jobtitle: " Front-end Developer - Mundo Digital",
        where: "Cochabamba-Bolivia",
        date: "2022",
    },
];

const skills = [{
        name: "JavaScript",
        value: 90,
    },
    {
        name: "ReactJS",
        value: 90,
    },
    {
        name: "GitHub",
        value: 85,
    },
    {
        name: "NodeJS",
        value: 70,
    },
    {
        name: "Postman",
        value: 75,
    },
    {
        name: "HTML",
        value: 80,
    },
    {
        name: "CSS",
        value: 85,
    },
    {
        name: "Bootstrap",
        value: 70,
    },
];

const services = [
    {
        title: "Website Development:",
        description: "Creating responsive and visually appealing websites using HTML, CSS, and JavaScript, with a focus on user experience and usability.",
    },
    {
        title: "API Integration:",
        description: "API Integration: Connecting and communicating with third-party APIs to incorporate additional functionalities into websites, such as payment gateway integration, social media integration, maps, etc.",
    },
    {
        title: "User Interface Development: ",
        description: "Designing and developing interactive and dynamic user interfaces using frameworks and libraries like React.",
    },
    {
        title: "Maintenance and Updates:",
        description: " Providing ongoing support, bug fixes, and updates for existing websites to ensure their long-term functionality and security.",
    },
    {
        title: "Continuous Research and Learning",
        description: " Staying updated on the latest trends and advancements in frontend development, learning new technologies, and exploring innovative solutions to enhance skillset.",
    },
];

const dataportfolio = [
    {
        img: require("./assets/images/hotel-mainpage.jpg"),
        description: "Application to manage hotel reservations",
        link: "https://github.com/robertgrc/ProyectoHotel",
    },
    {
        img: require("./assets/images/sinc-mailchimp.jpg"),
        description: "Contacts Sync",
        link: "https://github.com/robertgrc/Mail-chimp",
    },
    {
        img: require("./assets/images/heroes-app-grc.jpg"),
        description: "Heroes App, shows information of heroes with their respective images .",
        link: "https://github.com/robertgrc/heroes-app-2022",
    },
    {
        img: require("./assets/images/calendar-app.jpg"),
        description: "Calendar App, create events in a calendar assigning registered users in backend .",
        link: "https://github.com/robertgrc/mern-calendar-ferher.git",
    },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },

    // {
    //     img: "https://picsum.photos/400/600/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/300/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/550/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
    // {
    //     img: "https://picsum.photos/400/700/?grayscale",
    //     description: "The wisdom of life consists in the elimination of non-essentials.",
    //     link: "#",
    // },
];

const contactConfig = {
    YOUR_EMAIL: "robert.rodriguez.rgrc.7@gmail.com",
    YOUR_FONE: "(+591)70784004",
    YOUR_LINKEDLN: "linkedin.com/in/robert-gary-rodriguez-corrales-a7670122b",
    description: "Hi, I'm Robert Rodriguez and I'm a Web Developer in Bolivia and I offer my services in programming and developing all kinds of web projects. ",
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};