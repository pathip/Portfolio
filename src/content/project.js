import { faGithub } from "@fortawesome/free-brands-svg-icons";
import picPortfolio from '../assets/portfolioWebsite.png';

export const data = [
    {
        date: "Jan 2026",
        title: "Portfolio",
        link: "",
        materials: [
            { type: faGithub, link: "https://github.com/pathip" }
        ],
        description: [
            "A simple and minimalist for learning how to develop website by using React and TailwindCSS, designed to be simple and clean"
        ],
        skill: [
            ["React", "TailwindCSS"]
        ],
        picture: picPortfolio,
    },
    {
        date: "2023 - 2024",
        title: "Univania",
        link: "https://github.com/pathip/Univania-Cos4106.git",
        materials: [
            { type: faGithub, link: "https://github.com/pathip/Univania-Cos4106.git" }
        ],
        description: [
            "The objective of this project is learning to develop 2D Action Platformer(Metrovania) game name Univania and learning moreabout Game Development and Game Design"
        ],
        skill: [
            ["Unity2D", "C#"]
        ],
        picture: picPortfolio,
    }
]