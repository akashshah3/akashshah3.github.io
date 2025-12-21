import { Section } from "./ui/section";
import { RESUME_DATA } from "../data/resume";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { FadeIn } from "./ui/fade-in";

export function Projects() {
    return (
        <Section className="max-w-4xl print:hidden">
            <FadeIn>
                <h2 className="text-xl font-bold font-display mb-8">Projects</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESUME_DATA.projects.map((project, index) => (
                    <FadeIn key={project.title} delay={index * 0.1} className="h-full">
                        <Card className="flex flex-col gap-3 hover:bg-stone-50 transition-colors border-stone-200/60 h-full">
                            <h3 className="font-semibold font-display text-base text-stone-900 flex items-center gap-2">
                                {project.title}
                                {project.status && (
                                    <span className="bg-amber-100 text-amber-700 text-[10px] px-1.5 py-0.5 rounded-md font-medium border border-amber-200">
                                        {project.status}
                                    </span>
                                )}
                            </h3>
                            <p className="text-sm text-stone-500 leading-relaxed flex-1 text-pretty">{project.description}</p>

                            <div className="flex gap-2 flex-wrap mb-1">
                                {project.techStack.map(t => <Badge key={t} variant="outline" className="text-[10px] text-stone-500 border-stone-200 font-normal bg-stone-50/50">{t}</Badge>)}
                            </div>

                            <div className="flex gap-2 pt-2 mt-auto">
                                {project.links.map((link) => (
                                    <a
                                        key={link.href}
                                        href={link.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-md transition-all bg-stone-900 text-stone-50 hover:bg-stone-800 hover:scale-105 active:scale-95 shadow-sm"
                                    >
                                        <link.icon className="h-3 w-3" />
                                        {link.type}
                                    </a>
                                ))}
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
