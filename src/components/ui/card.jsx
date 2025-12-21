import { cn } from "../../lib/utils";

export function Card({ className, children, ...props }) {
    return (
        <div className={cn("bg-stone-50/50 border border-stone-200 p-6 overlow-hidden", className)} {...props}>
            {children}
        </div>
    );
}
