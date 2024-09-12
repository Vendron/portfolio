import { SiPython, SiTypescript, SiScikitlearn, SiTensorflow, SiDiscord, SiNestjs, SiAngular, SiAmazon } from 'react-icons/si';
import { FaNetworkWired } from 'react-icons/fa';
import { IoAnalytics } from 'react-icons/io5';
import { IconType } from "react-icons";

export type Project = {
    id: number;
    title: string;
    metric: string;
    imageUrl: string;
    altText: string;
    description: string;
    startDate: string;
    endDate: string;
    githubUrl: string | null;
    websiteUrl: string | null;
    tags: Array<{ name: string; color: string; icon: IconType }>;
    relatedProjects: Array<number>;
};

export const projects: Project[] = [
    {
        id: 1,
        title: "Scikit-Longitudinal Package",
        metric: "Longitudinal Data Analysis",
        imageUrl: "/images/Scikit-long-banner.png",
        altText: "NLP word cloud",
        description: "An open-source Python package designed for longitudinal data analysis in machine learning, specifically focused on health data. Features include pre-built models for age prediction and customizable data processing pipelines.\n\nI added functions for Deep Learning models to handle the longitudinal data, keeping the temporal vector for RNNs and CNNs with their inputs having the same shape. I also added a function to handle the data in a way that the user can choose the time window for the data to be processed, and the function will return the data in the format that the user wants.",
        startDate: "2024-09-07",
        endDate: "Present",
        githubUrl: "https://github.com/username/scikit-longitudinal",
        websiteUrl: "https://simonprovost.github.io/scikit-longitudinal/",
        tags: [
            { name: "Python", color: "bg-yellow-500", icon: SiPython },
            { name: "Machine Learning", color: "bg-blue-500", icon: SiScikitlearn },
            { name: "TensorFlow", color: "bg-green-600", icon: SiTensorflow },
        ],
        relatedProjects: [2, 3],
    },
    {
        id: 2,
        title: "Helio Discord App",
        metric: "500,000 users+",
        imageUrl: "/images/helio_game.png",
        altText: "NLP word cloud",
        description: "Helio is a game-focused Discord bot designed to integrate with popular game APIs and provide real-time multiplayer matchmaking. Built with TypeScript and leveraging Machine Learning for player ranking predictions.",
        startDate: "2022-08-23",
        endDate: "Present",
        githubUrl: "https://github.com/heliogame",
        websiteUrl: "https://helio.gg",
        tags: [
            { name: "NestJS", color: "bg-blue-500", icon: SiNestjs },
            { name: "Angular", color: "bg-red-500", icon: SiAngular },
            { name: "Websockets", color: "bg-yellow-500", icon: FaNetworkWired },
            { name: "TypeScript", color: "bg-blue-500", icon: SiTypescript },
        ],
        relatedProjects: [1, 4],
    },
    {
        id: 3,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000 joins+",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
        description: "Managed the largest mental health support Discord server, providing users access to mental health resources and a safe community space. Included AI-powered sentiment analysis to detect distress signals in real-time.",
        startDate: "2019-07-12",
        endDate: "2021-12-01",
        githubUrl: null, // No GitHub for this project
        websiteUrl: "https://depressionsantidote.com",
        tags: [
            { name: "Discord", color: "bg-purple-500", icon: SiDiscord },
            { name: "Analytics", color: "bg-blue-500", icon: IoAnalytics  },
        ],
        relatedProjects: [2, 4],
    },
    {
        id: 4,
        title: "Dionysus Discord App",
        metric: "100,000 users+",
        imageUrl: "/images/Dionysushead.png",
        altText: "Climate prediction model visualization",
        description: "A comprehensive Discord bot focused on moderation and community engagement, built using Node.js and Discord.js. The bot features custom AI-powered moderation tools and an easy-to-use interface for users.",
        startDate: "2021-03-15",
        endDate: "2022-06-10",
        githubUrl: "https://github.com/username/dionysus-bot",
        websiteUrl: "https://dionysus.gg",
        tags: [
            { name: "Python", color: "bg-yellow-500", icon: SiPython },
            // { name: "Data Visualization", color: "bg-blue-500", icon: SiMatplotlib },
            { name: "Discord", color: "bg-purple-500", icon: SiDiscord },
        ],
        relatedProjects: [2, 3],
    },
    {
        id: 4,
        title: "Electric Eel",
        metric: "Retail E-Commerce Platform",
        imageUrl: "/images/electric-eel.jpg",
        altText: "Climate prediction model visualization",
        description: "Founded a retail e-commerce business focused on selling cables, and accessories on Amazon. Managed the end-to-end process from product sourcing to customer service.", 
        startDate: "2014-04-20",
        endDate: "present",
        githubUrl: "https://github.com/username/dionysus-bot",
        websiteUrl: "https://dionysus.gg",
        tags: [
            {name: "Amazon", color: "bg-neural-500", icon: SiAmazon},
            {name: "E-Commerce", color: "bg-blue-500", icon: IoAnalytics},
        ],
        relatedProjects: [2, 3],
    },
];