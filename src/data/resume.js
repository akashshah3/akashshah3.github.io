import { Github, Linkedin, Mail, Globe } from "lucide-react";

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
    skills: {
        languages: ["Java", "C", "C++", "Python", "JavaScript"],
        frameworks: ["ReactJS", "Node.js", "Express", "Streamlit", "Flask"],
        tools: ["Git", "Postman", "Docker", "Linux (Ubuntu/Fedora)"],
        libraries: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Keras", "NLTK", "OpenCV"],
        databases: ["MongoDB", "SQL", "PostgreSQL"],
    },
    certifications: [
        {
            name: "ServiceNow: Certified System Administrator (CSA)",
            issuer: "ServiceNow",
            year: "2025",
            link: "#", // Add verification link
        },
        {
            name: "ServiceNow: Certified Application Developer (CAD)",
            issuer: "ServiceNow",
            link: "#",
        },
        {
            name: "Red Hat Certified System Administrator (RH124)",
            issuer: "Red Hat",
            link: "#",
        },
        {
            name: "Oracle Cloud Infrastructure & Database Foundations",
            issuer: "Oracle",
            link: "#",
        },
        {
            name: "Java Programming Fundamentals",
            issuer: "Infosys Springboard",
            link: "#",
        }
    ],
    research: [
        {
            title: "Gut Microbiome-based Cardiovascular Prediction using Random Forest Model",
            conference: "2024 Control Instrumentation System Conference (CISCON)",
            authors: "Akash Shah, Akshat Duggal, Arya Gaurkar, Monali Gulhane",
            doi: "10.1109/CISCON62171.2024.10696178",
            year: "2024",
        },
        {
            title: "Evaluating Generative Models: A Review of Challenges and Opportunities",
            conference: "2025 2nd International Conference on Computational Intelligence, Communication Technology and Networking (CICTN)",
            authors: "Akash Shah, Nitin Rakesh, Monali Gulhane, et al.",
            doi: "10.1109/cictn64563.2025.10932502",
            year: "2025",
        }
    ],
    projects: [
        {
            title: "MindMentor (AI Study Buddy)",
            techStack: ["Python", "NLP", "Streamlit", "Transformers"],
            description:
                "AI-powered personal study assistant. Implemented NLP to analyze notes, identify learning gaps, and provide feedback.",
            links: [
                {
                    type: "Source",
                    href: "https://github.com/akashshah3/MindMentor",
                    icon: Github,
                },
                {
                    type: "Demo",
                    href: "https://mindmentor.streamlit.app/",
                    icon: Globe,
                },
            ],
        },
        {
            title: "GutHeart",
            techStack: ["Python", "Scikit-learn", "Streamlit", "SHAP"],
            description:
                "AI application predicting cardiovascular disease risk from gut microbiome data. Deployed at gutheart.streamlit.app.",
            links: [
                {
                    type: "Source",
                    href: "https://github.com/akashshah3/GutHeart",
                    icon: Github,
                },
                {
                    type: "Demo",
                    href: "https://gutheart.streamlit.app/",
                    icon: Globe,
                },
            ],
        },
        {
            title: "Claims Description Normalizer",
            techStack: ["Python", "Streamlit", "scikit-learn", "TF-IDF"],
            description:
                "An intelligent system that extracts 7 structured fields from unstructured insurance claim text with 82.93% average accuracy.",
            links: [
                {
                    type: "Source",
                    href: "https://github.com/akashshah3/Claims-Description-Normalizer/tree/owm-model",
                    icon: Github,
                },
                {
                    type: "Demo",
                    href: "https://claims-description-normalizer-custom-model.streamlit.app/",
                    icon: Globe,
                },
            ],
        },
        {
            title: "Credit Card Optimization Tool",
            status: "In Progress",
            techStack: ["Python", "Flask", "Pandas", "Streamlit"],
            description:
                "Recommends best credit cards for cashback based on user expenses. Implemented rule-based optimization logic.",
            links: [],
        },
    ],
}
