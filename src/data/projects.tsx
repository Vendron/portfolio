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
    tags: Array<{ [key: string]: string }>;
    relatedProjects: Array<number>;
};


export const projects: Project[] = [
    {
        id: 1,
        title: "Scikit-Longitudinal Package",
        metric: "Longitudinal Data Analysis",
        imageUrl: "/images/Scikit-long-banner.png",
        altText: "NLP word cloud",
        description: "An open-source Python package designed for longitudinal data analysis in machine learning, specifically focused on health data. Features include pre-built models for age prediction and customizable data processing pipelines.",
        startDate: "2024-09-07",
        endDate: "2023-03-15",
        githubUrl: "https://github.com/username/scikit-longitudinal",
        websiteUrl: "https://simonprovost.github.io/scikit-longitudinal/",
        tags: [{ Python: "bg-yellow-500" }, { "Machine Learning": "bg-blue-500" }, { "Data Analysis": "bg-green-600" }],
        relatedProjects: [2, 3],
    },
    {
        id: 2,
        title: "Helio Discord App",
        metric: "500,000 users+",
        imageUrl: "/images/helio_game.png",
        altText: "NLP word cloud",
        description: "Helio is a game-focused Discord bot designed to integrate with popular game APIs and provide real-time multiplayer matchmaking. Built with TypeScript and leveraging Machine Learning for player ranking predictions.",
        startDate: "2020-05-01",
        endDate: "2021-09-30",
        githubUrl: "https://github.com/username/helio-bot",
        websiteUrl: "https://helio.gg",
        tags: [{ Game: "bg-yellow-500" }, { "Machine Learning": "bg-blue-500" }, { TypeScript: "bg-blue-600" }],
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
        tags: [{ Community: "bg-yellow-500" }, { "Machine Learning": "bg-blue-500" }],
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
        tags: [{ JavaScript: "bg-yellow-500" }, { Discord: "bg-blue-500" }, { AI: "bg-green-600" }],
        relatedProjects: [2, 3],
    },
    // Add more projects as needed...
];