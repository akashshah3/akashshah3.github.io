import { Github, Linkedin, Mail } from "lucide-react";

export const RESUME_DATA = {
    name: "Akash Shah",
    initials: "AS",
    location: "Nagpur, Maharashtra, India",
    locationLink: "https://www.google.com/maps/place/Nagpur,+Maharashtra",
    about:
        "Computer Science Student focused on AI/ML and Full Stack Development. Passionate about building intelligent systems and robust applications.",
    summary:
        "Final year B.Tech student specializing in Computer Science and Engineering. Experienced in building full-stack applications and AI models. Proven track record of delivering real-world projects during internships and hackathons.",
    avatarUrl: "https://github.com/akashshah3.png",
    personalWebsiteUrl: "https://github.com/akashshah3",
    contact: {
        email: "akashshah20031@gmail.com",
        tel: "+919309554378",
        social: [
            {
                name: "GitHub",
                url: "https://github.com/akashshah3",
                icon: Github,
            },
            {
                name: "LinkedIn",
                url: "https://linkedin.com/in/akash-shah3",
                icon: Linkedin,
            },
            {
                name: "Email",
                url: "mailto:akashshah20031@gmail.com",
                icon: Mail,
            },
        ],
    },
    education: [
        {
            school: "Symbiosis Institute of Technology",
            degree: "Bachelor of Technology in Computer Science and Engineering",
            start: "2022",
            end: "2026",
        },
        {
            school: "Dinanath High School and Junior College",
            degree: "Higher Secondary School Certificate",
            start: "2020",
            end: "2022",
        },
    ],
    work: [
        {
            company: "Estree Foundation",
            link: "https://estree.org", // Placeholder if not known
            badges: ["Internship"],
            title: "Full Stack Intern",
            start: "July 2024",
            end: "Nov 2024",
            description:
                "Designed and developed a full-stack E-commerce platform for eco-friendly jute bags. implemented product catalog, shopping cart, and order management. Built front-end with React.js, HTML, CSS. Developed RESTful APIs with Node.js/Express and MongoDB.",
        },
    ],
    skills: [
        "Java",
        "C++",
        "Python",
        "JavaScript",
        "ReactJS",
        "Node.js",
        "MongoDB",
        "SQL",
        "Machine Learning (Scikit-learn, TensorFlow)",
        "NLP",
        "Streamlit",
        "Git",
    ],
    projects: [
        {
            title: "MindMentor (AI Study Buddy)",
            techStack: ["Python", "NLP", "Streamlit", "Transformers"],
            description:
                "AI-powered personal study assistant. Implemented NLP to analyze notes, identify learning gaps, and provide feedback.",
            link: {
                label: "View Project",
                href: "#", // Placeholder
            },
        },
        {
            title: "GutHeart",
            techStack: ["Python", "Scikit-learn", "Streamlit", "SHAP"],
            description:
                "AI application predicting cardiovascular disease risk from gut microbiome data. Deployed at gutheart.streamlit.app.",
            link: {
                label: "gutheart.streamlit.app",
                href: "https://gutheart.streamlit.app",
            },
        },
        {
            title: "Credit Card Optimization Tool",
            techStack: ["Python", "Flask", "Pandas", "Streamlit"],
            description:
                "Recommends best credit cards for cashback based on user expenses. Implemented rule-based optimization logic.",
            link: {
                label: "View Project",
                href: "#",
            },
        },
    ],
}
