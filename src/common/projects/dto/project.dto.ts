import { IconType } from "react-icons";

/**
 * @interface Project
 * @brief           Represents a project in the portfolio.
 * @description     The Project interface defines the structure of a project entry, 
 *                  including details such as its title, description, associated dates, 
 *                  links to external resources (like GitHub and a website), and metadata 
 *                  related to the project, such as tags and related projects.
 * 
 * @property {number} id                        The unique identifier for the project.
 * @property {string} title                     The title of the project.
 * @property {string} metric                    A metric associated with the project (e.g., performance metric).
 * @property {string} imageUrl                  The URL of an image representing the project.
 * @property {string} altText                   Alternative text for the project image.
 * @property {string} description               A detailed description of the project.
 * @property {string} startDate                 The start date of the project in ISO format.
 * @property {string} endDate                   The end date of the project in ISO format.
 * @property {string | null} githubUrl          The URL to the project's GitHub repository, or null if not available.
 * @property {string | null} websiteUrl         The URL to the project's website, or null if not available.
 * @property {Array<{ name: string; color: string; icon: IconType }>} tags An array of tags associated with the project, each containing a name, color, and icon.
 * @property {Array<number>} relatedProjects    An array of project IDs that are related to this project.
 */
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
}