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
                            <h3 className="font-semibold font-display text-base">
                                <a href={project.link.href} target="_blank" rel="noreferrer" className="hover:underline decoration-stone-300 underline-offset-4 decoration-1">
                                    {project.title}
                                </a>
                            </h3>
                            <p className="text-sm text-stone-500 leading-relaxed flex-1 text-pretty">{project.description}</p>
                            <div className="flex gap-2 flex-wrap mt-auto pt-2">
                                {project.techStack.map(t => <Badge key={t} variant="outline" className="text-[10px] text-stone-500 border-stone-200 font-normal bg-stone-50/50">{t}</Badge>)}
                            </div>
                        </Card>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
