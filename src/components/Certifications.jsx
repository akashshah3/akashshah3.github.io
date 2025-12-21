import { Section } from "./ui/section";
import { RESUME_DATA } from "../data/resume";
import { FadeIn } from "./ui/fade-in";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";
import { cn } from "../lib/utils";

export function Certifications() {
    return (
        <Section>
            <FadeIn>
                <h2 className="text-xl font-bold font-display mb-8">Certifications</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESUME_DATA.certifications.map((cert, index) => (
                    <FadeIn key={cert.name} delay={index * 0.05}>
                        <a
                            href={cert.link || "#"}
                            target={cert.link ? "_blank" : undefined}
                            rel={cert.link ? "noreferrer" : undefined}
                            className={cn(
                                "flex flex-col h-full justify-between p-4 bg-stone-50 rounded-lg border border-stone-100 transition-all group",
                                cert.link ? "hover:border-stone-300 hover:bg-stone-100 cursor-pointer" : "hover:border-stone-200 cursor-default"
                            )}
                        >
                            <h3 className="font-medium text-stone-900 text-sm leading-tight flex justify-between items-start gap-2">
                                {cert.name}
                                {cert.link && <ExternalLink className="h-3 w-3 text-stone-300 group-hover:text-stone-500 transition-colors flex-shrink-0 mt-0.5" />}
                            </h3>
                            <div className="flex items-center justify-between mt-3">
                                <span className="text-xs text-stone-500">{cert.issuer}</span>
                                {cert.year && <span className="text-xs font-mono text-stone-400">{cert.year}</span>}
                            </div>
                        </a>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}
