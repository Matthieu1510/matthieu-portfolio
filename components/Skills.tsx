import React from 'react';
import { FaHtml5, FaReact, FaJava, FaGithub, FaFigma, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiSharp, SiJetbrains } from "react-icons/si";

const categories = [
    {
        name: "Frontend Development",
        skills: [
            {icon:FaHtml5, color:"#e34c26", name:"HTML & CSS", description:"Structuring & styling web pages"},
            {icon:FaReact, color:"#61dafb", name:"React", description:"Building interactive user interfaces"},
            {icon:SiNextdotjs, color:"#ffffff", name:"Next.js", description:"Server-rendered React apps"},
        ],
    },
    {
        name: "Backend Development",
        skills: [
            {icon:SiSharp, color:"#a179dc", name:"C#", description:"Object-oriented programming"},
            {icon:FaJava, color:"#f89820", name:"Java", description:"Object-oriented development"},
        ],
    },
    {
        name: "Database",
        skills: [
            {icon:FaDatabase, color:"#ff5c5c", name:"PL/SQL", description:"Queries & Oracle procedures"},
        ],
    },
    {
        name: "UI/UX Design",
        skills: [
            {icon:FaGithub, color:"#8b949e", name:"Git & GitHub", description:"Version control & collaboration"},
            {icon:FaFigma, color:"#f24e1e", name:"Figma", description:"UI/UX design & prototyping"},
            {icon:SiJetbrains, color:"#ff318c", name:"WebStorm", description:"Coding environment"},
        ],
    },
]

const Skills = () => {
    return (
        <section id="skills" className="bg-ink py-24">
            <div className="max-w-6xl mx-auto px-6">
                <span className="text-accent text-sm font-semibold uppercase tracking-wide">
                    — Skills
                </span>
                <h2 className="font-heading text-3xl font-semibold text-white mt-3 mb-4">
                    The tools I build with.
                </h2>
                <p className="text-muted max-w-2xl mb-14">
                    From the interface to the database, including business logic <br/>— here are the technologies I use and those I am exploring.
                </p>

                <div className="space-y-12">
                    {categories.map((category) => (
                        <div key={category.name}>
                            <div className="flex items-center gap-4 mb-5">
                                <h3 className="font-heading font-semibold text-white tracking-wide">
                                    {category.name}
                                </h3>
                                <div className="flex-1 h-px bg-white/10"></div>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-3 bg-ink-soft rounded-xl p-4 w-full sm:w-65">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: `${skill.color}26`, color: skill.color }}>
                                            <skill.icon size={20} />
                                        </span>
                                        <div>
                                            <div className="text-white text-sm font-semibold">
                                                {skill.name}
                                            </div>
                                            <div className="text-muted text-xs">{skill.description}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Skills
