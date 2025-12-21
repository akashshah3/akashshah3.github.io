import { RESUME_DATA } from "../data/resume";
import { Section } from "./ui/section";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "./ui/fade-in";
import { TextReveal } from "./ui/text-reveal";
import { Magnetic } from "./ui/magnetic";

export function Hero() {
    return (
        <Section className="py-12 md:py-20 space-y-8">
            <div className="space-y-4">
                <TextReveal className="text-4xl md:text-6xl font-bold font-display tracking-tight text-stone-950" delay={0.1}>
                    {RESUME_DATA.name}
                </TextReveal>
                <FadeIn delay={0.3}>
                    <p className="text-xl text-stone-600 max-w-lg leading-relaxed">
                        {RESUME_DATA.about}
                    </p>
                </FadeIn>
            </div>

            <FadeIn className="flex gap-4 text-stone-500" delay={0.2}>
                {RESUME_DATA.contact.social.map((social) => (
                    <Magnetic key={social.name}>
                        <a
                            href={social.url}
                            target="_blank"
                            rel="noreferrer"
                            className="block p-2 border border-stone-200 rounded-md hover:bg-stone-100 transition-colors"
                            aria-label={social.name}
                        >
                            <social.icon className="h-5 w-5" />
                        </a>
                    </Magnetic>
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
