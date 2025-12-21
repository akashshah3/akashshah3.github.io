import { cn } from "../../lib/utils";

export function Section({ className, id, children }) {
    return (
        <section id={id} className={cn("max-w-2xl mx-auto px-6 py-10 md:py-16", className)}>
            {children}
        </section>
    );
}
