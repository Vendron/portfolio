import Image from "next/image";
import React from "react";

interface Skill {
    id: number;
    name: string;
    level: string;
}

const skills: Skill[] = [
    { id: 1, name: "Python", level: "Advanced" },
    { id: 2, name: "JavaScript", level: "Intermediate" },
    { id: 3, name: "TypeScript", level: "Intermediate" },
    { id: 3, name: "Rust", level: "Intermediate" },
    { id: 4, name: "React", level: "Intermediate" },
    { id: 5, name: "Next.js", level: "Intermediate" },
    { id: 6, name: "Node.js", level: "Intermediate" },
    { id: 7, name: "Express.js", level: "Intermediate" },
    { id: 9, name: "Flask", level: "Intermediate" },
    { id: 10, name: "MongoDB", level: "Intermediate" },
    { id: 11, name: "PostgreSQL", level: "Intermediate" },
    { id: 12, name: "Docker", level: "Intermediate" },
    { id: 13, name: "Kubernetes", level: "Intermediate" },
    { id: 14, name: "Git", level: "Intermediate" },
    { id: 15, name: "CI/CD", level: "Intermediate" },
    { id: 16, name: "Agile", level: "Intermediate" },
];

const SkillTile: React.FC<Skill> = ({ name, level }) => (
    <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-stone-700">
        <div className="flex items-center p-4 space-x-4">
            <h3 className="text-lg font-semibold text-center text-stone-950 dark:text-white">
                {name}
            </h3>
            <p className="text-stone-600 dark:text-stone-200">{level}</p>
        </div>
    </div>
);

const SkillsSection: React.FC = () => (
    <section className="py-16 bg-stone-100 dark:bg-stone-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold text-center text-black dark:text-white">
                Skills
            </h2>
            <div className="grid justify-center grid-cols-1 gap-4 mx-auto md:grid-cols-5">
                {skills.map((skill) => (
                    <SkillTile key={skill.id} {...skill} />
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;
