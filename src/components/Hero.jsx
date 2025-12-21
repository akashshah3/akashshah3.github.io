import { RESUME_DATA } from "../data/resume";
import { Section } from "./ui/section";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "./ui/fade-in";

export function Hero() {
    return (
        <Section className="py-20 md:py-32 space-y-8">
            <FadeIn className="space-y-4" delay={0.1}>
                <h1 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-stone-950">
                    {RESUME_DATA.name}
                </h1>
                <p className="text-xl text-stone-600 max-w-lg leading-relaxed">
                    {RESUME_DATA.about}
                </p>
            </FadeIn>

            <FadeIn className="flex gap-4 text-stone-500" delay={0.2}>
                {RESUME_DATA.contact.social.map((social) => (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 border border-stone-200 rounded-md hover:bg-stone-100 transition-colors"
                        aria-label={social.name}
                    >
                        <social.icon className="h-5 w-5" />
                    </a>
                ))}
                <a
                    href="/Akash_Shah_Resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 border border-stone-200 rounded-md hover:bg-stone-100 text-sm font-medium transition-colors ml-auto md:ml-0"
                >
                    Resume <ExternalLink className="h-4 w-4" />
                </a>
            </FadeIn>
        </Section>
    );
}
