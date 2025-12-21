import { Section } from "./ui/section";
import { RESUME_DATA } from "../data/resume";
import { Badge } from "./ui/badge";
import { FadeIn } from "./ui/fade-in";

export function Experience() {
    return (
        <Section>
            <FadeIn>
                <h2 className="text-xl font-bold font-display mb-8">Work Experience</h2>
            </FadeIn>
            <div className="space-y-12">
                {RESUME_DATA.work.map((work, index) => (
                    <FadeIn key={work.company} delay={index * 0.1}>
                        <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-between group">
                            <div className="md:w-1/4 flex-shrink-0">
                                <h3 className="font-semibold text-stone-900">{work.company}</h3>
                                <p className="text-sm text-stone-400 font-mono mt-1">{work.start} - {work.end}</p>
                            </div>
                            <div className="md:w-3/4 space-y-3">
                                <p className="font-medium text-stone-900">{work.title}</p>
                                <p className="text-sm text-stone-600 leading-relaxed text-pretty">{work.description}</p>
                                <div className="flex gap-2 flex-wrap">
                                    {work.badges.map(b => <Badge key={b} variant="secondary" className="bg-stone-100 text-stone-600 hover:bg-stone-200">{b}</Badge>)}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
