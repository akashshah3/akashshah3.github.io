import { Section } from "./ui/section";
import { RESUME_DATA } from "../data/resume";
import { FadeIn } from "./ui/fade-in";

export function About() {
    return (
        <Section className="py-8 md:py-12">
            <FadeIn>
                <h2 className="text-xl font-bold font-display mb-4">About</h2>
                <p className="text-stone-600 leading-relaxed text-pretty">
                    {RESUME_DATA.summary}
                </p>
            </FadeIn>
        </Section>
    )
}
