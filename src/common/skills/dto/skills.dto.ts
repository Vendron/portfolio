/**
 * @interface Skill
 * @brief                               Represents a skill in the user's profile.
 * @description                         The Skill interface defines the structure of a skill entry, 
 *                                      including the skill's name, proficiency level, and an associated 
 *                                      icon for visual representation. 
 * 
 * @property {number} id                The unique identifier for the skill.
 * @property {string} name              The name of the skill.
 * @property {string} level             The proficiency level of the skill (e.g., beginner, intermediate, advanced).
 * @property {JSX.Element} icon         A JSX element representing the icon associated with the skill.
 */
export interface Skill {
    id: number;
    name: string;
    level: string;
    icon: JSX.Element;
}