import React from "react";
import { motion } from "framer-motion";
import {
    SiPython,
    SiTensorflow,
    SiPytorch,
    SiJavascript,
    SiTypescript,
    SiRust,
    SiDocker,
    SiKubernetes,
    SiPostgresql,
    SiMongodb,
    SiGit,
    SiReact,
    SiNodedotjs,
    SiScikitlearn,
} from "react-icons/si";
import { FaBrain, FaRobot, FaNetworkWired, FaJava } from "react-icons/fa";
import { Skill } from "@/common/skills/dto/skills.dto";

const skills: Skill[] = [
    {
        id: 1,
        name: "Python",
        level: "Advanced",
        icon: <SiPython className="w-8 h-8 text-yellow-500" />,
    },
    {
        id: 2,
        name: "TensorFlow",
        level: "Advanced",
        icon: <SiTensorflow className="w-8 h-8 text-orange-500" />,
    },
    {
        id: 3,
        name: "PyTorch",
        level: "Advanced",
        icon: <SiPytorch className="w-8 h-8 text-red-500" />,
    },
    {
        id: 4,
        name: "AI/ML Modeling",
        level: "Advanced",
        icon: <FaBrain className="w-8 h-8 text-pink-500" />,
    },
    {
        id: 5,
        name: "Deep Learning",
        level: "Advanced",
        icon: <FaRobot className="w-8 h-8 text-blue-500" />,
    },
    {
        id: 18,
        name: "Sklearn",
        level: "Advanced",
        icon: <SiScikitlearn className="w-8 h-8 text-blue-500" />,
    },
    {
        id: 6,
        name: "Data Pipelines",
        level: "Intermediate",
        icon: <FaNetworkWired className="w-8 h-8 text-purple-500" />,
    },
    {
        id: 7,
        name: "TypeScript",
        level: "Intermediate",
        icon: <SiTypescript className="w-8 h-8 text-blue-500" />,
    },
    {
        id: 8,
        name: "Rust",
        level: "Intermediate",
        icon: <SiRust className="w-8 h-8 text-orange-700" />,
    },
    {
        id: 9,
        name: "Docker",
        level: "Intermediate",
        icon: <SiDocker className="w-8 h-8 text-blue-500" />,
    },
    {
        id: 10,
        name: "Kubernetes",
        level: "Intermediate",
        icon: <SiKubernetes className="w-8 h-8 text-blue-600" />,
    },
    {
        id: 11,
        name: "PostgreSQL",
        level: "Intermediate",
        icon: <SiPostgresql className="w-8 h-8 text-blue-700" />,
    },
    {
        id: 12,
        name: "MongoDB",
        level: "Intermediate",
        icon: <SiMongodb className="w-8 h-8 text-green-600" />,
    },
    {
        id: 13,
        name: "Git",
        level: "Intermediate",
        icon: <SiGit className="w-8 h-8 text-red-600" />,
    },
    {
        id: 14,
        name: "JavaScript",
        level: "Intermediate",
        icon: <SiJavascript className="w-8 h-8 text-yellow-500" />,
    },
    {
        id: 15,
        name: "React",
        level: "Intermediate",
        icon: <SiReact className="w-8 h-8 text-blue-500" />,
    },
    {
        id: 16,
        name: "Node.js",
        level: "Intermediate",
        icon: <SiNodedotjs className="w-8 h-8 text-green-500" />,
    },
    {
        id: 17,
        name: "Java",
        level: "Intermediate",
        icon: <FaJava className="w-8 h-8 text-red-600" />,
    },
];

const SkillTile: React.FC<Skill> = ({ name, level, icon }) => (
    <motion.div
        className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md dark:bg-stone-700 hover:bg-gray-100 dark:hover:bg-stone-600"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
    >
        <div className="flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
            {name}
        </h3>
        <p className="text-stone-600 dark:text-stone-300">{level}</p>
    </motion.div>
);

const SkillsSection: React.FC = () => (
    <section className="py-16 bg-stone-100 dark:bg-stone-950">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-12 text-4xl font-bold text-center text-stone-900 dark:text-white">
                My Technical Skills
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill) => (
                    <SkillTile key={skill.id} {...skill} />
                ))}
            </div>
        </div>
    </section>
);

export default SkillsSection;
