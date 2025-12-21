import { Section } from "./ui/section";
import { RESUME_DATA } from "../data/resume";
import { FadeIn } from "./ui/fade-in";
import { Badge } from "./ui/badge";

export function Certifications() {
    return (
        <Section>
            <FadeIn>
                <h2 className="text-xl font-bold font-display mb-8">Certifications</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESUME_DATA.certifications.map((cert, index) => (
                    <FadeIn key={cert.name} delay={index * 0.05}>
                        <div className="flex flex-col h-full justify-between p-4 bg-stone-50 rounded-lg border border-stone-100 hover:border-stone-200 transition-colors">
                            <h3 className="font-medium text-stone-900 text-sm leading-tight">{cert.name}</h3>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-stone-500">{cert.issuer}</span>
                                {cert.year && <span className="text-xs font-mono text-stone-400">{cert.year}</span>}
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
