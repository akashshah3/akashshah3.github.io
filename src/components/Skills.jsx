import { Section } from "./ui/section";
import { RESUME_DATA } from "../data/resume";
import { Badge } from "./ui/badge";
import { FadeIn } from "./ui/fade-in";

export function Skills() {
    return (
        <Section>
            <FadeIn>
                <h2 className="text-xl font-bold font-display mb-8">Technical Skills</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                {Object.entries(RESUME_DATA.skills).map(([category, skills], index) => (
                    <FadeIn key={category} delay={index * 0.1}>
                        <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-3">{category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map(skill => (
                                <Badge key={skill} variant="secondary" className="bg-stone-50 text-stone-900 border-stone-200 hover:bg-stone-100 rounded-md">
                                    {skill}
                                </Badge>
                            ))}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
