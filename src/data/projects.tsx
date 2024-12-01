import {
    SiPython,
    SiTypescript,
    SiScikitlearn,
    SiTensorflow,
    SiDiscord,
    SiNestjs,
    SiAngular,
    SiAmazon,
} from "react-icons/si";
import { FaNetworkWired } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { IconType } from "react-icons";
import { Project } from "@/common/projects/dto/project.dto";

export const projects: Project[] = [
    {
        id: 2,
        title: "Helio - Discord Economy App",
        metric: "1,000,000+ users in 2 years",
        imageUrl: "/images/helio_game.png",
        altText: "NLP word cloud",
        description:
            "Helio is a game-focused Discord bot designed to integrate with popular game APIs, providing real-time multiplayer matchmaking and engaging player-driven markets. The game uses Machine Learning to optimise player engagement, creating a dynamic and interactive experience.\n## Key Features\n\n#### Player-Driven Markets\n- Machine learning models analyse player behavior to adjust in-game economies, item prices and drop-rates.\n#### Image Generation\n- New items, pets, cosmetics, and monsters are procedurally generated using AI-based image creation tools.\n#### Procedural Dungeon Generation\n- Infinite, re-playable dungeons are generated for players, ensuring a fresh experience each time.\n\n## My Role\nI created of the Helio bot, and later expanded the team to include additional developers, rebasing the entire project. My contributions included:\n\n- Designing the game and creating the in-game artwork.\n- Conducting A/B testing and playtests to analyze player interactions.\n- Implementing features based on the most used and enjoyed aspects of the game.\n- Organizing SCRUM meetings and writing hundreds of user stories to guide development.\n- Managing a global team of 11 developers.\n\nHelio is built with **TypeScript** and uses advanced technologies to deliver a unique gaming experience on Discord.",
        startDate: "2022-08-23",
        endDate: "Present",
        githubUrl: "https://github.com/heliogame",
        websiteUrl: "https://helio.gg",
        tags: [
            { name: "NestJS", color: "bg-blue-500", icon: SiNestjs },
            { name: "Angular", color: "bg-red-500", icon: SiAngular },
            {
                name: "Websockets",
                color: "bg-yellow-500",
                icon: FaNetworkWired,
            },
            { name: "TypeScript", color: "bg-blue-500", icon: SiTypescript },
        ],
        relatedProjects: [1, 4],
    },
    {
        id: 1,
        title: "Scikit-Longitudinal - Python Package",
        metric: "Longitudinal Data Analysis",
        imageUrl: "/images/Scikit-long-banner-upscale.png",
        altText: "NLP word cloud",
        description:
            "An open-source Python package designed for longitudinal data analysis in machine learning, specifically focused on health data. Features include pre-built models for age prediction and customizable data processing pipelines.\n\nI added functions for Deep Learning models to handle the longitudinal data, keeping the temporal vector for RNNs and CNNs with their inputs having the same shape. I also added a function to handle the data in a way that the user can choose the time window for the data to be processed, and the function will return the data in the format that the user wants.",
        startDate: "2024-09-07",
        endDate: "Present",
        githubUrl: "https://github.com/simonprovost/scikit-longitudinal",
        websiteUrl: "https://simonprovost.github.io/scikit-longitudinal/",
        tags: [
            { name: "Python", color: "bg-yellow-500", icon: SiPython },
            {
                name: "Machine Learning",
                color: "bg-blue-500",
                icon: SiScikitlearn,
            },
            { name: "TensorFlow", color: "bg-green-600", icon: SiTensorflow },
        ],
        relatedProjects: [2, 3],
    },
    {
        id: 3,
        title: "Biggest Mental Health Discord Community",
        metric: "700,000+ joins in 3 years",
        imageUrl: "/images/DABanner.png",
        altText: "NLP word cloud",
        description:
            "Managed the largest mental health support Discord server, providing users access to mental health resources and a safe community space. Included AI-powered sentiment analysis to detect distress signals in real-time.",
        startDate: "2019-07-12",
        endDate: "2021-12-01",
        githubUrl: null, // No GitHub for this project
        websiteUrl: "https://depressionsantidote.com",
        tags: [
            { name: "Discord", color: "bg-purple-500", icon: SiDiscord },
            { name: "Analytics", color: "bg-blue-500", icon: IoAnalytics },
            {
                name: "Community Management",
                color: "bg-blue-500",
                icon: IoAnalytics,
            },
            {
                name: "Community Management",
                color: "bg-blue-500",
                icon: IoAnalytics,
            },
        ],
        relatedProjects: [2, 4],
    },
    {
        id: 4,
        title: "Dionysus - Discord Analytics App",
        metric: "500,000+ users in 1 year",
        imageUrl: "/images/Dionysushead.png",
        altText: "Climate prediction model visualization",
        description:
            "A comprehensive Discord bot focused on moderation and community engagement, built using Node.js and Discord.js. The bot features custom AI-powered moderation tools and an easy-to-use interface for users.",
        startDate: "2021-03-15",
        endDate: "2022-06-10",
        githubUrl: null,
        websiteUrl: null,
        tags: [
            { name: "Python", color: "bg-yellow-500", icon: SiPython },
            // { name: "Data Visualization", color: "bg-blue-500", icon: SiMatplotlib },
            { name: "Discord", color: "bg-purple-500", icon: SiDiscord },
            { name: "Analytics", color: "bg-blue-500", icon: IoAnalytics },
        ],
        relatedProjects: [2, 3],
    },
    {
        id: 5,
        title: "Electric Eel",
        metric: "Retail E-Commerce Platform",
        imageUrl: "/images/electric-eel.jpg",
        altText: "Climate prediction model visualization",
        description:
            "Founded a retail e-commerce business focused on selling cables, and accessories on Amazon. Managed the end-to-end process from product sourcing to customer service.",
        startDate: "2014-04-20",
        endDate: "present",
        githubUrl: "https://github.com/username/dionysus-bot",
        websiteUrl: "https://dionysus.gg",
        tags: [
            { name: "Amazon", color: "bg-neutral-950", icon: SiAmazon },
            { name: "E-Commerce", color: "bg-blue-500", icon: IoAnalytics },
        ],
        relatedProjects: [],
    },
    {
        id: 6,
        title: "Kaoku - Multi-purpose Application",
        metric: "Discord Bot",
        imageUrl: "/images/electric-eel.jpg",
        altText: "Climate prediction model visualization",
        description:
            "A multi-purpose Discord bot that provides a wide range of features, including moderation, utility, and fun commands. The bot is designed to be easy to use and highly customizable.\n## Functionality\n- Tracked user statistics, messages sent and time spent in calls per channel per day, and overall server activity, with periodic reports. scalable for handling millions of users with minimal latency.\n- Implemented a custom command handler to manage commands and events, with a modular structure for easy maintenance and extensibility.\n- Created a custom database system to store user data, server settings, and other persistent data, with automatic backups and data recovery in case of failure.\n- Developed a web dashboard to manage the bot, with real-time statistics, user management, and server configuration.\n\n## Technologies\n- **TypeScript** for the bot's core functionality, with **Node.js** for the backend with PostgreSQL for the database and **React** for the dashboard.",
        startDate: "2014-04-20",
        endDate: "present",
        githubUrl: "https://github.com/vendron/kaoku",
        websiteUrl: null,
        tags: [
            { name: "TypeScript", color: "bg-blue-500", icon: SiTypescript },
            { name: "Discord", color: "bg-purple-500", icon: SiDiscord },
            {
                name: "Websockets",
                color: "bg-yellow-500",
                icon: FaNetworkWired,
            },
        ],
        relatedProjects: [4, 3, 2],
    },
    {
        id: 7,
        title: "Mazoku - Trading Card Game",
        metric: "Discord Bot",
        imageUrl: "/images/mazoku.jpg",
        altText: "Mazoku Trading Card Game",
        description:
            "Mazoku is a dynamic trading card game (TCG) platform offering users immersive gameplay with collectible, tradeable, and battle-ready cards. As a full-time full-stack developer, I led efforts to redesign the system architecture, enhance scalability, and improve user experience.\n## Contributions\n ### Website Redesign and Development\n - Transitioned the website to a scalable **React** and **TailwindCSS** stack. \n - Delivered a responsive UI to improve accessibility and performance across devices. \n - Enhanced user engagement through modern, intuitive design principles. \n - **Backend Restructure with Domain-Driven Design (DDD)**: \n - Adopted **DDD principles** to refactor the backend, ensuring maintainability and clear separation of concerns. \n - Implemented a robust **.NET backend** optimized for high-throughput transactions to support gameplay and trading features. \n - **Image Handling and Processing**: \n - Deployed **AWS Lambda** functions for real-time image handling, reducing server load and improving response times. \n - Integrated a **Content Delivery Network (CDN)** for caching processed images, minimizing latency for global users. \n - **Scalable Deployment and Infrastructure**: \n - Configured **Amazon ECS (Elastic Container Service)** and deployed across multiple **EC2 instances**, ensuring horizontal scalability. \n - Improved uptime and reliability during traffic spikes by adopting scalable architecture. \n - **System Resilience Improvements**: \n - Optimized backend resource allocation to reduce operational costs. \n - Enhanced workflow scalability for key services, ensuring a seamless user experience. \n **Achievements**: \n - Successfully delivered a modern, responsive UI that adheres to web standards. \n - Designed and implemented a scalable backend architecture to support growth and high activity levels. \n - Developed cost-effective, high-performance serverless and containerized solutions. \n **Technologies Used**: \n - **Frontend**: React, TailwindCSS \n - **Backend**: .NET, Domain-Driven Design (DDD) \n - **Cloud Services**: AWS Lambda, ECS, EC2, CDN \n - **DevOps**: Docker, AWS Elastic Container Service \n This project highlights expertise in full-stack development, scalable cloud-native architecture, and delivering an exceptional user experience for Mazoku’s expanding community.",
        startDate: "2024-10-25",
        endDate: "Present",
        githubUrl: "https://github.com/mazokulegacy",
        websiteUrl: "https://mazoku.cc",
        tags: [
            { name: "TypeScript", color: "bg-blue-500", icon: SiTypescript },
            { name: "Discord", color: "bg-purple-500", icon: SiDiscord },
            {
                name: "Websockets",
                color: "bg-yellow-500",
                icon: FaNetworkWired,
            },
        ],
        relatedProjects: [4, 3, 2],
    },
];
