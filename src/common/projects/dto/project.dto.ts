import { IconType } from "react-icons";

export interface Project {
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