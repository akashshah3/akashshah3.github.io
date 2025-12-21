import { Section } from "./ui/section";
import { RESUME_DATA } from "../data/resume";
import { FadeIn } from "./ui/fade-in";
import { FileText } from "lucide-react";

export function Research() {
    return (
        <Section>
            <FadeIn>
                <h2 className="text-xl font-bold font-display mb-8">Research Publications</h2>
            </FadeIn>
            <div className="space-y-8">
                {RESUME_DATA.research.map((item, index) => (
                    <FadeIn key={item.title} delay={index * 0.1} className="pl-4 border-l-2 border-stone-100 hover:border-stone-300 transition-colors">
                        <h3 className="font-semibold text-stone-900 leading-snug">
                            {item.title}
                        </h3>
                        <p className="text-sm text-stone-500 mt-1 font-mono">{item.conference} • {item.year}</p>
                        <p className="text-sm text-stone-600 mt-2 italic text-pretty">{item.authors}</p>
                        {item.doi && (
                            <a href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-3 text-xs font-medium text-stone-400 hover:text-stone-900 transition-colors">
                                <FileText className="h-3 w-3" />
                                DOI: {item.doi}
                            </a>
                        )}
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
